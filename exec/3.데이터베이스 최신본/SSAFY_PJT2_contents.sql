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
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contents` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `postid` bigint DEFAULT NULL,
  `seq` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents`
--

LOCK TABLES `contents` WRITE;
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` VALUES (1,'맛있는 깻잎맛살전만드는 방법','/profileImg/e5f69887-e216-495c-8bfb-e476181173e2.mp4',1,1),(2,'맛있어 보이죠 ? 오늘은 이 피자를 먹을겁니다 !','/profileImg/13a02c14-f30e-49cf-a2b8-cd6ad1415fb3.jpg',2,1),(3,'맛있는 깻잎 스팸전 만들기','/profileImg/61c975d6-3320-4149-b1d9-6ca93164c57f.jpg',3,1),(4,'스팸을 잘라줍니다.','/profileImg/1a3d6913-2042-492a-b4f1-f75662b96345.jpg',3,2),(5,'깻잎은 꺠끗하게 씻은 후 밑동을 잘라줍니다.','/profileImg/d3524a6c-4018-496c-85f5-ebbf28cf08a5.jpg',3,3),(6,'스팸을 밀가루 묻힌 깻잎으로 싸줍니다.\n후에 계란물을 입혀줍니다.','/profileImg/eb3588af-5d26-48ed-b8b2-b0a46df7327b.jpg',3,4),(7,'노릇노릇하게 구우면 완성!','/profileImg/752a897a-d679-4bc4-8428-594e4e6f002a.jpg',3,5),(8,'순두부 찌개 !','/profileImg/9809110f-a19f-40d0-8342-018812d929ad.jpg',4,1),(9,'마라탕!!!!!!!!','/profileImg/54bddbbf-8797-4ccc-a416-caafc99ad72d.jpg',5,1),(10,'','/profileImg/f8ddb831-7e86-4853-81de-da72ca90ba35.jpg',5,2),(11,'삽겹살에 떡볶이 그리고 후식까지 완-벽 !','/profileImg/8d5889ca-572e-4ef4-b604-45aa635639a8.jpg',6,1),(12,'','/profileImg/c8cab9f7-d6ac-4871-9460-350bdd3d6660.jpg',6,2),(13,'','/profileImg/6b86a91b-6718-415a-958a-5d4a59b3f354.jpg',6,3),(14,'아침엔 토스트','/profileImg/82fac0db-65b7-4c1f-89aa-99d140be428d.jpg',7,1),(15,'요즘 유행하는 노티드 도넛..!','/profileImg/27abb985-c076-4ff3-bfd0-6f62955c81c4.jpg',8,1),(16,'혼밥중','/profileImg/dbdf814d-8097-4b38-a39c-07a56362f2b8.jpg',9,1),(17,'밥 먹고 난 후 맛있는 크로플 까지,,!','/profileImg/5895fbe2-cc07-47bd-97dc-25213921a7d1.jpg',10,1),(18,'시원한 물회 한 그릇','/profileImg/745c13d3-dd54-478e-bcca-e7c525175727.jpg',11,1),(19,'닭가슴살을 강불에 겉이 익을 때까지 조리합니다','/profileImg/8cd74292-829d-4a40-91ef-ffc002c67478.jpg',12,1),(20,'양배추를 먹기 좋은 크기로 자릅니다.','/profileImg/387cb94f-313e-411d-ba3e-7386d7fb9ab4.jpg',12,2),(21,'닭가슴살을 먹기 좋은 크기로 잘라 줍니다.','/profileImg/79f0efa5-2524-47f8-b644-f62a2b34534a.jpg',12,3),(22,'맛있는 건강식 완성!','/profileImg/054d62b9-9cc8-40a9-bd71-659281275702.jpg',12,4),(23,'맛있어 보이나요?','/profileImg/482b371d-b4e7-4615-8f60-0d0fd3e3db20.jpg',13,1),(24,'신사역 맛집..!\n은행골 신사점!!','/profileImg/46878f02-c7ed-4532-8bee-3eaeef96bf47.png',14,1),(25,'여의도 맛집!\n아루히','/profileImg/ed98e625-368a-4439-a5d9-fcffbc8a4b64.png',15,1),(26,'대구 반월당 초밥 맛집\n도마 29','/profileImg/45bc8309-ebc7-45cb-bd02-64308f973b25.png',16,1),(27,'버거킹 vs 쉑쉑버거 뭐가 더 맛있나요?\n','/profileImg/f41f4a7b-3045-4e5d-ab62-668905c1ebfb.jpg',17,1),(28,'','/profileImg/b1c79936-7d37-4882-8545-a4408be6a5b9.jpg',17,2),(29,'제육볶음 냠냠','/profileImg/221d755e-e4ce-4916-92e2-d223a81a8ec6.jpg',18,1),(30,'라쿵푸 마라탕','/profileImg/c67040ce-8628-497f-933d-c05eeecb335b.jpg',19,1),(31,'슈..슈..박바','/profileImg/43b34828-bd2f-43dd-9465-67e0eff79d40.jpg',20,1),(32,'츏','/profileImg/21d2f0f2-b86c-43be-9ffe-a5c3017136d0.jpg',21,1),(33,'국..슉..슈..슈슈슉....수슉...','/profileImg/b372e9e1-bfef-42d5-9a37-4b78e5cefbf3.jpg',22,1),(34,'상쾌한 아침 식사!','/profileImg/2fcc0142-e4c3-42f9-b12c-c8ca73724210.jpg',23,1),(35,'옛날에 먹은건데 이름이 기억안나네요 뭘까요?','/profileImg/8ab19aab-0cd7-40c8-aa5e-2512a6986a66.jpg',24,1);
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;
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
