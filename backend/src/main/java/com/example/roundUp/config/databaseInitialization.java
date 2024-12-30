


// This class is used to run the SQL scripts in the database/scripts folder when the application starts up.
// Right now it is not needed because we my docker compose is already running the SQL scripts in the database/scripts folder.



/* 
package com.example.roundUp.config;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class databaseInitialization {

    @Value("classpath:database/scripts/*.sql")
    private Resource[] scripts;

    private final JdbcTemplate jdbcTemplate;

    public databaseInitialization(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Bean
    public CommandLineRunner run() {
        return args -> {
            Arrays.stream(scripts).forEach(script -> {
                try {
                    String sql = new String(Files.readAllBytes(Paths.get(script.getURI())));
                    jdbcTemplate.execute(sql);
                } catch (Exception e) {
                    throw new RuntimeException("Failed to execute SQL script: " + script.getFilename(), e);
                }
            });
        };
    }
}
 */