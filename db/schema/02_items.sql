
DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(50) NOT NULL,
  location VARCHAR(50),
  price SMALLINT NOT NULL,
  description VARCHAR(250) NOT NULL,
  thumbnail_photo_url VARCHAR(1000) NOT NULL,
  date_posted TIMESTAMP,
  date_sold TIMESTAMP DEFAULT NULL,
);
