<?php

$recepient = "johnyjust69@gmail.com";
$sitename = "Mr. Burger";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$street = trim($_POST["street"]);
$house = trim($_POST["house"]);
$part = trim($_POST["part"]);
$flat = trim($_POST["flat"]);
$floor = trim($_POST["floor"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nУлица: $street\nДома: $house\nКорпус: $part\nКвартира: $flat\nЭтаж: $floor\nКомментарий: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");