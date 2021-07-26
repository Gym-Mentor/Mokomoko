package com.web.webcuration.controller;

import java.util.HashMap;
import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import com.web.webcuration.common.util.CookieUtil;
import com.web.webcuration.common.util.JwtUtil;
import com.web.webcuration.model.User;
import com.web.webcuration.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/users")
public class UserController {

    private final String SUCCESS = "success";
    private final String FAIL = "fail";

    @Autowired
    private UserService userService;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private CookieUtil cookieUtil;

    @PostMapping("/login")
    public ResponseEntity<HashMap<String, Object>> login(@RequestBody User user, HttpServletResponse res) {
        
        final Optional<User> reqUser = userService.login(user);
        HashMap<String, Object> result = new HashMap<>();

        if(reqUser.isPresent()){
            final String token = jwtUtil.generateToken(user);
            final String refreshJwt = jwtUtil.generateRefreshToken(user);
            Cookie accessToken = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN, token);
            Cookie refreshToken = cookieUtil.createCookie(JwtUtil.REFRESH_TOKEN, refreshJwt);
            res.addCookie(accessToken);
            res.addCookie(refreshToken);
            result.put("user", reqUser);
            result.put("state", SUCCESS);
            return new ResponseEntity<HashMap<String, Object>>(result, HttpStatus.OK);
        }else{
            result.put("state", FAIL);
            return new ResponseEntity<HashMap<String, Object>>(result ,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public ResponseEntity<HashMap<String, String>> SignUp(@RequestBody User newUser){

        ResponseEntity<HashMap<String, String>> response;
        HashMap<String, String> result = new HashMap<>();
        
        if(userService.SignUp(newUser)){
            result.put("status", SUCCESS);
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else{
            result.put("status", FAIL);
            response = new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }
        return response;
    }

    

}
