<?php


try {
    $dbh = new PDO(
        "mysql:host=localhost;dbname=myproject",
        "root",
        ""
    );
} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}
