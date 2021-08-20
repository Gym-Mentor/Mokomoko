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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `authority` varchar(255) DEFAULT NULL,
  `createdate` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `follower` bigint DEFAULT NULL,
  `follow` bigint DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `provide` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ROLE_USER','2021-08-20 00:13:10.588621','yaron_e5@naver.com',4,1,'/profileImg/user_image.png',NULL,'moko','$2a$10$lAPc9ooonetCSgWlI6Tgq.L5FBGU.QOERgtpOllVvxLhmrTfaYHWq','LOCAL'),(2,'ROLE_USER','2021-08-20 00:13:39.111709','iiilll_iill@naver.com',9,1,'/profileImg/3c549877-1c36-4b1c-acba-18dc4e4f97dd.jpg','먹는게 제일 좋아','mukzzang','$2a$10$eQH8NgElvHIxQQjTHz4lquVpmZLFadFiKc0O.OVgtMldIUVCYzW9m','LOCAL'),(3,'ROLE_USER','2021-08-20 00:15:58.200478','1-SUV8uZkbcOqZ4pw1JW_-M6A2mHScD87GMP1dAx_TU',5,0,'https://phinf.pstatic.net/contact/20200925_28/16010281295927OR89_PNG/image.png',NULL,'Jay','$2a$10$flWvWFHX9MS7j.WO1n0gFO6WdPDH1Zih6drFCKnCKIJZqcm2G.dqi','SNS'),(4,'ROLE_USER','2021-08-20 00:19:40.462076','1854047928',6,2,'/profileImg/user_image.png',NULL,'박종한','$2a$10$5HlCpUIw9QnVVrv94EJJ..vajMU33Y.pESlpq7.RvRK8pYhw.KceS','SNS'),(5,'ROLE_USER','2021-08-20 00:27:41.165530','dyp0731@gmail.com',4,2,'/profileImg/898f94cd-a414-4485-99f6-ab4383dd37d9.jpg','초밥을 좋아합니다.','how_to_make','$2a$10$3L30TEoGmjiJNdg72TUf4efv/YxLxBWeMNbqmdhbBvxskGU3gaIoa','LOCAL'),(6,'ROLE_USER','2021-08-20 00:27:47.566297','yarone4916@gmail.com',4,5,'/profileImg/9d493768-df8f-4b91-9da5-d27abdc1f0df.png','버티면,, 부러져요 !','PAKA','$2a$10$Er6OcVob8UWSPy896gmYLOXRZeWfytOkUPnAYvwKmMs9XymFZF58W','LOCAL'),(7,'ROLE_USER','2021-08-20 00:31:22.749378','IYh_rD8wuMst0IgA6Kr9JH-k4BOy7yQ-OTHGGmFtWVc',1,6,'/profileImg/502ee985-c55d-423d-86ac-cdf3103c2bb6.jpg','치즈버거를 좋아하는 사람입니다','치즈버거','$2a$10$tD5d6/nEXZNUTallsG6RduXsY/FUY/bUeZz38m4A/OQhw1gBcjdOq','LOCAL'),(8,'ROLE_USER','2021-08-20 00:33:53.809423','1838004763',2,3,'/profileImg/19ba7090-add7-4b64-b4a3-be8f1bd64c4f.png','제가..누군가를 좋아한다는 사실이.. 그사람에겐 상처가 될지도..','랄로','$2a$10$01aHqyqkBknsiaebPG085ORMFPZcfp5YGSC547XbJ4AcedCVlltoe','LOCAL'),(9,'ROLE_USER','2021-08-20 00:34:35.833304','1817338044',3,7,'http://k.kakaocdn.net/dn/cZEac2/btracK7S1p0/AhW3MjDgcH7dinaBJLh8iK/m1.jpg',NULL,'박다영','$2a$10$0kDSf2zeRLKzRbnLxes79.6eH59lO6wCutgKuIEkAA5GJ6/IC.XWS','SNS'),(10,'ROLE_USER','2021-08-20 00:38:45.010991','jonghan1983@naver.com',1,9,'/profileImg/02507375-0082-41ac-a792-531da68aef1e.jpg','ㅎㅇ','바위게','$2a$10$6KQ7aRcBMMYMwaCKwJITluOJ7DPXVgRhwLbUvhK8.SxY4ml7wS1I.','LOCAL'),(11,'ROLE_USER','2021-08-20 00:40:36.421643','1857681577',1,1,'http://k.kakaocdn.net/dn/cSz9Q0/btq89vxSTtM/GBj8rcgNqLw0k370x3DcL1/img_640x640.jpg',NULL,'이수정','$2a$10$LfJRqlq0TsxuP8FXB1C85OA8..T3BHzYxTL081iViOIK41BiqBz36','SNS'),(12,'ROLE_USER','2021-08-20 00:44:40.859115','1849357854',0,3,'http://k.kakaocdn.net/dn/MIikD/btqO1V26Bv8/WRT24MHrbuGIiz6IIwvdD1/img_640x640.jpg',NULL,'범수','$2a$10$3f9d6QyJTab0.z3PA.6ra.DZlEzTuAuBSR7JDMhx7V1DsVnaK6.7O','SNS');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-20 10:13:46
