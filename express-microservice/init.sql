-- Drop table if exists for PostgreSQL
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS media_files;
DROP TABLE IF EXISTS article_ratings;

-- Table for Users
CREATE TABLE IF NOT EXISTS users
(
    user_id    SERIAL PRIMARY KEY,
    name       VARCHAR(50) NOT NULL,
    surname    VARCHAR(50) NOT NULL,
    username   VARCHAR(50) NOT NULL,
    password   VARCHAR(255) NOT NULL, -- Use proper password hashing in production
    email      VARCHAR(100) NOT NULL,
    user_type  VARCHAR(10) CHECK (user_type IN ('admin', 'editor', 'reader')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);


-- Insert initial admin user
INSERT INTO users (email, name, surname, username, password, user_type)
VALUES ('admin@sonja-press.com', 'admin', 'admin', 'admin', '$2y$10$hSRy3Zt/9YhM9Y0aRw2yi.t6.CLspTu9NSKauxkD4u1XmyX3EC5cq', 'admin');

-- Insert initial editor user
INSERT INTO users (email, name, surname, username, password, user_type)
VALUES ('editor1@sonja-press.com', 'editor1', 'editorName', 'editor1Surname', '$2y$10$hSRy3Zt/9YhM9Y0aRw2yi.t6.CLspTu9NSKauxkD4u1XmyX3EC5cq', 'editor');


-- Table for Categories
CREATE TABLE IF NOT EXISTS categories
(
    category_id   SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL
);

-- Insert initial categories
INSERT INTO categories (category_name)
VALUES ('Politics'), ('World'), ('Region'), ('Economy'), ('Gossip'), ('Culture'), ('Health'), ('Style'), ('Cuisine'), ('Sport');

-- Table for Articles
CREATE TABLE IF NOT EXISTS articles
(
    article_id  SERIAL PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    sub_title   VARCHAR(255) NOT NULL,
    content     TEXT NOT NULL,
    category_id INT,
    user_id     INT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (category_id) REFERENCES categories (category_id)
);



-- Insert initial articles
INSERT INTO articles (title, sub_title, content, category_id, user_id, created_at)
VALUES
    ('Article 1 Title', 'Sub Title 1', 'Content of Article 1', 1, 1, CURRENT_TIMESTAMP),
    ('Article 2 Title', 'Sub Title 2', 'Content of Article 2', 2, 1, CURRENT_TIMESTAMP),
    ('Article 3 Title', 'Sub Title 3', 'Content of Article 3', 3, 1, CURRENT_TIMESTAMP),
    ('Article 4 Title', 'Sub Title 4', 'Content of Article 4', 4, 1, CURRENT_TIMESTAMP),
    ('Article 5 Title', 'Sub Title 5', 'Content of Article 5', 5, 1, CURRENT_TIMESTAMP),
    ('Article 6 Title', 'Sub Title 6', 'Content of Article 6', 6, 1, CURRENT_TIMESTAMP),
    ('Article 7 Title', 'Sub Title 7', 'Content of Article 7', 7, 1, CURRENT_TIMESTAMP),
    ('Article 8 Title', 'Sub Title 8', 'Content of Article 8', 8, 1, CURRENT_TIMESTAMP),
    ('Article 9 Title', 'Sub Title 9', 'Content of Article 9', 9, 1, CURRENT_TIMESTAMP),
    ('Article 10 Title', 'Sub Title 10', 'Content of Article 10', 10, 1, CURRENT_TIMESTAMP);

-- Table for Article Ratings
CREATE TABLE IF NOT EXISTS article_ratings
(
    rating_id  SERIAL PRIMARY KEY,
    article_id INT,
    user_id    INT,
    rating     INT, -- Assuming a simple integer rating system
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (article_id) REFERENCES articles (article_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
