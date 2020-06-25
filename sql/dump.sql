-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: historic-sites
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `historicSite`
--

DROP TABLE IF EXISTS `historicSite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historicSite` (
  `historicSiteId` binary(16) NOT NULL,
  `historicSiteProfileId` binary(16) NOT NULL,
  `historicSiteCost` char(4) NOT NULL,
  `historicSiteDate` varchar(10) NOT NULL,
  `historicSiteDateAdded` datetime(3) DEFAULT NULL,
  `historicSiteDescription` varchar(600) NOT NULL,
  `historicSiteLat` decimal(8,5) DEFAULT NULL,
  `historicSiteLong` decimal(8,5) DEFAULT NULL,
  `historicSiteMunicipality` varchar(36) DEFAULT NULL,
  `historicSiteName` varchar(48) NOT NULL,
  `historicSiteState` char(2) NOT NULL,
  PRIMARY KEY (`historicSiteId`),
  UNIQUE KEY `historicSiteName` (`historicSiteName`),
  KEY `historicSiteProfileId` (`historicSiteProfileId`),
  CONSTRAINT `historicSite_ibfk_1` FOREIGN KEY (`historicSiteProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historicSite`
--

LOCK TABLES `historicSite` WRITE;
/*!40000 ALTER TABLE `historicSite` DISABLE KEYS */;
INSERT INTO `historicSite` VALUES (_binary 'Å4\Ï≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1924','2020-06-20 21:57:53.000','The Sunshine Building was built in 1924 and was one of Albuquerque‚Äôs first &quot;skyscrapers&quot;. Its 920-seat theater opened to much fanfare and continued playing movies until the 1980s. It has since been remodeled into a popular live music venue. The facade and lobby have been restored to their original design and the building boasts the only attendant-operated elevator left in the state. Learn more at https:&#x2F;&#x2F;sunshinetheaterlive.com&#x2F;page&#x2F;about-sunshine-theater',35.08402,-106.64906,'Albuquerque','Sunshine Building','NM'),(_binary '*\Ù7≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1945','2020-06-20 21:58:26.000','The trinity site marks the spot where the world‚Äôs first atomic bomb was detonated on July 16, 1945 as part of the Project Trinity test. By 1953, much of the radioactivity had subsided and in 1965, Army officials erected a monument on Ground Zero. Part of the White Sands Missile Range, the site also includes base camp, where the scientists lived, and the McDonald ranch house, where the plutonium core was assembled. Learn more at https:&#x2F;&#x2F;www.nps.gov&#x2F;whsa&#x2F;learn&#x2F;historyculture&#x2F;trinity-site.htm',33.67728,-106.47571,'Socorro','Trinity Site','NM'),(_binary 'a\ÛŒ≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Paid','900-1151','2020-06-20 21:59:57.000','During the years 900 and 1151, Chaco Canyon was thought to be a major epicenter for the gatherings of many different tribes. Chacoans built fifteen major complexes that remained the largest buildings ever built in North America until the 19th Century. Evidence of archeoastronomy at Chaco has also been proposed, with the &quot;Sun Dagger&quot; petroglyph at Fajada Butte a popular example. Many Chacoan buildings may have been aligned to capture the solar and lunar cycles, requiring generations of astronomical observations and skillfully coordinated construction',29.40992,-98.69700,'San Juan County','Chaco Canyon','NM'),(_binary 'u\‘«≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1862','2020-06-20 21:53:22.000','Part of Pecos National Historic Park, this battlefield is where the Battle of Glorieta Pass took place on March 26-28, 1862. Dubbed by some as the ‚ÄúGettysburg of the West,‚Äù the battle was decisively won by Union troops and ended Confederate efforts in the New Mexico Campaign to gain control of the American Southwest. Learn more at https:&#x2F;&#x2F;www.nps.gov&#x2F;peco&#x2F;learn&#x2F;historyculture&#x2F;battle-of-glorieta-pass.htm',35.57453,-105.75893,'Pecos','Glorieta Pass Battlefield','NM'),(_binary '{¶\0∑≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1873','2020-06-20 22:00:41.000','The Loretto Chapel in Santa Fe, NM is a former Roman Catholic church that is now used as a museum and a wedding chapel. It is known for its unusual helix-shaped spiral staircase (the &quot;Miraculous Stair Case&quot;). The Sisters of Loretto credited St. Joseph with its construction. It has been the subject of legend, and the circumstances surrounding its construction and its builder were considered miraculous by the Sisters of Loretto. The type of wood used in the spiral staircase construction is also a mystery. Learn more at https:&#x2F;&#x2F;www.lorettochapel.com&#x2F;',35.68563,-105.93751,'Santa Fe','Loretto Chapel','NM'),(_binary '|BÆl≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Paid','1300-1600','2020-06-20 22:00:42.000','The Petroglyph National Monument is a day use park and as such the trail heads parking lots and visitor center closes at 4:30pm. The Boca Negra Canyon, Rinconada Canyon, Piedras Marcadas Canyon, and the Volcano Day Use trails are four of the major areas to visit at Petroglyph National Monument. There are a large variety of drawings ranging from people and animals to abstract shapes which litter many of the boulders. There are approximately 24,000 petroglyphs, most dating from the period of 1300 to 1600 AD. Learn more at https:&#x2F;&#x2F;www.nps.gov&#x2F;petr&#x2F;index.htm',35.13495,-106.74782,'Albuquerque','Petroglyph National Monument','NM'),(_binary '+˚G≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1100-1200','2020-06-20 21:53:38.000','Located in the northwestern portion of New Mexico, the Aztec Ruins National Monument showcases an area of rich history and well-preserved structures. These structures served as homes and places of gathering for the native Pueblo Indians who constructed them. Archaeological evidence and carbon dating methods place the construction of these ruins in the 12th and 13th centuries. American settlers exploring and discovering the ruins misattributed the ruins construction to the Aztecs, hence the name. Learn more at https:&#x2F;&#x2F;www.nps.gov&#x2F;azru&#x2F;index.htm',36.83559,-108.00165,'Aztec','Aztec Ruins National Monument','NM'),(_binary 'à<p∆≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1610','2020-06-20 22:01:02.000','The San Miguel Chapel was built by the Spanish between 1610 and 1626 as a colonial mission church. It is the oldest known standing church in the United States. Located on the Santa Fe Plaza, there are plenty of places to eat, visit and see year round. Learn more at http:&#x2F;&#x2F;sanmiguelchapel.org&#x2F;',35.68346,-105.93768,'Santa Fe','San Miguel Chapel','NM'),(_binary 'äΩ˝≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1927','2020-06-20 21:53:56.000','The KiMo Theatre opened in 1927 as an opulent movie palace mixing art deco and Native American design themes. It was designed by the Boller Brothers, a Kansas City architectural firm known for movie-house venues during Hollywood‚Äôs early years. The city of Albuquerque purchased the theater in 1977 for use as a community arts center, carefully restoring and updating the theatre‚Äôs many details. Learn more at https:&#x2F;&#x2F;www.cabq.gov&#x2F;culturalservices&#x2F;kimo',35.08482,-106.65256,'Albuquerque','KiMo Theatre','NM'),(_binary 'å°\…/≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1930','2020-06-20 22:01:10.000','Taos Junction Bridge and Orilla Verde are located within the Rio Grande del Norte National Monument in Cerro, New Mexico. It is open 7 days a week from 8:30am to 4:30pm during the summer and 10:00am to 2:00pm during the winter. The Taos junction bridge was built in 1930. The area has a few natural crossings in the river and has petroglyphs of people who left their mark. You can find more information at https:&#x2F;&#x2F;taos.org&#x2F;what-to-do&#x2F;landmark-sites&#x2F;rio-grande-del-norte-national-monument&#x2F;',36.64023,-105.71945,'Cerro','Rio Grande del Norte National Monument','NM'),(_binary 'ësb≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Paid','1150-1600','2020-06-20 21:54:08.000','Bandelier National Monument is a 33,677-acre United States National Monument near Los Alamos in Sandoval and Los Alamos counties, NM. The monument preserves the homes (many of which are carved into the surrounding cliff faces) and territory of the Ancestral Puebloans of a later era in the Southwest. Most of the pueblo structures date back to two eras, between 1150 and 1600 AD. Learn more at https:&#x2F;&#x2F;www.nps.gov&#x2F;band&#x2F;index.htm',35.78447,-106.31288,'Los Alamos','Bandelier National Monument','NM'),(_binary 'ó∂ãZ≥A\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1706','2020-06-20 22:01:28.000','The original Church of San Felipe de Neri was constructed in 1706 under the direction of Fray Manuel Moreno, a Franciscan priest who came to Albuquerque with 30 families from Bernalillo in 1704 or 1705. The church was initially named San Francisco Xavier but later renamed to San Felipe de Neri in honor of King Philip of Spain. During the summer of 1792, the old church collapsed and a new one was constructed the following year in 1793. To this day, the church remains a functioning parish. You can find more information at https:&#x2F;&#x2F;sanfelipedeneri.org',8.95299,-79.53397,'Albuquerque','San Felipe de Neri','NM'),(_binary 'òr\÷›≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1300','2020-06-20 21:54:20.000','Abo, preserved as part of the Salinas Pueblo Missions National Monument, was a major trading station during its time. Abo was home to a Native American Pueblo, composed of Tompiro-speaking Tanoans. Abo was found by Spanish missionaries, who first recorded their encounter with the pueblo in 1583. Shortly after, in 1622, missionary work began and the first church was built in 1629. The Pueblo was abandoned in 1672 after severe droughts and Apache raids made living conditions impossible. Abo can be found 6 miles southwest of Mountainar, New Mexico.',34.45002,-106.37578,'Mountainair','Abo Ruins','NM'),(_binary 'ùë\≈V≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1870-80s','2020-06-20 21:54:29.000','Lincoln Historic Site includes 17 structures and outbuildings that transport you back in time to the 1870s and 1880s. During that time, the town of Lincoln was made famous by one of the most violent periods in New Mexico history: the Lincoln County War. It was here in 1881 that Billy the Kid made his most famous escape from the Old Lincoln County Courthouse. Learn more at http:&#x2F;&#x2F;nmhistoricsites.org&#x2F;lincoln',39.38007,-88.20319,'Lincoln','Lincoln Historic Site','NM'),(_binary '†⁄ì&≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Paid','1540','2020-06-20 21:54:34.000','The Coronado Historic Site and the ruins of Kuaua Pueblo are located a few minutes north of Albuquerque in Bernalillo. The site is open 8:30am to 5:00pm Wednesday to Monday, while it is closed on Tuesdays. The Coronado Historic Site is named after Spanish explorer Francisco V√°squez de Coronado who camped near the area in 1540. Kuaua is tiwa for evergreen and the village that resided there was eventually abandoned by the end of the 16th century. Learn more at http:&#x2F;&#x2F;nmhistoricsites.org&#x2F;coronado',35.33002,-106.55728,'Bernalillo','Coronado Historic Site','NM'),(_binary '≠\–ö≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1816','2020-06-20 21:54:56.000','El Santuario de Chimayo is host to 300,000 visitors every year as it&#x27;s considered one of the most important catholic pilgrimage sites in the United States, with many individuals making the pilgrimage on foot all the way from Santa Fe, as well as other starting points. There is a strong faith in the miraculous healing powers of the holy dirt that resides within the church, which many give credit to for healing them of illness and disabilities. Many take back a small amount of dirt with them for this reason.',35.98908,-105.93192,'Chimayo','El Santuario de Chimayo','NM'),(_binary '∑§)Õ≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1855','2020-06-20 21:55:12.000','Residing just outside the town of Lincoln, Fort Stanton was established in 1855 to serve as a base of operations against the Mescalero Apaches from 1855 until the 1880&#x27;s. The Fort was named after Captain Henry W. Stanton, who was killed in a battle against the Apaches. Confederate forces occupied Fort Stanton in 1861, right at the beginning of the American Civil War. This presence of U.S. forces lasted until their abandonment in 1896. During WWII, Fort Stanton became a detention center for German and Japanese immigrants suspected of being enemies.',33.49591,-105.52304,'Lincoln','Fort Stanton','NM'),(_binary '∏]\ÎX≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1851','2020-06-20 21:55:14.000','Fort Union was the largest U.S. military post in the region. There have been three different Fort Unions built over the course of 18 years. The first one was built in 1851. The second post was built from 1861 to 1862 in preparation of the confederates. The last fort was built from 1863 to 1869, situated in the same spot as the second fort with the arsenal built where the first fort was. The grounds are open 7 days a week, 8:00am to 4:00pm during the winter and 8:00am to 5:00pm during the summer. Learn more at https:&#x2F;&#x2F;www.nps.gov&#x2F;foun&#x2F;index.htm',35.90745,-105.01212,'Watrous','Fort Union National Monument','NM'),(_binary '¿\Î\ˆ®≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1260-1280','2020-06-20 21:55:28.000','Caves used by nomadic people for years as a place of shelter while they moved across the lands. It wasn&#x27;t until around the 1200&#x27;s that the Mogollon people decided to make the cliff dwellings into a permanent home, though their stay was relatively short lived, lasting only a few decades. Several mummified bodies were found in the area in 1912, giving the site more national attention, leading to improvements for the preservation of the site due to looting of the mummified bodies. The cliff dwellings became a U.S National Monument established by Theodore Roosevelt in 1907.',33.22681,-108.26965,'Silver City','Gila Cliff Dwellings','NM'),(_binary ' äJå≥@\Í≠4B¿® ',_binary 'ÿáìø≥=\ÍªhB¿® ','Free','1350-1640','2020-06-20 21:55:44.000','Home to the ruins of the Giusewa Pueblo built by the Walatowa, and the San Jose de los Jemez Church. The pueblo was originally established in the second half of the 15th century, near the hot springs of the Jemez Valley due to its fertile land and game. Spanish missionaries built the present day church in 1623 after having discovered the pueblo. In 1680, After repeated attempts of conversion to Catholicism, the Jemez people revolted against the Spanish, driving them out for the next 12 years, leading to the dilapidation of the church.',35.77163,-106.69108,'Jemez Pueblo','Jemez Historic Site','NM'),(_binary '\ﬂy\Âq¥BÍÆóB¿®@',_binary 'ÿáìø≥=\ÍªhB¿® ','true','1912','2020-06-22 04:43:09.000','Test Description',40.41148,-105.38218,'Test City','Test Site','NM');
/*!40000 ALTER TABLE `historicSite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historicSiteTag`
--

DROP TABLE IF EXISTS `historicSiteTag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historicSiteTag` (
  `historicSiteTagHistoricSiteId` binary(16) NOT NULL,
  `historicSiteTagTagId` binary(16) NOT NULL,
  PRIMARY KEY (`historicSiteTagHistoricSiteId`,`historicSiteTagTagId`),
  KEY `historicSiteTagHistoricSiteId` (`historicSiteTagHistoricSiteId`),
  KEY `historicSiteTagTagId` (`historicSiteTagTagId`),
  CONSTRAINT `historicSiteTag_ibfk_1` FOREIGN KEY (`historicSiteTagHistoricSiteId`) REFERENCES `historicSite` (`historicSiteId`),
  CONSTRAINT `historicSiteTag_ibfk_2` FOREIGN KEY (`historicSiteTagTagId`) REFERENCES `tag` (`tagId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historicSiteTag`
--

LOCK TABLES `historicSiteTag` WRITE;
/*!40000 ALTER TABLE `historicSiteTag` DISABLE KEYS */;
INSERT INTO `historicSiteTag` VALUES (_binary 'Å4\Ï≥A\Í≠4B¿® ',_binary 'oΩèã≥<Í∞äB¿® '),(_binary 'Å4\Ï≥A\Í≠4B¿® ',_binary 'o¡€≤≥<Í∞äB¿® '),(_binary '*\Ù7≥A\Í≠4B¿® ',_binary 'oµñY≥<Í∞äB¿® '),(_binary 'a\ÛŒ≥A\Í≠4B¿® ',_binary 'o∏v?≥<Í∞äB¿® '),(_binary 'a\ÛŒ≥A\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary 'a\ÛŒ≥A\Í≠4B¿® ',_binary 'o∫X≥<Í∞äB¿® '),(_binary 'a\ÛŒ≥A\Í≠4B¿® ',_binary 'oªÎî≥<Í∞äB¿® '),(_binary 'u\‘«≥@\Í≠4B¿® ',_binary 'o∂\ÊV≥<Í∞äB¿® '),(_binary 'u\‘«≥@\Í≠4B¿® ',_binary 'oª>c≥<Í∞äB¿® '),(_binary '{¶\0∑≥A\Í≠4B¿® ',_binary 'o≤å\Ú≥<Í∞äB¿® '),(_binary '{¶\0∑≥A\Í≠4B¿® ',_binary 'o≥tB≥<Í∞äB¿® '),(_binary '|BÆl≥A\Í≠4B¿® ',_binary 'o∏v?≥<Í∞äB¿® '),(_binary '|BÆl≥A\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary '|BÆl≥A\Í≠4B¿® ',_binary 'oª>c≥<Í∞äB¿® '),(_binary '+˚G≥@\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary '+˚G≥@\Í≠4B¿® ',_binary 'o∫X≥<Í∞äB¿® '),(_binary '+˚G≥@\Í≠4B¿® ',_binary 'oªÎî≥<Í∞äB¿® '),(_binary 'à<p∆≥A\Í≠4B¿® ',_binary 'o≤å\Ú≥<Í∞äB¿® '),(_binary 'à<p∆≥A\Í≠4B¿® ',_binary 'oº\Ãk≥<Í∞äB¿® '),(_binary 'äΩ˝≥@\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary 'äΩ˝≥@\Í≠4B¿® ',_binary 'oΩèã≥<Í∞äB¿® '),(_binary 'äΩ˝≥@\Í≠4B¿® ',_binary 'oæ(\'≥<Í∞äB¿® '),(_binary 'äΩ˝≥@\Í≠4B¿® ',_binary 'o¡€≤≥<Í∞äB¿® '),(_binary 'å°\…/≥A\Í≠4B¿® ',_binary 'o∏v?≥<Í∞äB¿® '),(_binary 'å°\…/≥A\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary 'å°\…/≥A\Í≠4B¿® ',_binary 'oª>c≥<Í∞äB¿® '),(_binary 'ësb≥@\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary 'ësb≥@\Í≠4B¿® ',_binary 'o∫X≥<Í∞äB¿® '),(_binary 'ësb≥@\Í≠4B¿® ',_binary 'oª>c≥<Í∞äB¿® '),(_binary 'ësb≥@\Í≠4B¿® ',_binary 'oªÎî≥<Í∞äB¿® '),(_binary 'ó∂ãZ≥A\Í≠4B¿® ',_binary 'o≤å\Ú≥<Í∞äB¿® '),(_binary 'ó∂ãZ≥A\Í≠4B¿® ',_binary 'o≥tB≥<Í∞äB¿® '),(_binary 'ó∂ãZ≥A\Í≠4B¿® ',_binary 'oº\Ãk≥<Í∞äB¿® '),(_binary 'òr\÷›≥@\Í≠4B¿® ',_binary 'o≤å\Ú≥<Í∞äB¿® '),(_binary 'òr\÷›≥@\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary 'òr\÷›≥@\Í≠4B¿® ',_binary 'o∫X≥<Í∞äB¿® '),(_binary 'òr\÷›≥@\Í≠4B¿® ',_binary 'oªÎî≥<Í∞äB¿® '),(_binary 'ùë\≈V≥@\Í≠4B¿® ',_binary 'o∑¨§≥<Í∞äB¿® '),(_binary '†⁄ì&≥@\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary '†⁄ì&≥@\Í≠4B¿® ',_binary 'o∫X≥<Í∞äB¿® '),(_binary '†⁄ì&≥@\Í≠4B¿® ',_binary 'oªÎî≥<Í∞äB¿® '),(_binary '†⁄ì&≥@\Í≠4B¿® ',_binary 'oº\Ãk≥<Í∞äB¿® '),(_binary '≠\–ö≥@\Í≠4B¿® ',_binary 'o≤å\Ú≥<Í∞äB¿® '),(_binary '∑§)Õ≥@\Í≠4B¿® ',_binary 'o¥W9≥<Í∞äB¿® '),(_binary '∑§)Õ≥@\Í≠4B¿® ',_binary 'o∂\ÊV≥<Í∞äB¿® '),(_binary '∑§)Õ≥@\Í≠4B¿® ',_binary 'o∑¨§≥<Í∞äB¿® '),(_binary '∏]\ÎX≥@\Í≠4B¿® ',_binary 'o¥W9≥<Í∞äB¿® '),(_binary '∏]\ÎX≥@\Í≠4B¿® ',_binary 'o∂\ÊV≥<Í∞äB¿® '),(_binary '∏]\ÎX≥@\Í≠4B¿® ',_binary 'o∑¨§≥<Í∞äB¿® '),(_binary '∏]\ÎX≥@\Í≠4B¿® ',_binary 'oº\Ãk≥<Í∞äB¿® '),(_binary '¿\Î\ˆ®≥@\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary '¿\Î\ˆ®≥@\Í≠4B¿® ',_binary 'o∫X≥<Í∞äB¿® '),(_binary ' äJå≥@\Í≠4B¿® ',_binary 'oπ/\"≥<Í∞äB¿® '),(_binary ' äJå≥@\Í≠4B¿® ',_binary 'o∫X≥<Í∞äB¿® '),(_binary ' äJå≥@\Í≠4B¿® ',_binary 'oªÎî≥<Í∞äB¿® ');
/*!40000 ALTER TABLE `historicSiteTag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `imageId` binary(16) NOT NULL,
  `imageHistoricSiteId` binary(16) NOT NULL,
  `imageDateAdded` datetime(3) NOT NULL,
  `imageName` varchar(32) NOT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`imageId`),
  KEY `imageHistoricSiteId` (`imageHistoricSiteId`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`imageHistoricSiteId`) REFERENCES `historicSite` (`historicSiteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (_binary '	çπ´¥≤\ÍÑ\‡B¿®`',_binary '|BÆl≥A\Í≠4B¿® ','2020-06-22 17:58:54.000','petroglyph2','https://res.cloudinary.com/historicsites/image/upload/v1592846646/petroglyph2_monfcl.jpg'),(_binary 'bÖ¥≥\ÍÑ\‡B¿®`',_binary '∑§)Õ≥@\Í≠4B¿® ','2020-06-22 18:06:07.000','fort-stanton-2','https://res.cloudinary.com/historicsites/image/upload/v1592846760/fort-stanton-2_elttdo.jpg'),(_binary '´∫,¥≥\ÍÑ\‡B¿®`',_binary 'å°\…/≥A\Í≠4B¿® ','2020-06-22 18:06:09.000','rio-grande-del-norte3','https://res.cloudinary.com/historicsites/image/upload/v1592846651/rio_grande_del_norte3_mkwq5x.jpg'),(_binary '5¥±\ÍÑ\‡B¿®`',_binary 'à<p∆≥A\Í≠4B¿® ','2020-06-22 17:51:59.000','SanMiguel1','https://res.cloudinary.com/historicsites/image/upload/v1592846524/sanmiguel1_cr70gy.jpg'),(_binary '\ﬁ¥±\ÍÑ\‡B¿®`',_binary 'à<p∆≥A\Í≠4B¿® ','2020-06-22 17:52:16.000','SanMiguel2','https://res.cloudinary.com/historicsites/image/upload/v1592846497/sanmiguel2_zraz9f.jpg'),(_binary 'Dc-¥≥\ÍÑ\‡B¿®`',_binary '∑§)Õ≥@\Í≠4B¿® ','2020-06-22 18:06:37.000','fort-stanton-3','https://res.cloudinary.com/historicsites/image/upload/v1592846762/fort-stanton-3_fwu3wy.jpg'),(_binary 'ó\Z™¥≤\ÍÑ\‡B¿®`',_binary '≠\–ö≥@\Í≠4B¿® ','2020-06-22 17:59:28.000','chimayo-1','https://res.cloudinary.com/historicsites/image/upload/v1592846760/chimayo-1_zkmzfx.jpg'),(_binary 'ˇ;w¥±\ÍÑ\‡B¿®`',_binary 'òr\÷›≥@\Í≠4B¿® ','2020-06-22 17:52:19.000','abo-ruins-1','https://res.cloudinary.com/historicsites/image/upload/v1592846756/abo-ruins-1_sp1jnb.jpg'),(_binary '$Fé¥±\ÍÑ\‡B¿®`',_binary 'à<p∆≥A\Í≠4B¿® ','2020-06-22 17:52:29.000','SanMiguel3','https://res.cloudinary.com/historicsites/image/upload/v1592846496/sanmiguel3_yvt2wh.jpg'),(_binary '%≤¥±\ÍÑ\‡B¿®`',_binary 'ùë\≈V≥@\Í≠4B¿® ','2020-06-22 17:52:32.000','lincoln1','https://res.cloudinary.com/historicsites/image/upload/v1592846698/lincoln1_lhosw6.jpg'),(_binary '\'_S¥∞\ÍÑ\‡B¿®`',_binary 'a\ÛŒ≥A\Í≠4B¿® ','2020-06-22 17:45:25.000','chaco1','https://res.cloudinary.com/historicsites/image/upload/v1592846525/chaco1_rj5rkc.jpg'),(_binary ')N3,¥≤\ÍÑ\‡B¿®`',_binary '|BÆl≥A\Í≠4B¿® ','2020-06-22 17:59:47.000','petroglyph3','https://res.cloudinary.com/historicsites/image/upload/v1592846643/petroglyph3_bzkwit.jpg'),(_binary ',C\ÿt¥±\ÍÑ\‡B¿®`',_binary 'òr\÷›≥@\Í≠4B¿® ','2020-06-22 17:52:43.000','abo-ruins-2','https://res.cloudinary.com/historicsites/image/upload/v1592846758/abo-ruins-2_yoeq1s.jpg'),(_binary '/öCï¥±\ÍÑ\‡B¿®`',_binary 'ùë\≈V≥@\Í≠4B¿® ','2020-06-22 17:52:48.000','lincoln2','https://res.cloudinary.com/historicsites/image/upload/v1592846702/lincoln2_v92vdo.jpg'),(_binary '6Ïû¥±\ÍÑ\‡B¿®`',_binary 'òr\÷›≥@\Í≠4B¿® ','2020-06-22 17:52:59.000','abo-ruins-3','https://res.cloudinary.com/historicsites/image/upload/v1592846755/abo-ruins-3_pngut9.jpg'),(_binary '7C\\Ü¥≤\ÍÑ\‡B¿®`',_binary '≠\–ö≥@\Í≠4B¿® ','2020-06-22 18:00:11.000','chimayo-2','https://res.cloudinary.com/historicsites/image/upload/v1592846756/chimayo-2_cqwenx.jpg'),(_binary '9õß¥¥\Í©AB¿®p',_binary '¿\Î\ˆ®≥@\Í≠4B¿® ','2020-06-22 18:14:34.000','gila-cliff-dwellings-1','https://res.cloudinary.com/historicsites/image/upload/v1592846772/gila-cliff-dwellings-1_n5uo7s.jpg'),(_binary '9\˜/≈¥±\ÍÑ\‡B¿®`',_binary 'ùë\≈V≥@\Í≠4B¿® ','2020-06-22 17:53:06.000','lincoln3','https://res.cloudinary.com/historicsites/image/upload/v1592846702/lincoln3_fjyrbt.jpg'),(_binary '9˙n|¥∞\ÍÑ\‡B¿®`',_binary 'a\ÛŒ≥A\Í≠4B¿® ','2020-06-22 17:45:56.000','chaco2','https://res.cloudinary.com/historicsites/image/upload/v1592846489/chaco2_kylo3q.jpg'),(_binary '>\ÎB¥≤\ÍÑ\‡B¿®`',_binary '*\Ù7≥A\Í≠4B¿® ','2020-06-22 18:00:24.000','trinity1','https://res.cloudinary.com/historicsites/image/upload/v1592846704/trinity1_kebsap.jpg'),(_binary 'Añ¨¥¥\Í©AB¿®p',_binary '†⁄ì&≥@\Í≠4B¿® ','2020-06-22 18:14:47.000','coronado4','https://res.cloudinary.com/historicsites/image/upload/v1592846636/coronado4_up40az.jpg'),(_binary 'C™\“!¥∞\ÍÑ\‡B¿®`',_binary 'a\ÛŒ≥A\Í≠4B¿® ','2020-06-22 17:46:13.000','chaco3','https://res.cloudinary.com/historicsites/image/upload/v1592846492/chaco3_tv3zi4.jpg'),(_binary 'E3^˘¥≤\ÍÑ\‡B¿®`',_binary '≠\–ö≥@\Í≠4B¿® ','2020-06-22 18:00:34.000','chimayo-3','https://res.cloudinary.com/historicsites/image/upload/v1592846762/chimayo-3_rqbo4o.jpg'),(_binary 'G¸@¥±\ÍÑ\‡B¿®`',_binary 'ùë\≈V≥@\Í≠4B¿® ','2020-06-22 17:53:28.000','lincoln4','https://res.cloudinary.com/historicsites/image/upload/v1592846702/lincoln4_y1zz6k.jpg'),(_binary 'Hç¨¥≤\ÍÑ\‡B¿®`',_binary '*\Ù7≥A\Í≠4B¿® ','2020-06-22 18:00:40.000','trinity2','https://res.cloudinary.com/historicsites/image/upload/v1592846705/trinity2_vilfq9.jpg'),(_binary 'Jk•å¥±\ÍÑ\‡B¿®`',_binary 'òr\÷›≥@\Í≠4B¿® ','2020-06-22 17:53:33.000','abo-ruins-4','https://res.cloudinary.com/historicsites/image/upload/v1592846755/abo-ruins-4_kbrauw.jpg'),(_binary 'Mr:	¥±\ÍÑ\‡B¿®`',_binary '∏]\ÎX≥@\Í≠4B¿® ','2020-06-22 17:53:38.000','fort-union1','https://res.cloudinary.com/historicsites/image/upload/v1592846650/fort_union1_svlbg6.jpg'),(_binary 'NZ≥è¥¥\Í©AB¿®p',_binary '¿\Î\ˆ®≥@\Í≠4B¿® ','2020-06-22 18:15:08.000','gila-cliff-dwellings-2','https://res.cloudinary.com/historicsites/image/upload/v1592846766/gila-cliff-dwellings-2_qafnnv.jpg'),(_binary 'OÑ∫Œ¥≤\ÍÑ\‡B¿®`',_binary '|BÆl≥A\Í≠4B¿® ','2020-06-22 18:00:51.000','petroglyph4','https://res.cloudinary.com/historicsites/image/upload/v1592846646/petroglyph4_dapvqe.jpg'),(_binary 'PÉ!J¥∞\ÍÑ\‡B¿®`',_binary 'a\ÛŒ≥A\Í≠4B¿® ','2020-06-22 17:46:34.000','chaco4','https://res.cloudinary.com/historicsites/image/upload/v1592846497/chaco4_q8smev.jpg'),(_binary 'R¬¢¥≤\ÍÑ\‡B¿®`',_binary '*\Ù7≥A\Í≠4B¿® ','2020-06-22 18:00:56.000','trinity3','https://res.cloudinary.com/historicsites/image/upload/v1592846704/trinity3_st36xf.jpg'),(_binary 'S´\Z¿¥≤\ÍÑ\‡B¿®`',_binary '≠\–ö≥@\Í≠4B¿® ','2020-06-22 18:00:58.000','chimayo-4','https://res.cloudinary.com/historicsites/image/upload/v1592846761/chimayo-4_bfwhpa.jpg'),(_binary 'T-˚⁄¥±\ÍÑ\‡B¿®`',_binary 'ùë\≈V≥@\Í≠4B¿® ','2020-06-22 17:53:50.000','lincoln5','https://res.cloudinary.com/historicsites/image/upload/v1592846702/lincoln5_f7hrii.jpg'),(_binary 'VXqã¥¥\Í©AB¿®p',_binary '¿\Î\ˆ®≥@\Í≠4B¿® ','2020-06-22 18:15:22.000','gila-cliff-dwellings-3','https://res.cloudinary.com/historicsites/image/upload/v1592846773/gila-cliff-dwellings-3_w1fhtb.jpg'),(_binary 'Z≠\–;¥±\ÍÑ\‡B¿®`',_binary 'ësb≥@\Í≠4B¿® ','2020-06-22 17:54:01.000','Bandilier1','https://res.cloudinary.com/historicsites/image/upload/v1592846485/bandelier1_xzouzp.jpg'),(_binary '_iw\Ù¥¥\Í©AB¿®p',_binary '¿\Î\ˆ®≥@\Í≠4B¿® ','2020-06-22 18:15:37.000','gila-cliff-dwellings-4','https://res.cloudinary.com/historicsites/image/upload/v1592846768/gila-cliff-dwellings-4_f0pfwl.jpg'),(_binary '`Gµ¥≥\ÍÑ\‡B¿®`',_binary '∑§)Õ≥@\Í≠4B¿® ','2020-06-22 18:08:29.000','fort-stanton-4','https://res.cloudinary.com/historicsites/image/upload/v1592846763/fort-stanton-4_kw7qfy.jpg'),(_binary 'aPŸ¥±\ÍÑ\‡B¿®`',_binary '∏]\ÎX≥@\Í≠4B¿® ','2020-06-22 17:54:12.000','fort-union2','https://res.cloudinary.com/historicsites/image/upload/v1592846641/fort_union2_eyalgc.jpg'),(_binary 'c§E¥±\ÍÑ\‡B¿®`',_binary 'ësb≥@\Í≠4B¿® ','2020-06-22 17:54:16.000','Bandilier2','https://res.cloudinary.com/historicsites/image/upload/v1592846485/bandelier2_rlo6uq.jpg'),(_binary 'd\¥∞\ÍÑ\‡B¿®`',_binary 'äΩ˝≥@\Í≠4B¿® ','2020-06-22 17:47:07.000','kimo1','https://res.cloudinary.com/historicsites/image/upload/v1592846694/kimo1_a8rczz.jpg'),(_binary 'gÉ\Ã\Ù¥¥\Í©AB¿®p',_binary '¿\Î\ˆ®≥@\Í≠4B¿® ','2020-06-22 18:15:51.000','gila-cliff-dwellings-5','https://res.cloudinary.com/historicsites/image/upload/v1592846776/gila-cliff-dwellings-5_dzsysf.jpg'),(_binary 'jô\‡¥±\ÍÑ\‡B¿®`',_binary 'ësb≥@\Í≠4B¿® ','2020-06-22 17:54:27.000','Bandilier3','https://res.cloudinary.com/historicsites/image/upload/v1592846485/bandelier3_vhhczw.jpg'),(_binary 'o&âƒ¥∞\ÍÑ\‡B¿®`',_binary 'äΩ˝≥@\Í≠4B¿® ','2020-06-22 17:47:26.000','kimo2','https://res.cloudinary.com/historicsites/image/upload/v1592846699/kimo2_dxu72t.jpg'),(_binary 'pyæ$¥≥\ÍÑ\‡B¿®`',_binary '∑§)Õ≥@\Í≠4B¿® ','2020-06-22 18:08:56.000','fort-stanton-5','https://res.cloudinary.com/historicsites/image/upload/v1592846772/fort-stanton-5_i04tfd.jpg'),(_binary 'q\Ê\ı\"¥±\ÍÑ\‡B¿®`',_binary '∏]\ÎX≥@\Í≠4B¿® ','2020-06-22 17:54:40.000','fort-union3','https://res.cloudinary.com/historicsites/image/upload/v1592846639/fort_union3_fn9akv.jpg'),(_binary 'w±k¥±\ÍÑ\‡B¿®`',_binary 'ësb≥@\Í≠4B¿® ','2020-06-22 17:54:49.000','Bandilier4','https://res.cloudinary.com/historicsites/image/upload/v1592846488/bandelier4_cqr6bh.jpg'),(_binary 'w\ÕH(¥∞\ÍÑ\‡B¿®`',_binary 'äΩ˝≥@\Í≠4B¿® ','2020-06-22 17:47:40.000','kimo3','https://res.cloudinary.com/historicsites/image/upload/v1592846697/kimo3_x7ted1.jpg'),(_binary 'Ö}u†¥∞\ÍÑ\‡B¿®`',_binary '{¶\0∑≥A\Í≠4B¿® ','2020-06-22 17:48:03.000','Loretto1','https://res.cloudinary.com/historicsites/image/upload/v1592846593/loretto1_iv4buz.jpg'),(_binary 'Ü4)<¥≥\ÍÑ\‡B¿®`',_binary '†⁄ì&≥@\Í≠4B¿® ','2020-06-22 18:09:33.000','coronado1','https://res.cloudinary.com/historicsites/image/upload/v1592846638/coronado1_mrouzj.jpg'),(_binary 'é\◊m‰¥¥\Í©AB¿®p',_binary '¿\Î\ˆ®≥@\Í≠4B¿® ','2020-06-22 18:16:57.000','gila-cliff-dwellings-6','https://res.cloudinary.com/historicsites/image/upload/v1592846774/gila-cliff-dwellings-6_zpdmjn.jpg'),(_binary 'ë≠\\¥∞\ÍÑ\‡B¿®`',_binary '{¶\0∑≥A\Í≠4B¿® ','2020-06-22 17:48:23.000','Loretto2','https://res.cloudinary.com/historicsites/image/upload/v1592846490/loretto2_lfxlkw.jpg'),(_binary 'î\Û\ÏÁ¥≥\ÍÑ\‡B¿®`',_binary '†⁄ì&≥@\Í≠4B¿® ','2020-06-22 18:09:57.000','coronado2','https://res.cloudinary.com/historicsites/image/upload/v1592846635/coronado2_gxraiv.jpg'),(_binary 'ú\˜Cú¥∞\ÍÑ\‡B¿®`',_binary '{¶\0∑≥A\Í≠4B¿® ','2020-06-22 17:48:42.000','Loretto3','https://res.cloudinary.com/historicsites/image/upload/v1592846495/loretto3_ltqils.jpg'),(_binary '¢_\\v¥±\ÍÑ\‡B¿®`',_binary 'Å4\Ï≥A\Í≠4B¿® ','2020-06-22 17:56:01.000','sunshine1','https://res.cloudinary.com/historicsites/image/upload/v1592846702/sunshine1_scyfpn.jpg'),(_binary '¢\È˛b¥≥\ÍÑ\‡B¿®`',_binary '†⁄ì&≥@\Í≠4B¿® ','2020-06-22 18:10:21.000','coronado3','https://res.cloudinary.com/historicsites/image/upload/v1592846645/coronado3_q9c2vk.jpg'),(_binary '´\Ë¥”¥±\ÍÑ\‡B¿®`',_binary 'Å4\Ï≥A\Í≠4B¿® ','2020-06-22 17:56:17.000','sunshine2','https://res.cloudinary.com/historicsites/image/upload/v1592846705/sunshine2_p0opud.jpg'),(_binary '∏\“0\Ò¥∞\ÍÑ\‡B¿®`',_binary 'ó∂ãZ≥A\Í≠4B¿® ','2020-06-22 17:49:29.000','san-felipe1','https://res.cloudinary.com/historicsites/image/upload/v1592846654/san_felipe1_yhlsuh.jpg'),(_binary '∏\›/Ó¥¥\Í©AB¿®p',_binary ' äJå≥@\Í≠4B¿® ','2020-06-22 18:18:07.000','jemez-historic-site-1','https://res.cloudinary.com/historicsites/image/upload/v1592846773/jemez-historic-site-1_yuhrvg.jpg'),(_binary '¿yBÍ¥¥\Í©AB¿®p',_binary ' äJå≥@\Í≠4B¿® ','2020-06-22 18:18:20.000','jemez-historic-site-2','https://res.cloudinary.com/historicsites/image/upload/v1592846776/jemez-historic-site-2_o19zgf.jpg'),(_binary '\ƒ@æ¥±\ÍÑ\‡B¿®`',_binary 'Å4\Ï≥A\Í≠4B¿® ','2020-06-22 17:56:58.000','sunshine3','https://res.cloudinary.com/historicsites/image/upload/v1592846704/sunshing3_lg5x4h.jpg'),(_binary '\…Woô¥¥\Í©AB¿®p',_binary ' äJå≥@\Í≠4B¿® ','2020-06-22 18:18:35.000','jemez-historic-site-3','https://res.cloudinary.com/historicsites/image/upload/v1592846777/jemez-historic-site-3_mwck4q.jpg'),(_binary '\…˙0t¥∞\ÍÑ\‡B¿®`',_binary '+˚G≥@\Í≠4B¿® ','2020-06-22 17:49:58.000','Aztec1','https://res.cloudinary.com/historicsites/image/upload/v1592846485/aztec1_zrbvyl.jpg'),(_binary '\ ˚]¥∞\ÍÑ\‡B¿®`',_binary 'ó∂ãZ≥A\Í≠4B¿® ','2020-06-22 17:50:00.000','san-felipe2','https://res.cloudinary.com/historicsites/image/upload/v1592846652/san_felipe2_o8whpe.jpg'),(_binary '\Õy≥È¥Ø\ÍÑ\‡B¿®`',_binary 'u\‘«≥@\Í≠4B¿® ','2020-06-22 17:42:54.000','glorieta1','https://res.cloudinary.com/historicsites/image/upload/v1592846694/glorieta1_i9kuon.jpg'),(_binary '\”\Î\¬È¥¥\Í©AB¿®p',_binary ' äJå≥@\Í≠4B¿® ','2020-06-22 18:18:53.000','jemez-historic-site-4','https://res.cloudinary.com/historicsites/image/upload/v1592846777/jemez-historic-site-4_kim2us.jpg'),(_binary '\◊/I»¥∞\ÍÑ\‡B¿®`',_binary '+˚G≥@\Í≠4B¿® ','2020-06-22 17:50:20.000','Aztec2','https://res.cloudinary.com/historicsites/image/upload/v1592846492/aztec2_wqhr6h.jpg'),(_binary '\›¸\≈œ¥Ø\ÍÑ\‡B¿®`',_binary 'u\‘«≥@\Í≠4B¿® ','2020-06-22 17:43:22.000','glorieta2','https://res.cloudinary.com/historicsites/image/upload/v1592846698/glorieta2_pys2fd.jpg'),(_binary '\ﬁ@˘¥¥\Í©AB¿®p',_binary ' äJå≥@\Í≠4B¿® ','2020-06-22 18:19:10.000','jemez-historic-site-5','https://res.cloudinary.com/historicsites/image/upload/v1592846776/jemez-historic-site-5_edu7ue.jpg'),(_binary '\‡\ﬁŸÄ¥≤\ÍÑ\‡B¿®`',_binary 'å°\…/≥A\Í≠4B¿® ','2020-06-22 18:04:55.000','rio-grande-del-norte1','https://res.cloudinary.com/historicsites/image/upload/v1592846650/rio_grande_del_norte1_dflvsc.jpg'),(_binary '\·U•c¥∞\ÍÑ\‡B¿®`',_binary '+˚G≥@\Í≠4B¿® ','2020-06-22 17:50:37.000','Aztec3','https://res.cloudinary.com/historicsites/image/upload/v1592846495/aztec3_rzbm4i.jpg'),(_binary '\‚ﬁÆ—¥∞\ÍÑ\‡B¿®`',_binary 'ó∂ãZ≥A\Í≠4B¿® ','2020-06-22 17:50:40.000','san-felipe3','https://res.cloudinary.com/historicsites/image/upload/v1592846654/san_felipe3_l4lwea.jpg'),(_binary '\Ê0¯§¥Ø\ÍÑ\‡B¿®`',_binary 'u\‘«≥@\Í≠4B¿® ','2020-06-22 17:43:36.000','glorieta3','https://res.cloudinary.com/historicsites/image/upload/v1592846697/glorieta3_rvfyon.jpg'),(_binary '\Óß\Ú≈¥≤\ÍÑ\‡B¿®`',_binary '∑§)Õ≥@\Í≠4B¿® ','2020-06-22 18:05:18.000','fort-stanton-1','https://res.cloudinary.com/historicsites/image/upload/v1592846760/fort-stanton-1_uqgpux.jpg'),(_binary '\Óﬂêÿ¥±\ÍÑ\‡B¿®`',_binary '|BÆl≥A\Í≠4B¿® ','2020-06-22 17:58:09.000','petroglyph1','https://res.cloudinary.com/historicsites/image/upload/v1592846641/petroglyph1_xifpxm.jpg'),(_binary '\Ûqä¥∞\ÍÑ\‡B¿®`',_binary 'ó∂ãZ≥A\Í≠4B¿® ','2020-06-22 17:51:07.000','san-felipe4','https://res.cloudinary.com/historicsites/image/upload/v1592846652/san_felipe4_cnlic3.jpg'),(_binary '\ÛÜ¥∞\ÍÑ\‡B¿®`',_binary 'äΩ˝≥@\Í≠4B¿® ','2020-06-22 17:51:07.000','kimo4','https://res.cloudinary.com/historicsites/image/upload/v1592846700/kimo4_sibu82.jpg'),(_binary '˛P\◊/¥≤\ÍÑ\‡B¿®`',_binary 'å°\…/≥A\Í≠4B¿® ','2020-06-22 18:05:45.000','rio-grande-del-norte2','https://res.cloudinary.com/historicsites/image/upload/v1592846645/rio_grande_del_norte2_ujxpuo.jpg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `profileId` binary(16) NOT NULL,
  `profileActivationToken` char(32) DEFAULT NULL,
  `profileDateAdded` datetime(3) NOT NULL,
  `profileEmail` varchar(128) NOT NULL,
  `profileHash` char(97) NOT NULL,
  `profileIsAdmin` varchar(8) DEFAULT NULL,
  `profileName` varchar(32) NOT NULL,
  `profileOrganization` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`profileId`),
  UNIQUE KEY `profileEmail` (`profileEmail`),
  UNIQUE KEY `profileName` (`profileName`),
  KEY `profileEmail_2` (`profileEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (_binary 'ÿáìø≥=\ÍªhB¿® ',NULL,'2020-06-20 21:34:39.000','historicsites29@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$zxjLhmvtK/GwEw5EZi9DZQ$xhoiQAexmEP1lchLWcyGd1wFqhDkGjsCu70cCOvYtPc','0','Historic Sites','Deep Dive Coding');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `tagId` binary(16) NOT NULL,
  `tagEndDate` varchar(10) NOT NULL,
  `tagName` varchar(32) NOT NULL,
  `tagStartDate` varchar(10) NOT NULL,
  PRIMARY KEY (`tagId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (_binary 'o≤å\Ú≥<Í∞äB¿® ','N/A','Catholic Church','N/A'),(_binary 'o≥tB≥<Í∞äB¿® ','N/A','Gothic Revival Style','N/A'),(_binary 'o¥W9≥<Í∞äB¿® ','N/A','Fort','N/A'),(_binary 'oµñY≥<Í∞äB¿® ','1945','WWII','1939'),(_binary 'o∂>`≥<Í∞äB¿® ','1918','WWI','1914'),(_binary 'o∂\ÊV≥<Í∞äB¿® ','1865','Civil War','1861'),(_binary 'o∑¨§≥<Í∞äB¿® ','1900','Wild West','1865'),(_binary 'o∏v?≥<Í∞äB¿® ','N/A','Petroglyph','N/A'),(_binary 'oπ/\"≥<Í∞äB¿® ','N/A','Native American','N/A'),(_binary 'o∫X≥<Í∞äB¿® ','N/A','Ruins','N/A'),(_binary 'oª>c≥<Í∞äB¿® ','N/A','Hiking','N/A'),(_binary 'oªÎî≥<Í∞äB¿® ','N/A','Pueblo','N/A'),(_binary 'oº\Ãk≥<Í∞äB¿® ','N/A','Adobe Style','N/A'),(_binary 'oΩèã≥<Í∞äB¿® ','N/A','Theatre','N/A'),(_binary 'oæ(\'≥<Í∞äB¿® ','N/A','Art Deco','1920'),(_binary 'o¡€≤≥<Í∞äB¿® ','1930','Early Film','1890');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travelList`
--

DROP TABLE IF EXISTS `travelList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travelList` (
  `travelListProfileId` binary(16) NOT NULL,
  `travelListHistoricSiteId` binary(16) NOT NULL,
  `travelListRank` decimal(2,0) DEFAULT NULL,
  `travelListDateAdded` datetime(3) NOT NULL,
  PRIMARY KEY (`travelListProfileId`,`travelListHistoricSiteId`),
  KEY `travelListProfileId` (`travelListProfileId`),
  KEY `travelListHistoricSiteId` (`travelListHistoricSiteId`),
  CONSTRAINT `travelList_ibfk_1` FOREIGN KEY (`travelListProfileId`) REFERENCES `profile` (`profileId`),
  CONSTRAINT `travelList_ibfk_2` FOREIGN KEY (`travelListHistoricSiteId`) REFERENCES `historicSite` (`historicSiteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travelList`
--

LOCK TABLES `travelList` WRITE;
/*!40000 ALTER TABLE `travelList` DISABLE KEYS */;
INSERT INTO `travelList` VALUES (_binary 'ÿáìø≥=\ÍªhB¿® ',_binary '{¶\0∑≥A\Í≠4B¿® ',5,'2020-06-25 06:04:03.000'),(_binary 'ÿáìø≥=\ÍªhB¿® ',_binary '+˚G≥@\Í≠4B¿® ',4,'2020-06-25 06:00:55.000'),(_binary 'ÿáìø≥=\ÍªhB¿® ',_binary 'à<p∆≥A\Í≠4B¿® ',6,'2020-06-25 06:04:12.000'),(_binary 'ÿáìø≥=\ÍªhB¿® ',_binary 'äΩ˝≥@\Í≠4B¿® ',1,'2020-06-23 22:10:01.000'),(_binary 'ÿáìø≥=\ÍªhB¿® ',_binary 'òr\÷›≥@\Í≠4B¿® ',2,'2020-06-25 04:33:45.000'),(_binary 'ÿáìø≥=\ÍªhB¿® ',_binary '∑§)Õ≥@\Í≠4B¿® ',3,'2020-06-25 04:40:26.000');
/*!40000 ALTER TABLE `travelList` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-25 15:49:30
