DROP TABLE IF EXISTS historicSiteTag;
DROP TABLE IF EXISTS travelList;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS historicSite;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile(
  profileId binary(16) not null,
  profileActivationToken char(32),
  profileDateAdded datetime(3) not null,
  profileEmail varchar (128) not null,
  profileHash char(97) not null,
  profileIsAdmin varchar(8),
  profileName varchar(32) not null,
  profileOrganization varchar(128),
  unique(profileEmail),
  unique(profileName),
  index(profileEmail),
  primary key(profileId)
);

CREATE TABLE historicSite(
  historicSiteId binary(16) not null,
  historicSiteProfileId binary(16) not null,
  historicSiteCost char(4) not null,
  historicSiteDate date not null,
  historicSiteDateAdded datetime(3) not null,
  historicSiteDescription varchar(244) not null,
  historicSiteLat decimal(8,6),
  historicSiteLong decimal(8,6),
  historicSiteMunicipality varchar(36),
  historicSiteName varchar(48) not null,
  historicSiteState char(2) not null,
  unique(historicSiteName),
  index(historicSiteProfileId),
  foreign key(historicSiteProfileId) references profile(profileId),
  primary key(historicSiteId)
);

CREATE TABLE image(
  imageId binary(16) not null,
  imageHistoricSiteId binary(16) not null,
  imageDateAdded datetime(3) not null,
  imageName varchar(32) not null,
  imagePath varchar(255),
  index(imageHistoricSiteId),
  foreign key(imageHistoricSiteId) references historicSite(historicSiteId),
  primary key(imageId)
);

CREATE TABLE tag(
  tagId binary(16) not null,
  tagEndDate date not null,
  tagName varchar(32) not null,
  tagStartDate date not null,
  primary key (tagId)
);

CREATE TABLE travelList(
  travelListProfileId binary(16) not null,
  travelListHistoicSitesId binary (16) not null,
  travelListRank decimal(2,0),
  travelListDateAdded datetime(3) not null,
  index(travelListProfileId),
  index(travelListHistoricSiteId),
  foreign key(travelListProfileId) references profile(profileId),
  foreign key(travelListHistoricSiteId) references historicSite(historicSiteId),
  primary key(travelListProfileId, travelListHistoricSiteId)
);

CREATE TABLE historicSiteTag(
  historicSiteTagHistoricSiteId binary(16) not null,
  historicSiteTagTagId binary(16) not null,
  index(historicSiteTagHistoricSiteId),
  index(historicSiteTagTagId),
  foreign key(historicSiteTagHistoricSiteId) references historicSite(historicSiteId),
  foreign key(historicSiteTagTagId) references tag(tagId),
  primary key(historicSiteTagHistoricSiteId, historicSiteTagTagId)
);