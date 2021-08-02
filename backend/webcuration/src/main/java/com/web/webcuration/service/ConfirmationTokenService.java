package com.web.webcuration.service;

import java.time.LocalDateTime;
import java.util.Optional;

import com.web.webcuration.Entity.ConfirmationToken;
import com.web.webcuration.repository.ConfirmationTokenRepository;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ConfirmationTokenService {

    private final ConfirmationTokenRepository confirmationTokenRepository;
    private final EmailSenderService emailSenderService;

    public String createEmailConfirmationToken(String receiverEmail) {

        Assert.hasText(receiverEmail, "Email은 필수 입니다.");

        ConfirmationToken emailConfirmationToken = ConfirmationToken.createEmailConfirmationToken(receiverEmail);
        confirmationTokenRepository.save(emailConfirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(receiverEmail);
        mailMessage.setSubject("회원가입 이메일 인증");
        mailMessage.setText("Mokomoko " + emailConfirmationToken.getId());
        emailSenderService.sendEmail(mailMessage);

        return emailConfirmationToken.getEmail();
    }

    public ConfirmationToken findByIdAndExpirationDateAfterAndExpired(String confirmationTokenEmail) {
        Optional<ConfirmationToken> confimationToken = confirmationTokenRepository
                .findByIdAndExpirationDateAfterAndExpired(confirmationTokenEmail, LocalDateTime.now(), false);

        return confimationToken.get();
        // return confimationToken.orElseThrow(() -> new
        // BadRequestException(ValidationConstant.TOKEN_NOT_FOUND));
    }
}
