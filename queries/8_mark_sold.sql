-- Only admins can mark items as sold

UPDATE items
SET date_sold = '2022-01-10'
WHERE items.id = 11 AND owner_id = 2;
