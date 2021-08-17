package com.web.webcuration.service;

import java.util.Optional;

import com.web.webcuration.Entity.RefreshToken;
import com.web.webcuration.repository.RefreshTokenRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RefreshTokenServiceImpl implements RefreshTokenService {

    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    public Optional<RefreshToken> findBytokenKey(String tokenKey) {
        return refreshTokenRepository.findBytokenKey(tokenKey);
    }

    @Override
    public Long deleteBytokenKey(String tokenKey) {
        return refreshTokenRepository.deleteBytokenKey(tokenKey);
    }

    @Override
    public RefreshToken creatRefreshToken(RefreshToken refreshToken) {
        return refreshTokenRepository.save(refreshToken);
    }

}
