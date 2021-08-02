package com.web.webcuration.service;

import java.time.LocalDateTime;
import java.util.Optional;

import com.web.webcuration.Entity.ConfirmationToken;
import com.web.webcuration.mails.EmailSenderService;
import com.web.webcuration.repository.ConfirmationTokenRepository;

import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ConfirmationTokenService {

    private final EmailSenderService emailSenderService;
    private final ConfirmationTokenRepository confirmationTokenRepository;

    public String createEmailConfirmationToken(String receiveEmail) {

        Assert.hasText(receiveEmail, "Email은 필수 입니다.");

        ConfirmationToken emailConfirmationToken = ConfirmationToken.createEmailConfirmationToken(receiveEmail);
        confirmationTokenRepository.save(emailConfirmationToken);
        emailSenderService.sendEmail(receiveEmail, emailConfirmationToken.getVirifyCode());
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
