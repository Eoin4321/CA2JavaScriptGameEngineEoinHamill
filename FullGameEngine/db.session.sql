
--@Block

DROP TABLE IF EXISTS franchises;

CREATE TABLE franchises (
    franchiseID INT NOT NULL AUTO_INCREMENT,
    franchise_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (franchiseID)
);

--@Block

DROP TABLE IF EXISTS stages;

CREATE TABLE stages (
    stageID INT NOT NULL AUTO_INCREMENT,
    stage_name VARCHAR(20) NOT NULL,
    franchiseID INT NOT NULL,
    PRIMARY KEY (stageID),
    FOREIGN KEY (franchiseID) REFERENCES franchises(franchiseID)
);

--@Block

DROP TABLE IF EXISTS fighters;

CREATE TABLE fighters (
    fighterID INT NOT NULL AUTO_INCREMENT,
    fighter_name VARCHAR(20) NOT NULL,
    franchiseID INT NOT NULL,
    PRIMARY KEY (fighterID),
    FOREIGN KEY (franchiseID) REFERENCES franchises(franchiseID)
);

--@Block

DROP TABLE IF EXISTS spirits;

CREATE TABLE spirits (
    spiritID INT NOT NULL AUTO_INCREMENT,
    spirit_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (spiritID)
);

--@Block

DROP TABLE IF EXISTS players;

CREATE TABLE players (
    playerID INT NOT NULL AUTO_INCREMENT,
    player_name VARCHAR(20) NOT NULL,
    wins INT NOT NULL,
    damage_taken DOUBLE NOT NULL,
    spiritID INT,
    fighterID INT NOT NULL,
    PRIMARY KEY (playerID),
    FOREIGN KEY (spiritID) REFERENCES spirits(spiritID),
    FOREIGN KEY (fighterID) REFERENCES fighters(fighterID)
);

--@Block

DROP TABLE IF EXISTS battles;

CREATE TABLE battles (
    battleID INT NOT NULL AUTO_INCREMENT,
    stageID INT NOT NULL,
    time_started DATETIME NOT NULL,
    items_enabled BOOLEAN NOT NULL,
    winnerID INT,
    PRIMARY KEY (battleID),
    FOREIGN KEY (stageID) REFERENCES stages(stageID),
    FOREIGN KEY (winnerID) REFERENCES players(playerID)
);

--@Block

DROP TABLE IF EXISTS lobby;

CREATE TABLE lobby (
    lobbyID INT NOT NULL AUTO_INCREMENT,
    playerID INT NOT NULL,
    battleID INT NOT NULL,
    PRIMARY KEY (lobbyID),
    FOREIGN KEY (playerID) REFERENCES players(playerID),
    FOREIGN KEY (battleID) REFERENCES battles(battleID)
);

--@Block
SELECT stage_name,
    (SELECT franchise_name
    FROM franchises
    WHERE stageID = stages.stageID AND franchiseID = 1)
    AS franchise_name
    FROM stages;

--@Block
SELECT fighter_name,
    (SELECT franchise_name
    FROM franchises
    WHERE fighterID = fighters.fighterID AND franchiseID = 1)
    AS franchise_name
    FROM fighters;