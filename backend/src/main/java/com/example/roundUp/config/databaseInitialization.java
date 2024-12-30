
package com.example.roundUp.config;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class databaseInitialization {

    @Value("classpath:database/scripts/schema.sql")
    private Resource schemaScript;

    @Value("classpath:database/scripts/init.sql")
    private Resource initScript;

    @Bean
    public CommandLineRunner run(JdbcTemplate jdbcTemplate) {
        return args -> {
            executeSqlScript(jdbcTemplate, schemaScript);
            executeSqlScript(jdbcTemplate, initScript);
        };
    }

    private void executeSqlScript(JdbcTemplate jdbcTemplate, Resource script) {
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(script.getInputStream(), StandardCharsets.UTF_8))) {
            String line;
            StringBuilder sql = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                sql.append(line).append("\n");
            }
            jdbcTemplate.execute(sql.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
