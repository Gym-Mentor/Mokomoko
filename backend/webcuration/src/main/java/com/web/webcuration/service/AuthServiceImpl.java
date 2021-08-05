package com.web.webcuration.service;

import java.time.LocalDateTime;

import com.web.webcuration.Entity.ConfirmationToken;
import com.web.webcuration.Entity.RefreshToken;
import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.TokenDto;
import com.web.webcuration.dto.request.AuthMailCode;
import com.web.webcuration.dto.request.SNSRequest;
import com.web.webcuration.dto.request.TokenRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.jwt.TokenProvider;
import com.web.webcuration.repository.ConfirmationTokenQueryRepository;
import com.web.webcuration.repository.RefreshTokenRepository;
import com.web.webcuration.repository.UserQueryRepository;
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
    private final UserQueryRepository userQueryRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final ConfirmationTokenService confirmationTokenService;
    private final ConfirmationTokenQueryRepository confirmationTokenQueryRepository;

    @Override
    @Transactional
    public BaseResponse signup(UserRequest userRequest) {

        if (userRepository.findByEmail(userRequest.getEmail()).isPresent()) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }

        User user = userRequest.toUser(passwordEncoder);
        return new BaseResponse("200", "success", userRepository.save(user));
    }

    @Override
    @Transactional
    public BaseResponse login(UserRequest userRequest) {

        User loginUser = userRepository.findByEmail(userRequest.getEmail()).get();
        // userRepository
        // 1. Login ID/PW를 기반으로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken = userRequest.toAuthentication();

        // 2. 실제로 검증 (사용자 비밀번호 체크)가 이루어지는 부분
        // authenticate 메서드가 실행이 될 때 CustomUserDeatailService에서 만들었던 loadUserByUsername
        // 메서드 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.createToken(authentication);

        // 4. RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder().tokenKey(authentication.getName())
                .tokenValue(tokenDto.getRefreshToken()).build();

        refreshTokenRepository.save(refreshToken);
        tokenDto.setUser(loginUser);
        // 5. 토큰 발급
        return new BaseResponse("200", "success", tokenDto);

    }

    @Override
    @Transactional
    public BaseResponse logout(String email) {
        Long tokenKey = userQueryRepository.findIdByEmail(email);
        Long effectRaw = refreshTokenRepository.deleteBytokenKey(Long.toString(tokenKey));
        System.out.println("effectRaw : " + effectRaw);
        if (effectRaw > 0) {
            return new BaseResponse("200", "success", null);
        } else {
            throw new RuntimeException("로그아웃을 실패하였습니다.");
        }
    }

    @Override
    @Transactional
    public BaseResponse reissue(TokenRequest tokenRequest) {

        // 1. RefreshToken 검증
        if (!tokenProvider.validateToken(tokenRequest.getRefreshToken())) {
            throw new RuntimeException("Refresh Token이 유효하지 않습니다.");
        }

        // 2. Access Token에서 User ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenRequest.getAccessToken());

        // 3. 저장소에서 UserID를 기반으로 Refresh Token 값 가져옴
        RefreshToken refreshToken = refreshTokenRepository.findBytokenKey(authentication.getName())
                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        // 4. Refresh Token 일치하는지 검사
        if (!refreshToken.getTokenValue().equals(tokenRequest.getRefreshToken())) {
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        // 5. 새로운 토큰 생성
        TokenDto tokenDto = tokenProvider.createToken(authentication);

        // 6. 저장소 정보 업데이트
        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
        refreshTokenRepository.save(newRefreshToken);

        // 토큰 발급
        return new BaseResponse("200", "success", tokenDto);
    }

    @Override
    @Transactional
    public BaseResponse sendAuthMail(String email) {
        if (userRepository.findByEmail(email).isPresent()) {
            ConfirmationToken confirmationToken = confirmationTokenQueryRepository.existAuthMail(email,
                    LocalDateTime.now());
            if (confirmationToken != null) {
                confirmationTokenService.deleteAuthMail(confirmationToken.getId());
            }
            confirmationTokenService.createEmailConfirmationToken(email);
            return new BaseResponse("200", "success", null);
        } else {
            throw new RuntimeException("이미 가입된 이메일이 존재합니다.");
        }
    }

    @Override
    public BaseResponse authMail(AuthMailCode authMailCode) {
        ConfirmationToken confirmationToken = confirmationTokenQueryRepository.AuthMailCodeAndTime(authMailCode,
                LocalDateTime.now());
        if (confirmationToken == null) {
            throw new RuntimeException("인증 가능한 이메일 또는 코드가 없습니다.");
        } else {
            confirmationTokenService.deleteAuthMail(confirmationToken.getId());
            return new BaseResponse("200", "success", null);
        }
    }

    @Override
    public BaseResponse findPassword(String email) {
        return null;
    }

    @Override
    public BaseResponse authFindPassword(AuthMailCode authMailCode) {
        return null;
    }

    @Override
    public BaseResponse authSNSLogin(SNSRequest snsRequest) {
        User snsUser = snsRequest.SNStoUser(passwordEncoder);
        if (userRepository.findByEmail(snsUser.getEmail()).isEmpty()) {
            userRepository.save(snsUser);
        }
        return login(new UserRequest(snsUser.getEmail(), snsUser.getEmail()));
    }

}