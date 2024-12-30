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

INSERT INTO accounts (user_id, organization_id, balance) VALUES
(1, 1, 1000.00),
(2, 2, 500.00),
(3, 1, 2000.00);



