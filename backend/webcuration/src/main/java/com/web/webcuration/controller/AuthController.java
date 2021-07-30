package com.web.webcuration.controller;

import com.web.webcuration.dto.TokenDto;
import com.web.webcuration.dto.request.TokenRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.UserResponse;
import com.web.webcuration.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signUp")
    public ResponseEntity<UserResponse> signup(@RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(authService.signup(userRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(authService.login(userRequest));
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody TokenRequest tokenRequest) {
        return ResponseEntity.ok(authService.reissue(tokenRequest));
    }

    @GetMapping("/")
    public ResponseEntity<String> auth() {
        return ResponseEntity.ok("성공");
    }

    @GetMapping("/mails")
    public ResponseEntity<String> confirmEmail(@RequestParam String email) {
        System.out.println("메일 : " + email);
        authService.confirmEmail(email);
        return ResponseEntity.ok("전송완료");
    }

    @GetMapping("/oauth")
    public ResponseEntity<String> kakaoLogin() {

        return ResponseEntity.ok("카카오 성공");
    }
}
