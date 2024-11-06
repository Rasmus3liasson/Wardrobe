package com.example.roundUp.user;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public UserEntity createUser(UserEntity userEntity) {
        return userRepo.save(userEntity);
    }

    public Optional getUserById(Integer id) {
        if (userRepo.findById(id).isEmpty()) {
            return Optional.empty();

        }
        return userRepo.findById(id);
    }

    public UserEntity updateUser(UserEntity userEntity) {
        return userRepo.save(userEntity);
    }

    public void deleteUser(Integer id) {
        userRepo.deleteById(id);
    }

    public List<UserEntity> getAllUsers() {
        return userRepo.findAll();
    }

    
    public Optional<UserEntity> findById(Integer id) {
        return userRepo.findById(id);
    }
}
