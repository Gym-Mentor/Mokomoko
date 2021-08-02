package com.web.webcuration.mails;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailSenderService {

    private final JavaMailSender javaMailSender;
    private static final String FROM_ADDRESS = "a43727702@gmail.com";

    public void sendEmail(String receiveAddress, String code) {
        try {
            MailHandler mailHandler = new MailHandler(javaMailSender);

            // 받는 사람
            mailHandler.setTo(receiveAddress);
            // 보내는 사람
            mailHandler.setFrom(FROM_ADDRESS);
            // 제목
            mailHandler.setSubject("회원 가입 인증");
            // 내용(HTML)
            String htmlContent = "<html><body><h1> 안녕하세요</h1><br><h2>인증코드 :" + code + "</h2></body></html>";
            mailHandler.setTest(htmlContent, true);

            mailHandler.send();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
