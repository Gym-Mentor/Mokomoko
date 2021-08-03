package com.web.webcuration.service;

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

    public void deleteAuthMail(Long id) {
        confirmationTokenRepository.deleteById(id);
    }
}
