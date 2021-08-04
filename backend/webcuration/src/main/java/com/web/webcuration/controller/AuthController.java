package com.web.webcuration.controller;

import java.util.Map;

import com.web.webcuration.dto.TokenDto;
import com.web.webcuration.dto.request.AuthMailCode;
import com.web.webcuration.dto.request.TokenRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.UserResponse;
import com.web.webcuration.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<UserResponse> signup(@RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(authService.signup(userRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(authService.login(userRequest));
    }

    @PostMapping("/logout")
    public ResponseEntity<BaseResponse> logout(@RequestBody Map<String, String> logoutRequest) {
        return ResponseEntity.ok(authService.logout(logoutRequest.get("email")));
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody TokenRequest tokenRequest) {
        return ResponseEntity.ok(authService.reissue(tokenRequest));
    }

    @GetMapping("/mails/{email}")
    public ResponseEntity<BaseResponse> sendAuthMail(@PathVariable("email") String email) {
        BaseResponse res = authService.sendAuthMail(email);
        return ResponseEntity.ok(res);

    }

    @PostMapping("/mails")
    public ResponseEntity<BaseResponse> authCodeMails(@RequestBody AuthMailCode authMailCode) {
        System.out.println(authMailCode);
        BaseResponse res = authService.authMail(authMailCode);
        return ResponseEntity.ok(res);
    }
}
