package com.web.webcuration.common.util;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

import com.web.webcuration.model.User;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
    
    public final static long TOKEN_VALDATION = 1000L * 10;
    public final static long REFRESH_TOKEN_VALIDATION = 1000L * 60 * 24 * 2;
    
    public final static String ACCESS_TOKEN = "accessToken";
    public final static String REFRESH_TOKEN = "refreshToken";

    @Value("{Spring.jwt.secret}")
    private String SECRET_KEY;

    private Key getSigningKey(String secretKey) {
        byte[] keyBytes = secretKey.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // 토큰이 유효한 토큰인지 검사 후, 토큰에 담긴 Payload 값을 가져온다.
    public Claims extractAllClaims(String token) throws ExpiredJwtException {
        return Jwts.parserBuilder()
                    .setSigningKey(getSigningKey(SECRET_KEY))
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
    }

    // 토큰에서 Email 정보를 가져옴
    public String getUserEmail(String token) {
        return extractAllClaims(token).get("email", String.class);
    }
 
    // 토큰이 만료됐는지 확인
    public Boolean isTokenExpired(String token) {
        final Date expiration = extractAllClaims(token).getExpiration();
        return expiration.before(new Date());
    }

    // Access Token 생성
    public String generateToken(User user) {
        return doGenerateToken(user.getEmail(), TOKEN_VALDATION);
    }

    // Refresh Token 생성
    public String generateRefreshToken(User user) {
        return doGenerateToken(user.getEmail(), REFRESH_TOKEN_VALIDATION);
    }

    // 토큰을 생성, 페이로드에 담길 값 (email)
    public String doGenerateToken(String email, long expireTime) {

        Claims claims = Jwts.claims();
        claims.put("email", email);

        String jwt = Jwts.builder()
                        .setClaims(claims)
                        .setIssuedAt(new Date(System.currentTimeMillis()))
                        .setExpiration(new Date(System.currentTimeMillis() + expireTime))
                        .signWith(getSigningKey(SECRET_KEY), SignatureAlgorithm.HS256)
                        .compact();
        return jwt;
    }

    public Boolean validateToken(String token, UserDetails user) {
        final String nickname = getUserEmail(token);
        return (nickname.equals(user.getUsername()) && !isTokenExpired(token));
    }
    
}
