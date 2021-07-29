package com.web.webcuration.common.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.web.webcuration.common.util.CookieUtil;
import com.web.webcuration.common.util.JwtUtil;
import com.web.webcuration.common.util.RedisUtil;
import com.web.webcuration.model.User;
import com.web.webcuration.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private RedisUtil redisUtil;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final Cookie jwtToken = cookieUtil.getCookie(request, JwtUtil.ACCESS_TOKEN);

        String email = null;
        String jwt = null;
        String refreshJwt = null;
        String refreshEmail = null;

        try{
            if(jwtToken != null){
                jwt = jwtToken.getValue();
                email = jwtUtil.getUserEmail(jwt);
            }
            if(email != null) {
                UserDetails user = userService.loadUser(email);
                
                if(jwtUtil.validateToken(jwt, user)){
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            }
        }
        catch (ExpiredJwtException e){
            Cookie refreshToken = cookieUtil.getCookie(request, JwtUtil.REFRESH_TOKEN);
            if(refreshToken != null){
                refreshJwt = refreshToken.getValue();
            }
        }catch(Exception e){

        }

        try {
            if(refreshJwt != null) {
                refreshEmail = redisUtil.getDate(refreshJwt);

                if(refreshEmail.equals(jwtUtil.getUserEmail(refreshJwt))){
                    UserDetails userDetails = userService.loadUser(refreshEmail);
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

                    User user = new User();
                    user.setEmail(refreshEmail);
                    String newToken = jwtUtil.generateToken(user);

                    Cookie newAccessToken = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN, newToken);
                    response.addCookie(newAccessToken);
                }
            }
        } catch (ExpiredJwtException e){

        }

        filterChain.doFilter(request, response);
    }
}
