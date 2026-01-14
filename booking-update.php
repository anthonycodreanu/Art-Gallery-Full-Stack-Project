<?php


session_start();
if (!isset($_SESSION['admin'])) exit('denied');
include 'connect.php';

$state = in_array($_GET['status'], ['pending', 'confirmed', 'declined'])
    ? $_GET['status'] : 'pending';

$stmt = $dbh->prepare("UPDATE bookings SET status=? WHERE id=?");
$stmt->execute([$state, $_GET['id']]);

header('Location: admin-dashboard.php');
