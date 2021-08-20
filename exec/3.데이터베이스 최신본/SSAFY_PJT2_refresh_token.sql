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
-- Table structure for table `refresh_token`
--

DROP TABLE IF EXISTS `refresh_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token_key` varchar(255) DEFAULT NULL,
  `token_value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refresh_token`
--

LOCK TABLES `refresh_token` WRITE;
/*!40000 ALTER TABLE `refresh_token` DISABLE KEYS */;
INSERT INTO `refresh_token` VALUES (15,'9','eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzAwMjQ0NzV9.ulCFaaBqugc91kt45eIAAUby7ySjoGocHUOecqt_78fVZcMqmj4zf0twfTb2dht7yBUmrYg11y8Lra05HB0IPA'),(16,'2','eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzAwMjQ2NjJ9.acSd50SZ__tRzupsfYicAbwu9NPHRRRXVj65GO2XvWxnKW40m-C178ge4B_dEPxjbqTHkdRvKkNNz1PegV0oLg'),(17,'10','eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzAwMjQ3Mjh9.qe8Z2g2lR6qnQVMfSTtB0DMiael1HTCMidoUqMayptsO4JQWKx0Z87h5wCA8eVBQ0enPZeffYs1-Q8--QoRdhg'),(24,'11','eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzAwMjU2ODh9.A-dJZFnYuZUOtbMzIFQvOA2KyDu4rCxruNbago5lPREw4wm8vFfUgyl5IdeSYVBNbUYqrVMi0Hw-xgrV79ooSg'),(25,'12','eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzAwMjU3NzV9.al2NGLu2fIcaVgQVdgEcq_UJ1myw8w_6Qi5pEW4AyaJw4s-BUd6XIqcCPQWQ-BXLXyZccb4_H0WN8Q_NozaC0g'),(26,'4','eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MzAwMjY0NDh9.7GDc0WvJKyiolvwXR7YBMpk5WE4I6k_rePoZAsPZ-_pQSmz2x9qppShpfvVPXyL15e3IPN-xYzFtz7Okrj7PTA');
/*!40000 ALTER TABLE `refresh_token` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-20 10:13:45
