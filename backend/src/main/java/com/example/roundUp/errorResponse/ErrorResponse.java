package com.example.roundUp.errorResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ErrorResponse {
    private String message;

    public ErrorResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

     public static ResponseEntity<ErrorResponse> errorMessage(String message, HttpStatus status) {
        ErrorResponse errorResponse = new ErrorResponse(message);
        return ResponseEntity.status(status).body(errorResponse);
    }
}
