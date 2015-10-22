/*
SQLyog Community v8.55 
MySQL - 5.5.44-0ubuntu0.14.04.1 : Database - noun
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`noun` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `noun`;

/*Table structure for table `Resource` */

DROP TABLE IF EXISTS `Resource`;

CREATE TABLE `Resource` (
  `id` int(11) NOT NULL,
  `name` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `url` varchar(256) COLLATE utf8_bin DEFAULT NULL,
  `course` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `date_uploaded` date DEFAULT NULL,
  `dept` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `faculty` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `Resource` */

insert  into `Resource`(`id`,`name`,`url`,`course`,`date_uploaded`,`dept`,`faculty`) values (1,'Bman1','google.com','Computer','2019-05-05','Maths','Science'),(2,'Bman1','google.com','Computer','2019-05-05','Maths','Science'),(3,'Bman1','google.com','Computer','2019-05-05','Maths','Science');

/*Table structure for table `User` */

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `user_id` varchar(16) COLLATE utf8_bin NOT NULL,
  `email` varchar(128) COLLATE utf8_bin NOT NULL,
  `password` varchar(128) COLLATE utf8_bin NOT NULL,
  `role` varchar(64) COLLATE utf8_bin NOT NULL,
  `first_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `other_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `course` varchar(128) COLLATE utf8_bin NOT NULL,
  `dept` varchar(128) COLLATE utf8_bin NOT NULL,
  `faculty` varchar(128) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `User` */

insert  into `User`(`user_id`,`email`,`password`,`role`,`first_name`,`last_name`,`other_name`,`course`,`dept`,`faculty`) values ('user001','a@gmail.com','1234','ADMIN','Azibit','Azibit','Azibit','Computer','Mathematics','Science'),('user002','z@gmail.com','1234','ADMIN','freewayz','freewayz','freewayz','Computer ','Mathemtics','Science');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
