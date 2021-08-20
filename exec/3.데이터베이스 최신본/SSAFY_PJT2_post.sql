-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: I5D104.p.ssafy.io    Database: SSAFY_PJT2
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `com_cnt` bigint DEFAULT NULL,
  `com_type` bit(1) DEFAULT NULL,
  `cratedate` datetime(6) DEFAULT NULL,
  `like_cnt` bigint DEFAULT NULL,
  `like_type` bit(1) DEFAULT NULL,
  `type` bit(1) DEFAULT NULL,
  `userid` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,0,_binary '','2021-08-20 00:16:08.988046',3,_binary '',_binary '\0',2),(2,0,_binary '','2021-08-20 00:18:20.465009',0,_binary '',_binary '\0',1),(3,1,_binary '','2021-08-20 00:18:47.424444',1,_binary '',_binary '',2),(4,0,_binary '','2021-08-20 00:22:15.542727',1,_binary '',_binary '\0',2),(5,0,_binary '','2021-08-20 00:22:51.490978',1,_binary '',_binary '\0',2),(6,1,_binary '','2021-08-20 00:23:37.178263',2,_binary '',_binary '\0',1),(7,0,_binary '','2021-08-20 00:23:51.792359',2,_binary '',_binary '\0',4),(8,1,_binary '','2021-08-20 00:25:24.566498',4,_binary '',_binary '\0',2),(9,0,_binary '','2021-08-20 00:26:02.703409',1,_binary '',_binary '\0',4),(10,0,_binary '','2021-08-20 00:26:36.565872',5,_binary '',_binary '\0',2),(11,0,_binary '','2021-08-20 00:26:45.517957',3,_binary '',_binary '\0',4),(12,0,_binary '','2021-08-20 00:29:04.705916',5,_binary '',_binary '',4),(13,0,_binary '','2021-08-20 00:30:02.654825',6,_binary '',_binary '\0',6),(14,0,_binary '','2021-08-20 00:30:06.931649',2,_binary '',_binary '\0',5),(15,0,_binary '','2021-08-20 00:31:33.742679',2,_binary '',_binary '\0',5),(16,0,_binary '','2021-08-20 00:32:51.664565',2,_binary '',_binary '\0',5),(17,2,_binary '','2021-08-20 00:35:00.928877',2,_binary '',_binary '\0',7),(18,0,_binary '','2021-08-20 00:35:37.014227',1,_binary '',_binary '\0',9),(19,0,_binary '','2021-08-20 00:35:51.978622',2,_binary '',_binary '\0',9),(20,0,_binary '','2021-08-20 00:37:35.496477',16,_binary '',_binary '\0',9),(21,1,_binary '','2021-08-20 00:42:06.107481',0,_binary '',_binary '\0',11),(22,2,_binary '','2021-08-20 00:42:41.523708',2,_binary '',_binary '\0',11),(23,1,_binary '','2021-08-20 00:43:48.926406',2,_binary '',_binary '\0',10),(24,1,_binary '','2021-08-20 00:45:10.085888',1,_binary '',_binary '\0',10);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-20 10:13:44
