<?php
session_start();

$servername = 'localhost';
$dbusername = 'root';
$dbpassword = 'root';
$dbname = 'login';

$nom_utilisateur = $_POST['username'];
$mot_de_passe = $_POST['password'];
$pass = password_hash($mot_de_passe, PASSWORD_DEFAULT);

if (preg_match("/^[a-zA-Z]+$/", $nom_utilisateur)) {

    $connexion = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

   //Vérification si le nom d'utilisateur existe déjà
   $query = "SELECT * FROM users WHERE username='$nom_utilisateur'";
   $result = mysqli_query($connexion, $query);
   if(mysqli_num_rows($result) > 0){
       echo "Ce nom d'utilisateur est déjà pris  ;  " ;
   }else{
    $requete = "INSERT INTO users (username, passeword) VALUES ('$nom_utilisateur', '$pass')";
    $resultat = mysqli_query($connexion, $requete);
   }

    if ($resultat) {
        header("Location: Alimentation.html");
        $_SESSION['username'] = $nom_utilisateur;
        $_SESSION['password'] = $pass;
    } else {
        echo "L'insertion a échoué  ==> <a href='inscription.html'> <strong>retour </strong> </a> ";
    }

}else
{
    echo " le nom d'utilisateur ne doit contenir que des lettres ==><a href='inscription.html'> <strong>retour </strong></a>";
}

?> 


