<?php 
session_start();

$user=$_SESSION['user'];


if($user=='admin'){
    echo'{
        "message:"this is the secret message",
        "success":true
}';
}else{
    echo '{
        "message":"who is this?",
        "success":true
    }';
       }



?>