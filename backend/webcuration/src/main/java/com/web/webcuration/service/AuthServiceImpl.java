package com.web.webcuration.service;

import com.web.webcuration.Entity.RefreshToken;
import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.TokenDto;
import com.web.webcuration.dto.request.TokenRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.UserResponse;
import com.web.webcuration.jwt.TokenProvider;
import com.web.webcuration.repository.RefreshTokenRepository;
import com.web.webcuration.repository.UserRepository;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    @Transactional
    public UserResponse signup(UserRequest userRequest) {
        
        if(userRepository.findByEmail(userRequest.getEmail()).isPresent()){
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }

        User user = userRequest.toUser(passwordEncoder);
        
        return UserResponse.of(userRepository.save(user));
    }

    @Override
    @Transactional
    public TokenDto login(UserRequest userRequest) {

        //1. Login ID/PW를 기반으로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken = userRequest.toAuthentication();

        //2. 실제로 검증 (사용자 비밀번호 체크)가 이루어지는 부분
        // authenticate 메서드가 실행이 될 때 CustomUserDeatailService에서 만들었던 loadUserByUsername 메서드 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        //3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.createToken(authentication);

        //4. RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder()
                                        .tokenKey(authentication.getName())
                                        .tokenValue(tokenDto.getRefreshToken())
                                        .build();

        refreshTokenRepository.save(refreshToken);

        //5. 토큰 발급
        return tokenDto;
    }

    @Override
    @Transactional
    public TokenDto reissue(TokenRequest tokenRequest) {
        
        //1. RefreshToken 검증
        if(!tokenProvider.validateToken(tokenRequest.getRefreshToken())){
            throw new RuntimeException("Refresh Token이 유효하지 않습니다.");
        }

        //2. Access Token에서 User ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenRequest.getAccessToken());

        //3. 저장소에서 UserID를 기반으로 Refresh Token 값 가져옴
        RefreshToken refreshToken = refreshTokenRepository.findBytokenKey(authentication.getName())
                                        .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        //4. Refresh Token 일치하는지 검사
        if(!refreshToken.getTokenValue().equals(tokenRequest.getRefreshToken())) {
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        //5. 새로운 토큰 생성
        TokenDto tokenDto = tokenProvider.createToken(authentication);

        //6. 저장소 정보 업데이트
        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
        refreshTokenRepository.save(newRefreshToken);

        //토큰 발급
        return tokenDto;
    }

}