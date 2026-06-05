-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/asa
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2026 at 12:45 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `konfigura_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `createdAt`) VALUES
(1, 'Budi Santoso', 'budi@contoh.com', 'Saya tertarik bekerja sama dengan Konfigura Tech.', '2026-06-03 15:08:03'),
(2, 'Siti Nurhaliza', 'siti@perusahaan.id', 'Ingin info lebih lanjut tentang program CSR.', '2026-06-03 15:08:03'),
(3, 'Andi Wijaya', 'andi@startup.id', 'Permintaan partnership untuk proyek farm.', '2026-06-03 15:08:03');

-- --------------------------------------------------------

--
-- Table structure for table `ecosystems`
--

CREATE TABLE `ecosystems` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ecosystems`
--

INSERT INTO `ecosystems` (`id`, `name`, `description`, `image`, `createdAt`) VALUES
(1, 'Konfigura Tech', 'Solusi teknologi modern untuk transformasi digital.', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', '2026-06-03 15:08:02'),
(2, 'Konfigura Farm', 'Pengelolaan pertanian dan peternakan berkelanjutan.', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80', '2026-06-03 15:08:02'),
(3, 'Konfigura Institute', 'Pendidikan dan pelatihan berbasis praktik.', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', '2026-06-03 15:08:02'),
(4, 'Konfigura Foundation', 'Program pemberdayaan sosial dan kemanusiaan.', 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80', '2026-06-03 15:08:02');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `status`, `unit`, `createdAt`) VALUES
(1, 'Sistem Informasi Terpadu', 'Pengembangan platform TI untuk semua unit bisnis.', 'Active', 'Konfigura Tech', '2026-06-03 15:08:02'),
(2, 'Program Kepemimpinan', 'Pelatihan kepemimpinan untuk staf dan mitra.', 'Active', 'Konfigura Institute', '2026-06-03 15:08:02'),
(3, 'Green Farm Initiative', 'Program pertanian berkelanjutan skala masyarakat.', 'Ongoing', 'Konfigura Farm', '2026-06-03 15:08:02');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `key_name` varchar(255) NOT NULL,
  `value` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(50) DEFAULT 'admin',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `role`, `createdAt`) VALUES
(1, 'admin@konfigura.co.id', '$2a$10$tGG4.zmartKJZ1fDRQJbmuw8Gjueh7.DO0bpv7rUbGrEf8mpwOHrW', 'Admin Konfigura', 'admin', '2026-06-03 14:35:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ecosystems`
--
ALTER TABLE `ecosystems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `key_name` (`key_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ecosystems`
--
ALTER TABLE `ecosystems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
