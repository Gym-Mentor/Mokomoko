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
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `count` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,2,'깻잎','https://search.shopping.naver.com/search/all?query=깻잎&frm=NVSHATC&prevQuery=깻잎'),(2,1,'맛살','https://search.shopping.naver.com/search/all?query=맛살&frm=NVSHATC&prevQuery=맛살'),(3,1,'피자','https://search.shopping.naver.com/search/all?query=피자&frm=NVSHATC&prevQuery=피자'),(4,1,'화덕','https://search.shopping.naver.com/search/all?query=화덕&frm=NVSHATC&prevQuery=화덕'),(5,1,'스팸','https://search.shopping.naver.com/search/all?query=스팸&frm=NVSHATC&prevQuery=스팸'),(6,1,'마라','https://search.shopping.naver.com/search/all?query=마라&frm=NVSHATC&prevQuery=마라'),(7,1,'중국당면','https://search.shopping.naver.com/search/all?query=중국당면&frm=NVSHATC&prevQuery=중국당면'),(8,1,'삼겹살','https://search.shopping.naver.com/search/all?query=삼겹살&frm=NVSHATC&prevQuery=삼겹살'),(9,1,'떡볶이','https://search.shopping.naver.com/search/all?query=떡볶이&frm=NVSHATC&prevQuery=떡볶이'),(10,1,'닭강정','https://search.shopping.naver.com/search/all?query=닭강정&frm=NVSHATC&prevQuery=닭강정'),(11,1,'토스트','https://search.shopping.naver.com/search/all?query=토스트&frm=NVSHATC&prevQuery=토스트'),(12,1,'도넛','https://search.shopping.naver.com/search/all?query=도넛&frm=NVSHATC&prevQuery=도넛'),(13,1,'노티드도넛','https://search.shopping.naver.com/search/all?query=노티드도넛&frm=NVSHATC&prevQuery=노티드도넛'),(14,1,'김밥','https://search.shopping.naver.com/search/all?query=김밥&frm=NVSHATC&prevQuery=김밥'),(15,1,'라면','https://search.shopping.naver.com/search/all?query=라면&frm=NVSHATC&prevQuery=라면'),(16,1,'닭가슴살','https://search.shopping.naver.com/search/all?query=닭가슴살&frm=NVSHATC&prevQuery=닭가슴살'),(17,1,'자장면','https://search.shopping.naver.com/search/all?query=자장면&frm=NVSHATC&prevQuery=자장면'),(18,3,'초밥','https://search.shopping.naver.com/search/all?query=초밥&frm=NVSHATC&prevQuery=초밥'),(19,1,'버거킹','https://search.shopping.naver.com/search/all?query=버거킹&frm=NVSHATC&prevQuery=버거킹'),(20,1,'쉑쉑버거','https://search.shopping.naver.com/search/all?query=쉑쉑버거&frm=NVSHATC&prevQuery=쉑쉑버거'),(21,1,'제육','https://search.shopping.naver.com/search/all?query=제육&frm=NVSHATC&prevQuery=제육'),(22,1,'마라탕','https://search.shopping.naver.com/search/all?query=마라탕&frm=NVSHATC&prevQuery=마라탕'),(23,1,'아이스크림','https://search.shopping.naver.com/search/all?query=아이스크림&frm=NVSHATC&prevQuery=아이스크림'),(24,1,'수박바','https://search.shopping.naver.com/search/all?query=수박바&frm=NVSHATC&prevQuery=수박바'),(25,1,'오렌지','https://search.shopping.naver.com/search/all?query=오렌지&frm=NVSHATC&prevQuery=오렌지'),(26,1,'블루베리','https://search.shopping.naver.com/search/all?query=블루베리&frm=NVSHATC&prevQuery=블루베리'),(27,1,'아몬드','https://search.shopping.naver.com/search/all?query=아몬드&frm=NVSHATC&prevQuery=아몬드');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
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
