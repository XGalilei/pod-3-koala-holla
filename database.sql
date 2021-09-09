CREATE TABLE "koala" (
    "id" SERIAL,
    "name" varchar(200),
    "age" int,
    "gender" varchar(1),
    "ready_for_transfer" boolean default false,
    "notes" varchar(200)
);

INSERT INTO "koala" 
    ("name", "age", "gender", "ready_for_transfer", "notes")
VALUES
    ('Scotty', 4, 'M', true, 'Born in Guatemala'),
    ('Jean', 5, 'F', true, 'Allergic to lots of lava'),
    ('Ororo', 7, 'F', false, 'Loves listening to Paula (Abdul)'),
    ('Logan', 15, 'M', false, 'Loves the sauna'),
    ('Charlie', 9, 'M', true, 'Favorite band is Nirvana'),
    ('Betsie', 4, 'F', true, 'Has a pet iguana');