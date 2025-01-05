/* INSERT INTO
    users (username, password, email)
VALUES
    (
        'john_doe',
        'hashed_password_1',
        'john@example.com'
    ),
    (
        'jane_smith',
        'hashed_password_2',
        'jane@example.com'
    ),
    (
        'alice_jones',
        'hashed_password_3',
        'alice@example.com'
    );

INSERT INTO
    accounts (user_id, name, nickname, email)
VALUES
    (
        1,
        'John Doe Account',
        'Johnny',
        'john@example.com'
    ),
    (
        2,
        'Jane Smith Account',
        'Janey',
        'jane@example.com'
    ),
    (
        3,
        'Alice Jones Account',
        'Ally',
        'alice@example.com'
    );

INSERT INTO
    user_profiles (user_id, name)
VALUES
    (1, 'John Doe Profile'),
    (2, 'Jane Smith Profile'),
    (3, 'Alice Jones Profile');

INSERT INTO
    brands (name, description)
VALUES
    ('Nike', 'Sportswear and equipment brand'),
    ('Adidas', 'Sportswear and lifestyle brand'),
    ('Puma', 'Sport and lifestyle footwear brand');

INSERT INTO
    wardrobe_items (
        user_profile_id,
        name,
        description,
        brand_id,
        category,
        color,
        size,
        image_url
    )
VALUES
    (
        1,
        'Nike Running Shoes',
        'Comfortable running shoes',
        1,
        'Shoes',
        'Red',
        '10',
        'https://example.com/nike_shoes.jpg'
    ),
    (
        2,
        'Adidas T-Shirt',
        'Breathable cotton T-shirt',
        2,
        'Clothing',
        'Blue',
        'L',
        'https://example.com/adidas_tshirt.jpg'
    ),
    (
        3,
        'Puma Sneakers',
        'Stylish sneakers for everyday use',
        3,
        'Shoes',
        'Black',
        '8',
        'https://example.com/puma_sneakers.jpg'
    );

SELECT
    *
FROM
    users;

SELECT
    *
FROM
    accounts;

SELECT
    *
FROM
    user_profiles;

SELECT
    *
FROM
    brands;

SELECT
    *
FROM
    wardrobe_items; */