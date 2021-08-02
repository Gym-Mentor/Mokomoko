package com.web.webcuration.Entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class ConfirmationToken {

    private static final long EMAIL_TOKEN_EXPIRATION_TIME_VALUE = 5L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private LocalDateTime expirationDate;

    @Column
    private boolean expired;

    @Column
    private String email;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createDate;

    @Column
    private String virifyCode;

    // 이메일 인증 토큰 생성
    public static ConfirmationToken createEmailConfirmationToken(String email) {
        ConfirmationToken confirmationToken = new ConfirmationToken();
        confirmationToken.createDate = LocalDateTime.now();
        confirmationToken.expirationDate = LocalDateTime.now().plusMinutes(EMAIL_TOKEN_EXPIRATION_TIME_VALUE);
        confirmationToken.email = email;
        confirmationToken.expired = false;
        confirmationToken.virifyCode = confirmationToken.CreateCode();
        return confirmationToken;
    }

    public String CreateCode() {
        int code = 0;
        for (int i = 0; i < 5; i++) {
            code *= 10;
            code += (int) (Math.random() * 10);
        }
        return Integer.toString(code);
    }

    // 토큰 사용으로 인한 만료
    public void userToken() {
        this.expired = true;
    }
}
