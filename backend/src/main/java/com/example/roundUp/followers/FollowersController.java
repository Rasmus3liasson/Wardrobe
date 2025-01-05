package com.example.roundUp.followers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/followers")
public class FollowersController {

    private final FollowersService followersService;

    public FollowersController(FollowersService followersService) {
        this.followersService = followersService;
    }

    @PostMapping
    public ResponseEntity<FollowersEntity> save(@RequestBody FollowersEntity followersEntity) {
        return ResponseEntity.ok(followersService.save(followersEntity));
    }

    @DeleteMapping
    public ResponseEntity<Void> delete(@RequestBody FollowersEntity followersEntity) {
        followersService.delete(followersEntity);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseEntity.ok(followersService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        return ResponseEntity.ok(followersService.findById(id));
    }

    @PutMapping
    public ResponseEntity<FollowersEntity> update(@RequestBody FollowersEntity followersEntity) {
        return ResponseEntity.ok(followersService.save(followersEntity));
    }

    
}
