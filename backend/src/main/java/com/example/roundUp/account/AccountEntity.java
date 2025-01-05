package com.example.roundUp.account;

import java.util.List;

import com.example.roundUp.common.BaseEntity;
import com.example.roundUp.post.PostEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "accounts")
public class AccountEntity extends BaseEntity {

    private String name;
    private String nickname;
    private String email;

    @OneToMany(mappedBy = "account")
    private List<PostEntity> posts;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public List<PostEntity> getPosts() {
        return posts;
    }

    public void setPosts(List<PostEntity> posts) {
        this.posts = posts;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}