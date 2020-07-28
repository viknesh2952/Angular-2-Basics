<?php
session_start();
$_POST=JSON_decode(file_get_contents('php://input'),true);
if(isset($_POST) && !empty($_POST))
{
    $username=$_POST['username'];
    $password=$_POST['password'];

    if($username=='admin' && $password=='admin')
    {$_SESSION['user']='admin';
    ?>
    {
        "success":true,
        "secret":"only admin knows"
    }
    <?php
    }
    else{
        ?>
    {
        "success":false,
        "message":"invalid id"
    }   
    <?php
    }
} 
else{
        ?>
    {
        "success":false,
        "message":"Post only"
    }   
    <?php
    
}
?>