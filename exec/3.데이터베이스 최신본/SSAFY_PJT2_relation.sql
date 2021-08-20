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
-- Table structure for table `relation`
--

DROP TABLE IF EXISTS `relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relation` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `receive` bigint DEFAULT NULL,
  `send` bigint DEFAULT NULL,
  `state` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relation`
--

LOCK TABLES `relation` WRITE;
/*!40000 ALTER TABLE `relation` DISABLE KEYS */;
INSERT INTO `relation` VALUES (1,1,1,_binary ''),(2,2,2,_binary ''),(3,1,2,_binary ''),(4,2,1,_binary ''),(5,3,3,_binary ''),(6,4,4,_binary ''),(11,3,4,_binary ''),(12,2,4,_binary ''),(14,5,5,_binary ''),(15,6,6,_binary ''),(16,2,5,_binary ''),(17,3,5,_binary ''),(18,2,6,_binary ''),(19,3,6,_binary ''),(20,5,6,_binary ''),(21,4,6,_binary ''),(22,1,6,_binary ''),(23,7,7,_binary ''),(24,1,7,_binary ''),(25,3,7,_binary ''),(26,6,7,_binary ''),(27,5,7,_binary ''),(28,4,7,_binary ''),(29,2,7,_binary ''),(30,8,8,_binary ''),(31,2,8,_binary ''),(32,4,8,_binary ''),(33,6,8,_binary ''),(34,9,9,_binary ''),(35,2,9,_binary ''),(37,8,9,_binary ''),(38,5,9,_binary ''),(39,6,9,_binary ''),(40,10,10,_binary ''),(41,1,10,_binary ''),(42,6,10,_binary ''),(43,4,10,_binary ''),(44,2,10,_binary ''),(45,3,10,_binary ''),(46,9,10,_binary ''),(47,7,10,_binary ''),(48,5,10,_binary ''),(49,8,10,_binary ''),(50,11,11,_binary ''),(51,9,11,_binary ''),(52,12,12,_binary ''),(53,4,12,_binary ''),(54,9,12,_binary ''),(55,2,12,_binary ''),(56,11,9,_binary ''),(57,4,9,_binary ''),(58,10,9,_binary '');
/*!40000 ALTER TABLE `relation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-20 10:13:43
