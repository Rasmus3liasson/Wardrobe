package com.example.roundUp.comment;

import com.example.roundUp.common.BaseEntity;
import com.example.roundUp.post.PostEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "comments")
public class CommentEntity extends BaseEntity {
    
    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private PostEntity post;

    private String commentText;
    private String nickName;

    public PostEntity getPost() {
        return post;
    }

    public void setPost(PostEntity post) {
        this.post = post;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String username) {
        this.nickName = username;
    }
}