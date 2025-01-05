package com.example.roundUp.followers;

import org.springframework.stereotype.Service;

@Service
public class FollowersService {
    private final FollowersRepo followersRepo;

    public FollowersService(FollowersRepo followersRepo) {
        this.followersRepo = followersRepo;
    }

    public Object findAll() {
        return followersRepo.findAll();
    }

    public Object findById(Long id) {
        return followersRepo.findById(id);
    }

    public FollowersEntity save(FollowersEntity followersEntity) {
        return followersRepo.save(followersEntity);
    }

    public void delete(FollowersEntity followersEntity) {
        followersRepo.delete(followersEntity);
    }

}
