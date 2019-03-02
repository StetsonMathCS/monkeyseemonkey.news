-- MySQL dump 10.16  Distrib 10.1.36-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: monkey
-- ------------------------------------------------------
-- Server version	10.1.36-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `web_address` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publisher` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fetch_date` datetime NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `score` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'https://www.foxnews.com/entertainment/brad-pitt-attended-ex-wife-jennifer-anistons-50th-birthday-bash','Jaclyn Hendricks','2019-02-10 12:00:00','\nJennifer Aniston‘s 50th birthday party included a special guest.\n\nOn Saturday, the actress’ ex-husband, Brad Pitt, was photographed at the Sunset Tower Hotel in Los Angeles, where the celebration was held.\n\n“Jen arrived alone but was excited to get inside,” a source told E! News. “Brad also arrived alone in a baseball cap. He ducked inside with his longtime security detail by his side.”\n\nIn addition to Pitt, 55, a slew of Aniston’s famous friends, including Kate Hudson, Jason Bateman and Reese Witherspoon, who appeared to take a tumble on the stairs, toasted the birthday girl, who turns the big 5-0 on Monday.\n\n“Everyone was coming up to Jen and hugging her and screaming Happy Birthday. She had some family there and seemed very happy to be with so many good friends,” the insider noted.\n\nAniston and Pitt called it quits in 2005 after five years of marriage. The “Friends” star went on to marry Justin Theroux in 2015 before breaking up in 2018. Pitt ultimately wed his “Mr. and Mrs. Smith” co-star, Angelina Jolie, in 2014 before announcing their split two years later.\n\nAs for Aniston’ relationship with Pitt today, a source told People the actress was “very happy he showed up” on Saturday night.\n','Brad Pitt attended ex-wife Jennifer Aniston\'s 50th birthday bash',NULL,NULL),(2,'https://www.foxnews.com/us/florida-man-arrested-for-allegedly-throwing-cookie-at-girlfriend','Nicole Darrah','2019-02-25 19:00:00','\nA Florida man was arrested for domestic battery after he reportedly threw a cookie at his girlfriend.\n\nWade Smith, 41, of Zephyrhills, was taken into custody on Sunday after deputies with the Pasco County Sheriff\'s Office were called to the home he shares with his girlfriend, WFLA reported.\n\nSAN ANTONIO MAN ALLEGEDLY PISTOL-WHIPPED EX FOR REVEALING HIS CRIMINAL PAST TO NEW GIRLFRIEND\n\nSmith\'s girlfriend reportedly told investigators that he threw a hard piece of cookie and hit her in the forehead, which deputies noted was red when they responded to the scene.\n\nThe 41-year-old, according to the news station, confessed to authorities that he threw the cookie at her.\n\nCLICK HERE TO GET THE FOX NEWS APP\n\nOnline records from the sheriff\'s office indicate Smith was booked at the Pasco County Jail in Land O\' Lakes on $500 bond.\n','Florida man arrested for allegedly throwing cookie at girlfriend',NULL,NULL),(3,'https://www.foxnews.com/auto/circus-performers-crash-during-globe-of-death-motorcycle-stunt','Gary Gastelu','2019-02-25 15:00:00','\nThey don’t call it the “globe of death” because it’s safe.\nThree circus performers riding motorcycles around the inside of a spherical cage were lucky to escape major injury when they crashed during a performance in Liverpool, England, on Sunday.\nVideo shot by spectator Vicky Ferry captured the moment when two of the bikes tangled as a third was performing a loop and smashed into them, sending its rider for a spill from the top of the 23-foot-tall cage.\nSTREET RACING FARM TRACTOR IMPOUNDED BY POLICE\nEveryone in the crowd was dumbstruck, people were screaming and lots of kids started crying,” Ferry told SWNS.\nStaff from the Gandeys Circus and a paramedic in the crowd rushed to the aid of the daredevils and the rest of the show was immediately cancelled.\nIt was later reported that the riders were using replacement motorcycles because their custom bikes had recently been stolen, and that one of the riders had her ankle broken in the accident.\n','Circus performers crash during \'globe of death\' motorcycle stunt',NULL,NULL);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artsum`
--

DROP TABLE IF EXISTS `artsum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artsum` (
  `id_article` int(11) NOT NULL,
  `id_summary` int(11) NOT NULL,
  `relevant` double DEFAULT NULL,
  KEY `id_article` (`id_article`),
  KEY `id_summary` (`id_summary`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artsum`
--

LOCK TABLES `artsum` WRITE;
/*!40000 ALTER TABLE `artsum` DISABLE KEYS */;
/*!40000 ALTER TABLE `artsum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `summary`
--

DROP TABLE IF EXISTS `summary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `summary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `summary`
--

LOCK TABLES `summary` WRITE;
/*!40000 ALTER TABLE `summary` DISABLE KEYS */;
/*!40000 ALTER TABLE `summary` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-01 21:27:03
