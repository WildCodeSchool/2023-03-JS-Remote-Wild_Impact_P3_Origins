DROP TABLE IF EXISTS favorites_videos ;

DROP TABLE IF EXISTS videos_to_teams ;

DROP TABLE IF EXISTS videos ;

DROP TABLE IF EXISTS profils ;

DROP TABLE IF EXISTS users ;

DROP TABLE IF EXISTS teams ;

DROP TABLE IF EXISTS games ;

CREATE TABLE
    games(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `label` VARCHAR(80),
        `acronyme` VARCHAR(25),
        `src` LONGTEXT,
        `alt` VARCHAR(80),
        `logo` VARCHAR(255)
    );

CREATE TABLE
    users(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(255),
        `password` LONGTEXT
    );

CREATE TABLE
    profils(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(80),
        `lastname` VARCHAR(80),
        `src` VARCHAR(255),
        `user_id` INT,
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)
    );

CREATE TABLE
    teams (
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(80),
        `acronym` VARCHAR(50),
        `src` LONGTEXT,
        `alt` VARCHAR(255)
    );

CREATE TABLE
    videos(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `url` LONGTEXT,
        `titre` VARCHAR(255),
        `description` LONGTEXT,
        `release_date` DATE,
        `game_id` INT,
        CONSTRAINT fk_game_id FOREIGN KEY (game_id) REFERENCES games(id)
    );

CREATE TABLE
    videos_to_users(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `user_id` INT,
        `video_id` INT,
        CONSTRAINT fk_id_video FOREIGN KEY (video_id) REFERENCES videos(id),
        CONSTRAINT fk_id_user FOREIGN KEY (user_id) REFERENCES users(id)
    );

CREATE TABLE
    videos_to_teams(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `video_id` INT,
        `team_id` INT,
        CONSTRAINT fk_video_id FOREIGN KEY (video_id) REFERENCES videos(id),
        CONSTRAINT fk_team_id FOREIGN KEY (team_id) REFERENCES teams(id)
    );

INSERT INTO
    games (label, acronyme, src, alt, logo)
VALUES (
        "League of Legends",
        "LOL",
        "https://pentagram-production.imgix.net/02b1692f-0938-4f33-8935-89aebccc7c61/LOL_Logo_Rendered_Hi-Res_onblue-4x3.jpg?crop=edges&fit=crop&h=630&rect=0%2C264%2C3754%2C2342&w=1200",
        "League of Legends",
        "https://media.sketchfab.com/models/243f544627214afeb17535ce53ca75fa/thumbnails/220b50db33464ae5aa902a30704bb92f/1024x576.jpeg"
    ), (
        "Valorant",
        "Valo",
        "https://www.citypng.com/public/uploads/preview/-41603133698zip8pbgjls.png",
        "Valorant",
        "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
    ), (
        "Conter Strike : Global Offensive",
        "CSGO",
        "data:image/png;base64,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",
        "Conter Strike",
        "https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png"
    ), (
        "Rocket League",
        "RL",
        "https://1000logos.net/wp-content/uploads/2021/12/Rocket-League-Logo.png",
        "Rocket League",
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP2002-NPUB31645_00-UAROCKETLE000011/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
    );

INSERT INTO
    users (email, password)
VALUES (
        "eric.jean@exemple.fr",
        "Secret"
    ), (
        "titouan.dupont@exemple.fr",
        "Secret1"
    ), (
        "eude.georges@exemple.fr",
        "Secret2"
    ), (
        "julien.riche@exemple.fr",
        "Secret3"
    ), (
        "aled.oskour@exemple.fr",
        "Secret4"
    ), (
        "jean.dubalcon@exemple.fr",
        "Secret5"
    ), (
        "sacha.comete@exemple.fr",
        "Secret6"
    );

INSERT INTO
    profils (
        firstname,
        lastname,
        src,
        user_id
    )
VALUES (
        "Eric",
        "Jean",
        "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
        1
    ), (
        "Titouan",
        "Dupont",
        "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
        2
    ), (
        "Eude",
        "Georges",
        "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
        3
    ), (
        "Julien",
        "Riche",
        "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
        4
    ), (
        "Aled",
        "Oskour",
        "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
        5
    ), (
        "Jean",
        "Dubalcon",
        "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
        6
    ), (
        "Sacha",
        "Comete",
        "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
        7
    );

INSERT INTO
    teams(name, acronym, src, alt)
VALUES (
        "LDLC OL",
        "LDLC",
        "https://www.ldlc-ol.com/wp-content/uploads/2018/12/q-a5R1zQ_400x400.jpg",
        "LDLC"
    ), (
        "Aegis",
        "AEG",
        "https://images.prismic.io/liguefrlol/b9006bd4-f32a-4f1b-9adc-617160789bbc_AEGIS_logo_shield_yellow.png?auto=compress,format",
        "Aegis"
    ), (
        "KCorp",
        "KC",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Karmine_Corp_logo.svg",
        "KCorp"
    ), (
        "Vitality Bee",
        "VIT",
        "https://liquipedia.net/commons/images/5/55/Team_Vitality_2021_allmode.png",
        "Vitality"
    ), (
        "Team BDS",
        "BDS",
        "https://static.mensup.fr/22/2022/12/photo_article/761369/299121/1200-L-team-bds-dvoile-son-roster-lfl-pour-2023.jpg",
        "Team BDS"
    ), (
        "Solary",
        "SLY",
        "https://liquipedia.net/commons/images/4/4d/Solary_lightmode.png",
        "Solary"
    );

INSERT INTO
    videos(
        url,
        titre,
        description,
        release_date,
        game_id
    )
VALUES (
        "https://www.unrankedsmurfs.com/storage/blogposts/what-is-league-of-legends/leagueoflegends.jpg",
        "Vita vs KC",
        "Demi-final de LFL",
        "2023-05-28",
        1
    ), (
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/League_of_Legends_Screenshot_2018.png/260px-League_of_Legends_Screenshot_2018.png",
        "BDS vs LDLC",
        "Demi final de LFL",
        "2023-04-15",
        1
    ), (
        "https://www.number13.de/content/images/size/w1600/2019/02/League-of-Legends-Cover.jpg",
        "Vita vs BDS",
        "Final de LFL",
        "2023-03-28",
        1
    ), (
        "https://www.creocommunity.com/wp-content/uploads/2022/12/Comment-verifier-combien-de-temps-vous-avez-perdu-sur-LoL.jpg",
        "KC vs LDLC",
        "Petite final",
        "2023-02-20",
        1
    ), (
        "https://cdn-mds.pickx.be/News/w-600_h-315_smart-1/valorant-2022_20220610112714.jpeg",
        "KC vs SLY",
        "Demi final",
        "2023-06-01",
        2
    ), (
        "https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg",
        "Aegis vs BDS",
        "Demi final",
        "2023-04-03",
        2
    ), (
        "https://www.gamereactor.fr/media/77/valorant_3187783b.jpg",
        "Aegis vs SLY",
        "Final",
        "2023-02-28",
        2
    ), (
        "https://www.ggrecon.com/media/nljnxbrl/valorant-game-size-2022.jpg",
        "KC vs BDS",
        "Petite final",
        "2022-07-28",
        2
    ), (
        "https://cdn.i-scmp.com/sites/default/files/d8/yp/images/px21004cd9.jpg",
        "Vita vs LDLC",
        "Demi final",
        "2022-12-28",
        3
    ), (
        "https://cdn-apolk.nitrocdn.com/OQiePNRUqJfHBqLKvZoiGpdqxWyrBWmu/assets/images/optimized/rev-5b378d2/wp-content/uploads/elementor/thumbs/csgo-run-pyq9g08l6h7zozj1ikf5lfl66g2kxbdd1gx012twik.png",
        "Aegis vs SLY",
        "Demi final",
        "2022-11-30",
        3
    ), (
        "https://insider-gaming.com/wp-content/uploads/2023/03/CSGOFeatured.jpg",
        "SLY vs Vita",
        "Final",
        "2022-10-13",
        3
    ), (
        "https://greencade.com/wp-content/uploads/2023/03/cs-go-game-ban-sung-nhieu-nguoi-choi-nhat-tren-the-gioi-221745-29-04-2020-4.jpeg",
        "LDLC vs Aegis",
        "Petite final",
        "2022-09-25",
        3
    ), (
        "https://e1.365dm.com/16/08/2048x1152/rocket-league-esports-greazy_3763097.jpg",
        "KC vs BDS",
        "Demi final",
        "2022-08-31",
        4
    ), (
        "https://i.ytimg.com/vi/riilLCDgf-s/maxresdefault.jpg",
        "SLY vs Aegis",
        "Demi final",
        "2022-07-28",
        4
    ), (
        "https://static.actugaming.net/media/2015/07/Rocket-League-4-889x500.jpg",
        "KC vs SLY",
        "Final",
        "2022-06-30",
        4
    ), (
        "https://cdn.vox-cdn.com/thumbor/94t1Qbd8QIXY7rd9P2nnSqH6q5w=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/67087232/rl_rp4_key_art_no_logos.309bf22bd29c2e411e9dd8eb07575bb1.0.jpg",
        "Aegis vs BDS",
        "Petite final",
        "2022-06-21",
        4
    );

INSERT INTO
    videos_to_teams (video_id, team_id)
VALUES (1, 4), (1, 3), (2, 5), (2, 1), (4, 1), (4, 3), (3, 5), (3, 4), (5, 3), (5, 6), (6, 2), (6, 5), (7, 2), (7, 6), (8, 3), (8, 5), (9, 4), (9, 1), (10, 2), (10, 6), (11, 6), (11, 4), (12, 1), (12, 2), (13, 3), (13, 5), (14, 6), (14, 2), (15, 3), (15, 6), (16, 2), (16, 5);

INSERT INTO
    videos_to_users (user_id, video_id)
VALUES (1, 2), (1, 3), (1, 5), (1, 15), (1, 8), (2, 1), (2, 6), (2, 7), (3, 8), (3, 10), (3, 12), (3, 15), (4, 7), (4, 8), (4, 11), (5, 14), (5, 12), (5, 5), (5, 1), (6, 12), (6, 1), (6, 3), (7, 4), (7, 5), (7, 6);