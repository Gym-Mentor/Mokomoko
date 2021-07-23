package com.web.webcuration.controller;

import java.util.HashMap;
import java.util.Optional;

import com.web.webcuration.model.LoginRequest;
import com.web.webcuration.model.User;
import com.web.webcuration.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class UserController {

    private final String SUCCESS = "success";
    private final String FAIL = "fail";

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ResponseEntity<HashMap<String, Object>> Login(LoginRequest loginRequest) {

        Optional<User> userOpt = userService.Login(loginRequest);
        ResponseEntity<HashMap<String, Object>> response;
        HashMap<String, Object> result = new HashMap<>();

        if (userOpt.isPresent()) { // 로그인 됐을 때
            result.put("status", SUCCESS);
            result.put("user", userOpt);
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else { // 안됐을 때
            result.put("status", FAIL);
            response = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        return response;
    }

    @PostMapping("/singup")
    public ResponseEntity<HashMap<String, String>> signUp(@RequestBody User newUser) {

        ResponseEntity<HashMap<String, String>> response;
        HashMap<String, String> result = new HashMap<>();

        if (userService.SignUp(newUser)) {
            result.put("status", SUCCESS);
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.put("status", FAIL);
            response = new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }
        return response;
    }
}
