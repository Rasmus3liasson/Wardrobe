package com.example.roundUp.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.roundUp.errorResponse.ErrorResponse;

@RestController
@RequestMapping(value = "/api/users", produces = "application/json")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id) {
        Optional<UserEntity> userEnity = userService.findById(id);
        if (userEnity.isPresent()) {
            return ResponseEntity.ok(userEnity.get());
        } else {
            return ErrorResponse.errorMessage("User don't exist", HttpStatus.NOT_FOUND);
        }
    }

}
