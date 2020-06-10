<?php
setcookie("username", "", -1);
header("Location: " . $_SERVER['HTTP_REFERER']);
