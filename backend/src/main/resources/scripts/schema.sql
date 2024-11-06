/*
Boilerplate code for creating a schema.sql 
file in the resources/scripts directory.
*/ 

DROP DATABASE IF EXISTS roundUp;
CREATE DATABASE roundUp;

USE roundUp;

/* Table to hold organization information */
CREATE TABLE organizations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),
    contact_number VARCHAR(50),
    email VARCHAR(100),
    established_date DATE,
    industry VARCHAR(100),
    org_number VARCHAR(50),  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* Table to hold user information */
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    card_payment_number VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* Table to hold user-organization relationships */
CREATE TABLE user_organization (
    user_id INT,
    organization_id INT,
    PRIMARY KEY (user_id, organization_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE
);

/* Table to hold economic data */
CREATE TABLE economic_data (
    id INT PRIMARY KEY AUTO_INCREMENT,
    organization_id INT,
    revenue DECIMAL(15, 2),
    expenses DECIMAL(15, 2),
    net_income DECIMAL(15, 2) AS (revenue - expenses) STORED,
    reporting_date DATE NOT NULL,
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE
);

/* Sample Data Insertion */
INSERT INTO organizations (name, address, city, contact_number, email, established_date, industry, org_number) VALUES
('Tech Innovations', '123 Tech Ave, Silicon Valley, CA', 'Silicon Valley', '123-456-7890', 'contact@techinnovations.com', '2010-01-01', 'Technology', 'ORG001'),
('Eco Solutions', '456 Green St, Portland, OR', 'Portland', '987-654-3210', 'info@ecosolutions.com', '2015-05-15', 'Environmental', 'ORG002'),
('Health First', '789 Wellness Blvd, Chicago, IL', 'Chicago', '555-555-5555', 'support@healthfirst.org', '2005-11-11', 'Healthcare', 'ORG003');

/* Sample Data Insertion for users */
INSERT INTO users (username, password, email, card_payment_number) VALUES
('john_doe', 'hashed_password_1', 'john@example.com', '1234-5678-9012-3456'),
('jane_smith', 'hashed_password_2', 'jane@example.com', '2345-6789-0123-4567'),
('alice_jones', 'hashed_password_3', 'alice@example.com', '3456-7890-1234-5678');

/* Inserting user-organization relationships */
INSERT INTO user_organization (user_id, organization_id) VALUES
(1, 1), 
(2, 2), 
(3, 1); 

/* Inserting economic data */
INSERT INTO economic_data (organization_id, revenue, expenses, reporting_date) VALUES
(1, 150000.00, 80000.00, '2024-09-30'),
(2, 50000.00, 30000.00, '2024-09-30'),
(3, 120000.00, 60000.00, '2024-09-30');
