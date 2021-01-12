INSERT INTO burgers (burger_name, devoured) VALUES ("cheeseburger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("jalapenho bacon turkey burger", false);

UPDATE burgers SET devoured = true WHERE id = ?;