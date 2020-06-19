DROP TABLE IF EXISTS historicSiteTag;
DROP TABLE IF EXISTS travelList;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS historicSite;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile(
  profileId BINARY(16) NOT NULL,
  profileActivationToken CHAR(32),
  profileDateAdded DATETIME(3) NOT NULL,
  profileEmail VARCHAR(128) NOT NULL,
  profileHash CHAR(97) NOT NULL,
  profileIsAdmin VARCHAR(8),
  profileName VARCHAR(32) NOT NULL,
  profileOrganization VARCHAR(128),
  UNIQUE (profileEmail),
  UNIQUE (profileName),
  INDEX (profileEmail),
  PRIMARY KEY (profileId)
);

CREATE TABLE historicSite(
  historicSiteId BINARY(16) NOT NULL,
  historicSiteProfileId BINARY(16) NOT NULL,
  historicSiteCost CHAR(4) NOT NULL,
  historicSiteDate VARCHAR(10) NOT NULL,
  historicSiteDateAdded DATETIME(3),
  historicSiteDescription VARCHAR(600) NOT NULL,
  historicSiteLat DECIMAL(8,5),
  historicSiteLong DECIMAL(8,5),
  historicSiteMunicipality VARCHAR(36),
  historicSiteName VARCHAR(48) NOT NULL,
  historicSiteState CHAR(2) NOT NULL,
  UNIQUE(historicSiteName),
  INDEX(historicSiteProfileId),
  FOREIGN KEY(historicSiteProfileId) REFERENCES profile(profileId),
  PRIMARY KEY(historicSiteId)
);

CREATE TABLE image(
  imageId BINARY(16) NOT NULL,
  imageHistoricSiteId BINARY(16) NOT NULL,
  imageDateAdded DATETIME(3) NOT NULL,
  imageName VARCHAR(32) NOT NULL,
  imagePath VARCHAR(255),
  INDEX(imageHistoricSiteId),
  FOREIGN KEY(imageHistoricSiteId) REFERENCES historicSite(historicSiteId),
  PRIMARY KEY(imageId)
);

CREATE TABLE tag(
  tagId BINARY(16) NOT NULL,
  tagEndDate VARCHAR(10) NOT NULL,
  tagName VARCHAR(32) NOT NULL,
  tagStartDate VARCHAR(10) NOT NULL,
  PRIMARY KEY(tagId)
);

CREATE TABLE travelList(
  travelListProfileId BINARY(16) NOT NULL,
  travelListHistoricSiteId BINARY(16) NOT NULL,
  travelListRank DECIMAL(2,0),
  travelListDateAdded DATETIME(3) NOT NULL,
  INDEX(travelListProfileId),
  INDEX(travelListHistoricSiteId),
  FOREIGN KEY(travelListProfileId) REFERENCES profile(profileId),
  FOREIGN KEY(travelListHistoricSiteId) REFERENCES historicSite(historicSiteId),
  PRIMARY KEY(travelListProfileId, travelListHistoricSiteId)
);

CREATE TABLE historicSiteTag(
  historicSiteTagHistoricSiteId BINARY(16) NOT NULL,
  historicSiteTagTagId BINARY(16) NOT NULL,
  INDEX(historicSiteTagHistoricSiteId),
  INDEX(historicSiteTagTagId),
  FOREIGN KEY(historicSiteTagHistoricSiteId) REFERENCES historicSite(historicSiteId),
  FOREIGN KEY(historicSiteTagTagId) REFERENCES tag(tagId),
  PRIMARY KEY(historicSiteTagHistoricSiteId, historicSiteTagTagId)
);

INSERT INTO tag(tagId, tagEndDate, tagName, tagStartDate) VALUES(UUID_TO_BIN(UUID()), "1930", "1920's Theaters", "1920");

INSERT INTO tag(tagId, tagEndDate, tagName, tagStartDate) VALUES(UUID_TO_BIN(UUID()), "1945", "WWII", "1941");