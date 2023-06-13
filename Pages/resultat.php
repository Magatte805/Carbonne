<?php
session_start();

$servername = 'localhost';
$dbusername = 'root';
$dbpassword = 'root';
$dbname = 'login';

$nom_utilisateur = $_SESSION['username']; // Récupérer le nom d'utilisateur depuis la session
$numerique = $_SESSION['numerique']; // Récupérer le résultat numérique depuis la session
$alimentation = $_SESSION['alimentation']; // Récupérer le résultat alimentation depuis la session
$transport = $_SESSION['transport']; // Récupérer le résultat transport depuis la session

// Se connecter à la base de données
$connexion = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

// Vérifier si la connexion à la base de données a réussi
if (!$connexion) {
    die("La connexion à la base de données a échoué : " . mysqli_connect_error());
}

// Mettre à jour les résultats dans la base de données
$requete = "UPDATE users SET empreinteNumerique='$numerique', empreinteAlimentaire='$alimentation', empreinteTransport='$transport' WHERE username='$nom_utilisateur'";
$resultat = mysqli_query($connexion, $requete);

if ($resultat) {
    // Rediriger vers une page de succès ou afficher un message de succès
    header("Location: success.html");
    exit();
} else {
    // Afficher un message d'erreur en cas d'échec de la mise à jour
    echo "La mise à jour des résultats a échoué.";
}

// Fermer la connexion à la base de données
mysqli_close($connexion);
?>
