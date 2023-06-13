<?php

session_start();

$servername = 'localhost';
$dbusername = 'root';
$dbpassword = 'root';
$dbname = 'login';

// Vérification de la soumission du formulaire de connexion
if(isset($_POST['submit'])){
    // Récupération des données de l'utilisateur
    $username = $_POST['username'];
    $password = $_POST['passeword'];

    // Connexion à la base de données
    $connexion = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

    // Vérification si l'utilisateur existe dans la base de données
    $query = "SELECT * FROM users WHERE username='$username' AND passeword='$password'";
    $result = mysqli_query($connexion, $query);
    

    if(mysqli_num_rows($result) > 0){
        // Redirection vers la page d'accueil si l'utilisateur est trouvé dans la base de données
        header("Location: Alimentation.html");
        $_SESSION['username'] = $username;
        $_SESSION['passeword'] = $password;
        exit;
    } else {
        // Affichage d'un message si l'utilisateur n'est pas trouvé dans la base de données
        echo "<Strong>Vous n'avez pas encore de compte. Veuillez vous <a href='inscription.html'>s'inscrire.</a> </strong>";
    }

   
}
?>




