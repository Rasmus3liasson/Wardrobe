package com.example.roundUp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.roundUp.account.AccountEntity;
import com.example.roundUp.comment.CommentEntity;
import com.example.roundUp.imagePost.ImagePostEntity;
import com.example.roundUp.like.LikeEntity;
import com.example.roundUp.post.PostEntity;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class RoundUpApplication {

	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		SpringApplication.run(RoundUpApplication.class, args);

		List<PostEntity> posts = new ArrayList<>();

		for (int i = 0; i < 1; i++) {
			PostEntity post = new PostEntity();

			AccountEntity account = new AccountEntity();
			account.setId((long) (i + 1));
			account.setName("User" + (i + 1));

			post.setAccount(account);

			List<LikeEntity> likes = new ArrayList<>();
			for (int j = 0; j < 3; j++) {
				LikeEntity like = new LikeEntity();
				like.setId((long) (j + 1));
				like.setPost(post);
				likes.add(like);
			}
			post.setLikes(likes);

			ImagePostEntity imagePost = new ImagePostEntity();
			imagePost.setId((long) (i + 1));
			imagePost.setImageUrl("http://example.com/image" + (i + 1) + ".jpg");
			imagePost.setDescription("Image " + (i + 1) + " description");
			imagePost.setLocation("Location " + (i + 1));
			imagePost.setTags("Tag1, Tag2");
			post.setImage(imagePost);

			String brands = "Brand" + (i + 1) + ",Brand" + (i + 2);
			post.setBrands(brands);

			List<CommentEntity> comments = new ArrayList<>();
			for (int k = 0; k < 2; k++) {
				CommentEntity comment = new CommentEntity();
				comment.setId((long) (k + 1));
				comment.setCommentText("Comment " + (k + 1));
				comment.setPost(post);
				comment.setNickName("User" + (k + 1));

				comments.add(comment);
			}

			post.setComments(comments);

			post.setContent("Post content " + (i + 1));

			posts.add(post);
		}

		for (PostEntity post : posts) {
			System.out.println("Post ID: " + post.getId());
			System.out.println("Content: " + post.getContent());
			System.out.println("Account Username: " + post.getAccount().getName());
			System.out.println("Image URL: " + post.getImage().getImageUrl());
			System.out.println("Likes: " + post.getLikes().size());
			System.out.println("Brands: " + post.getBrands());
			System.out.println("Comments: " + post.getComments().size());
			System.out.println("===========================================");
		}

	}

}
