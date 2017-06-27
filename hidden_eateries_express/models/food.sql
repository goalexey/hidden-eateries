DROP DATABASE IF EXISTS food_db;

CREATE DATABASE food_db;

\c food_db;

CREATE TABLE boroughs(
    idb SERIAL PRIMARY KEY,
    borough TEXT
);

INSERT INTO boroughs (borough)
VALUES ('Bronx'), ('Brooklyn'), ('Manhattan'), ('Queens'), ('Staten Island');

CREATE TABLE comments(
    idc SERIAL PRIMARY KEY,
    username TEXT,
    comment TEXT,
    restaurant_id INTEGER
);

INSERT INTO comments (username, comment, restaurant_id)
VALUES 
('Alex', 'lalalalallal2', 2),
('James', 'We have CRUD3', 3),
('Alex, add more comments1', 1),
('Eric', 'The food is great!!1', 1);

CREATE TABLE restaurant(
    idr SERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    cuisine TEXT,
    image TEXT,
    borough_id INTEGER
);

INSERT INTO restaurant (name, address, cuisine, image, borough_id)
VALUES 
('Clinton Hall', '601 E 189th St, Bronx, NY 10458', 'American', 'https://s3-media1.fl.yelpcdn.com/bphoto/812WOauE__LsGBVmIomGIw/o.jpg', 1),
('Taqueria Tlaxcalli', '2103 Starling Ave, Bronx, NY 10462', 'Mexican', 'https://s3-media2.fl.yelpcdn.com/bphoto/fu7z0SplGBw3CIu-AbCtIw/o.jpg', 1),
('La Masa', '1000 Morris Park Ave, Bronx, NY 10462', 'Colombian', 'https://s3-media1.fl.yelpcdn.com/bphoto/mg3hvXgO9_mYqfnNZVO8iA/o.jpg', 1),
('Kingsbridge Social CLub', '3625 Kingsbridge Ave, Bronx, NY 10463', 'American', 'https://s3-media4.fl.yelpcdn.com/bphoto/_PP9zfQGaVl37ErCHUWnxw/o.jpg', 1),
('Antonio`s Trattoria', '2370 Belmont Ave, Bronx, NY 10458', 'Italian', 'https://s3-media1.fl.yelpcdn.com/bphoto/-IVsSw8qi1jYhER1npwvBQ/o.jpg', 1),
('Alta Calidad', '552 Vanderbilt Ave
Brooklyn, NY 11238', 'Latin', 'https://cdn0.vox-cdn.com/thumbor/YAs044UbaiBVLh3z1NC-YjZXdOI=/44x0:755x533/1020x765/filters:focal(44x0:755x533):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/53515739/alta_calidad_014.0.0.jpg', 2),
('Atlantic Social', '673 Atlantic Ave, Brooklyn, NY 11217', 'Sports Bar', 'https://cdn0.vox-cdn.com/thumbor/Ph6XLRJb_Rnu__nxp9iURh4Ap9o=/288x0:4901x3460/1020x765/filters:focal(288x0:4901x3460):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/53515737/jennygzhang_atlanticsocial_1044.0.0.0.jpg', 2),
('Sandobe', '918 Broadway, Brooklyn, NY 11206', 'Korean, Japanese', 'https://cdn0.vox-cdn.com/thumbor/1I-QD5h8vbFn9ePYzrFCmn8BRso=/0x2:709x534/1020x765/filters:focal(0x2:709x534):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/53078591/Screen_Shot_2017-01-31_at_6.27.04_PM.0.0.png', 2),
('Bunker', '99 Scott Ave, Brooklyn, NY 11237', 'Vietnamese', 'https://cdn0.vox-cdn.com/thumbor/iuJpYQrAM-O82HV95nOo_PPt7Oo=/164x0:2836x2004/1020x765/filters:focal(164x0:2836x2004):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/53078587/20170105-Bunker_-_Interiors_--5.0.0.jpg', 2),
('Norman', '29 Norman Ave, Brooklyn, NY 11222', 'Nordic', 'https://cdn0.vox-cdn.com/thumbor/5zBddpUltspP80NsDYs44OjoZRI=/44x0:756x534/1020x765/filters:focal(44x0:756x534):format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/54119145/Norman_Interior_Evan_Sung.0.0.jpg', 2),
('Pokéworks', '21 E 15th St, New York, NY 10003', 'Hawaiian, Seafood', 'https://s3-media4.fl.yelpcdn.com/bphoto/K0j9LkUruLg71hVSzka3kg/o.jpg', 3),
('Udon West', '11 St Marks Pl, New York, NY 10003', 'Japanese', 'https://s3-media3.fl.yelpcdn.com/bphoto/UMIVpG70HIouxyV28hbsdA/o.jpg', 3),
('Artichoke Basille’s Pizza', '328 E 14th St, New York, NY 10003', 'Pizza', 'https://s3-media2.fl.yelpcdn.com/bphoto/nv6SNLBgQkoeOMcGyRdvxg/o.jpg', 3),
('Snowdays', '241 E 10th St, New York, NY 10003', 'Frozen Desserts', 'https://s3-media4.fl.yelpcdn.com/bphoto/NAYFhm9NKD7Denfbn9KPnQ/o.jpg', 3),
('Xi’an Famous Foods', '45 Bayard St, New York, NY 10013', 'Chinese', 'https://s3-media2.fl.yelpcdn.com/bphoto/yeI4rucm2IA2ZqkSr5aISQ/o.jpg', 3),
('JoJu', '83-25 Broadway, Elmhurst, NY 11373', 'Asian', 'https://foodandcultureinnyc.files.wordpress.com/2014/05/joju.jpg', 4),
('Rincon Criollo', '40-09 Junction Blvd, Corona, NY 11368', 'Cuban', 'https://b.zmtcdn.com/data/pictures/8/16776388/a42e973cae460f4cefe238f82a9cfd60.jpg?output-format=webp', 4),
('Kitchen 79', '37-70 79th St, Jackson Heights, NY 11372', 'Thai', 'https://s3-media2.fl.yelpcdn.com/bphoto/ip9F8-pOstZmt7_8T_46Jg/o.jpg', 4),
('Kilo Astoria', '31-27 Ditmars Blvd, Astoria, NY 11105', 'Steakhouse', 'https://s3-media4.fl.yelpcdn.com/bphoto/N2S06HaHKEEtbo1JCd7usg/o.jpg', 4),
('Mito Asian Fusion', '64-18 108th St, Forest Hills, NY 11375', 'Japanese', 'http://www.mitoasianfusion.com/img/slider/3.jpg', 4),
('Ruddy Dean', '44 Richmond Terrace, Staten Island, NY 10301', 'Steakhouse', 'http://i6.photobucket.com/albums/y240/Thousandbars/Thousandbars%20Two/Thousandbars%20Three/1206RD1.jpg', 5),
('Pizzeria Giove', '278 New Dorp Ln, Staten Island, NY 10306', 'Pizza', 'https://s3-media4.fl.yelpcdn.com/bphoto/bzQbjeH_TG-ceqoGxvLR9g/o.jpg', 5),
('Blue', '1115 Richmond Terrace, Staten Island, NY 10310', 'Seafood', 'https://s3-media1.fl.yelpcdn.com/bphoto/HSHJkgOvol999QRb7AeGeA/o.jpg', 5),
('Beso', '11 Schuyler St, Staten Island, NY 10301', 'Spanish', 'https://lh3.ggpht.com/-VXy4cQd-KIs/V64YBWPk9eI/AAAAAAAAI-Y/uZ5C0JxkFZsrGQRWG_-1E362FPIub3lRwCJkC/w1400/', 5),
('The Phunky Elephant Gastropub', '1271 Bay St, Staten Island, NY 10305', 'American', 'http://media.yellowbot.com/r/650x500/photos/gQYN-2QCg5d_x--/the-phunky-elephant-gastropub-staten-island-ny.jpg', 5);
