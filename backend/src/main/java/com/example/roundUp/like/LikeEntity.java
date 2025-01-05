package com.example.roundUp.like;

import com.example.roundUp.common.BaseEntity;
import com.example.roundUp.post.PostEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "likes")
public class LikeEntity extends BaseEntity {

    private String imageUrl;
    private String description;
    private String location;
    private String tags;

    @OneToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")    
    private PostEntity post;

    // Getters and Setters
    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public PostEntity getPost() {
        return post;
    }

    public void setPost(PostEntity post) {
        this.post = post;
    }

}
