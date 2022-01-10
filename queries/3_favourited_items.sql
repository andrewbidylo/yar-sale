--- Get a list of all favourited items for specific user

SELECT items.*
FROM items
JOIN favourites ON item_id = items.id
JOIN users ON owner_id = users.id
--- WHERE users.id = 2 shows list of favourites for user 2, but user 2 does not have favourites, users.id = 1 does not populate
WHERE user_id = 1-- this is the buyer id
ORDER BY items.date_posted, items.title;
