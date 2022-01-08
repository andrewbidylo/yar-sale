-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS favourites CASCADE;

CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  item_id INTEGER REFERENCES items(id),
  UNIQUE (user_id, item_id)
);
