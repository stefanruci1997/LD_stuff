-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2024 at 12:08 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sonja-press`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `user_id` int(11) NOT NULL,
  `admin_permission` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`user_id`, `admin_permission`) VALUES
(4, 'full');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `sub_title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`article_id`, `title`, `sub_title`, `content`, `category_id`, `user_id`, `created_at`) VALUES
(4, 'Article 4 Title', 'Sub Title 4', 'Content of Article 4', 2, 5, '2024-01-13 16:52:16'),
(5, 'Article 5 Title', 'Sub Title 5', 'Content of Article 5', 1, 5, '2024-01-13 16:52:16'),
(6, 'Article 6 Title', 'Sub Title 6', 'Content of Article 6', 2, 5, '2024-01-13 16:52:16'),
(7, 'Article 7 Title', 'Sub Title 7', 'Content of Article 7', 1, 5, '2024-01-13 16:52:16'),
(8, 'Article 8 Title', 'Sub Title 8', 'Content of Article 8', 2, 5, '2024-01-13 16:52:16'),
(9, 'Article 9 Title', 'Sub Title 9', 'Content of Article 9', 1, 5, '2024-01-13 16:52:16'),
(11, 'Article 1 Title', 'Sub Title 1', 'Content of Article 1', 1, 5, '2024-01-13 22:04:41'),
(12, 'Article 2 Title', 'Sub Title 2', 'Content of Article 2', 2, 5, '2024-01-13 22:04:41'),
(13, 'Article 3 Title', 'Sub Title 3', 'Content of Article 3', 3, 5, '2024-01-13 22:04:41'),
(14, 'Article 4 Title', 'Sub Title 4', 'Content of Article 4', 4, 5, '2024-01-13 22:04:41'),
(15, 'Article 5 Title', 'Sub Title 5', 'Content of Article 5', 5, 5, '2024-01-13 22:04:41'),
(16, 'Article 6 Title', 'Sub Title 6', 'Content of Article 6', 6, 5, '2024-01-13 22:04:41'),
(17, 'Article 7 Title', 'Sub Title 7', 'Content of Article 7', 7, 5, '2024-01-13 22:04:41'),
(18, 'Article 8 Title', 'Sub Title 8', 'Content of Article 8', 8, 5, '2024-01-13 22:04:41'),
(19, 'Article 9 Title', 'Sub Title 9', 'Content of Article 9', 9, 5, '2024-01-13 22:04:41'),
(20, 'Article 10 Title', 'Sub Title 10', 'Content of Article 10', 10, 5, '2024-01-13 22:04:41'),
(21, 'Article 1 Title', 'Sub Title 1', 'Content of Article 1', 1, 5, '2024-01-13 22:05:02'),
(22, 'Article 2 Title', 'Sub Title 2', 'Content of Article 2', 2, 5, '2024-01-13 22:05:02'),
(23, 'Article 3 Title', 'Sub Title 3', 'Content of Article 3', 3, 5, '2024-01-13 22:05:02'),
(24, 'Article 4 Title', 'Sub Title 4', 'Content of Article 4', 4, 5, '2024-01-13 22:05:02'),
(25, 'Article 5 Title', 'Sub Title 5', 'Content of Article 5', 5, 5, '2024-01-13 22:05:02'),
(26, 'Article 6 Title', 'Sub Title 6', 'Content of Article 6', 6, 5, '2024-01-13 22:05:02'),
(27, 'Article 7 Title', 'Sub Title 7', 'Content of Article 7', 7, 5, '2024-01-13 22:05:02'),
(28, 'Article 8 Title', 'Sub Title 8', 'Content of Article 8', 8, 5, '2024-01-13 22:05:02'),
(29, 'Article 9 Title', 'Sub Title 9', 'Content of Article 9', 9, 5, '2024-01-13 22:05:02'),
(30, 'Article 10 Title', 'Sub Title 10', 'Content of Article 10', 10, 5, '2024-01-13 22:05:02'),
(31, 'Article 1 Title', 'Sub Title 1', 'Content of Article 1', 1, 5, '2024-01-13 22:05:02'),
(32, 'Article 2 Title', 'Sub Title 2', 'Content of Article 2', 2, 5, '2024-01-13 22:05:02'),
(33, 'Article 3 Title', 'Sub Title 3', 'Content of Article 3', 3, 5, '2024-01-13 22:05:02'),
(34, 'Article 4 Title', 'Sub Title 4', 'Content of Article 4', 4, 5, '2024-01-13 22:05:02'),
(35, 'Article 5 Title', 'Sub Title 5', 'Content of Article 5', 5, 5, '2024-01-13 22:05:02'),
(36, 'Article 6 Title', 'Sub Title 6', 'Content of Article 6', 6, 5, '2024-01-13 22:05:02'),
(37, 'Article 7 Title', 'Sub Title 7', 'Content of Article 7', 7, 5, '2024-01-13 22:05:02'),
(38, 'Article 8 Title', 'Sub Title 8', 'Content of Article 8', 8, 5, '2024-01-13 22:05:02'),
(39, 'Article 9 Title', 'Sub Title 9', 'Content of Article 9', 9, 5, '2024-01-13 22:05:02'),
(40, 'Article 10 Title', 'Sub Title 10', 'Content of Article 10', 10, 5, '2024-01-13 22:05:02'),
(49, 'dsfsdafsdf', 'sdafasdfasd', 'sdafsdfasdf', 10, 5, '2024-01-14 20:30:03'),
(50, 'asdfasdfasd', 'sdfasdfasdf', 'asdfsdfasdf', 1, 5, '2024-01-14 20:30:41'),
(51, 'sdfsdfasd', 'sdafasdf', 'sdfasdfsdf', 1, 5, '2024-01-14 20:32:28'),
(52, 'sadasDASAD', 'SDFSDAFASD', 'DSAFASDF', 1, 5, '2024-01-14 20:44:16'),
(53, 'sadasDASAD', 'SDFSDAFASD', 'DSAFASDF', 1, 5, '2024-01-14 20:48:47'),
(54, 'sadasDASAD', 'SDFSDAFASD', 'DSAFASDF', 1, 5, '2024-01-14 20:49:14'),
(57, 'fsdafsdf', 'fsadfasd', 'sdafsdfsdaf', 1, 5, '2024-01-14 20:51:55');

-- --------------------------------------------------------

--
-- Table structure for table `article_ratings`
--

CREATE TABLE `article_ratings` (
  `rating_id` int(11) NOT NULL,
  `article_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'Politics'),
(2, 'World'),
(3, 'Region'),
(4, 'Economy'),
(5, 'Gossip'),
(6, 'Culture'),
(7, 'Health'),
(8, 'Style'),
(9, 'Cuisine'),
(10, 'Sport');

-- --------------------------------------------------------

--
-- Table structure for table `editors`
--

CREATE TABLE `editors` (
  `user_id` int(11) NOT NULL,
  `editor_specialization` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `editors`
--

INSERT INTO `editors` (`user_id`, `editor_specialization`) VALUES
(5, 'Gossip-Editor');

-- --------------------------------------------------------

--
-- Table structure for table `media_files`
--

CREATE TABLE `media_files` (
  `media_id` int(11) NOT NULL,
  `article_id` int(11) DEFAULT NULL,
  `file_path` varchar(255) NOT NULL,
  `file_type` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `readers`
--

CREATE TABLE `readers` (
  `user_id` int(11) NOT NULL,
  `favorite_category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `readers`
--

INSERT INTO `readers` (`user_id`, `favorite_category`) VALUES
(7, '1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_type` enum('admin','editor','reader') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `user_type`, `created_at`, `name`, `surname`) VALUES
(4, 'admin', '$2y$10$hSRy3Zt/9YhM9Y0aRw2yi.t6.CLspTu9NSKauxkD4u1XmyX3EC5cq', 'admin@sonja-press.com', 'admin', '2024-01-12 21:45:06', 'admin', 'admin'),
(5, 'editor1', '$2y$10$hSRy3Zt/9YhM9Y0aRw2yi.t6.CLspTu9NSKauxkD4u1XmyX3EC5cq', 'editor1@sonja-press.com', 'editor', '2024-01-12 21:45:06', 'editorNmae', 'editorSurname'),
(7, 'reader1', '$2y$10$cgz.WVmCXVWGgXpvyjxUDO79EhhUYvkOyhXqUvp49DuTZasaoP.Qm', 'reader1@gmail.com', 'reader', '2024-01-14 18:17:26', 'reader', 'readersurname');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `article_ratings`
--
ALTER TABLE `article_ratings`
  ADD PRIMARY KEY (`rating_id`),
  ADD KEY `article_id` (`article_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `editors`
--
ALTER TABLE `editors`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `media_files`
--
ALTER TABLE `media_files`
  ADD PRIMARY KEY (`media_id`),
  ADD KEY `article_id` (`article_id`);

--
-- Indexes for table `readers`
--
ALTER TABLE `readers`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `article_ratings`
--
ALTER TABLE `article_ratings`
  MODIFY `rating_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `media_files`
--
ALTER TABLE `media_files`
  MODIFY `media_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

--
-- Constraints for table `article_ratings`
--
ALTER TABLE `article_ratings`
  ADD CONSTRAINT `article_ratings_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`article_id`),
  ADD CONSTRAINT `article_ratings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `editors`
--
ALTER TABLE `editors`
  ADD CONSTRAINT `editors_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `media_files`
--
ALTER TABLE `media_files`
  ADD CONSTRAINT `media_files_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`article_id`);

--
-- Constraints for table `readers`
--
ALTER TABLE `readers`
  ADD CONSTRAINT `readers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
