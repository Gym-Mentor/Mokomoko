package com.web.webcuration.service;

import java.util.Optional;

import com.web.webcuration.model.SecurityUser;
import com.web.webcuration.model.User;
import com.web.webcuration.repository.UserRepository;
import com.web.webcuration.repository.UserRepositorySupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRepositorySupport userRepositorySupport;

    @Override
    public boolean SignUp(User newUser) {

        boolean flag;
        if(userRepositorySupport.findUserByEmailAndNickname(newUser.getEmail(), newUser.getNickname())){
            userRepository.save(newUser);
            flag = true;    
        }else{
            flag = false;
        }
        return flag;
    }

    @Override
    public Optional<User> login(User user) {
        
        return userRepository.FindByEmailAndPassword(user.getEmail(), user.getPassword());
    }

    @Override
    public Optional<User> findByEmail(String email){
        return userRepository.FindByEmail(email);
    }

    @Override
    public UserDetails loadUser(String email) throws UsernameNotFoundException{

        Optional<User> loginUser = userRepository.FindByEmail(email);
        if(loginUser.isPresent()){
            return new SecurityUser(loginUser.get());
        }else{
            throw new UsernameNotFoundException(email + " : 사용자 존재 X");
        }
        
    }

}
