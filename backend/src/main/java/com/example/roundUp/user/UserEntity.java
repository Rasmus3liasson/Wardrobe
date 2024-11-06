package com.example.roundUp.user;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String name;

    @Column(name = "password", nullable = false, length = 255)
    private String password;

    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "card_payment_number", length = 50)
    private String cardPaymentNumber;

    @Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP") // Column mapping
    private Timestamp createdAt;

    public UserEntity() {
    }

    public UserEntity(Integer id, String name, String password, String email, String cardPaymentNumber,
            Timestamp createdAt) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.cardPaymentNumber = cardPaymentNumber;
        this.createdAt = createdAt;
    }

    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCardPaymentNumber() {
        return cardPaymentNumber;
    }

    public void setCardPaymentNumber(String cardPaymentNumber) {
        this.cardPaymentNumber = cardPaymentNumber;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
