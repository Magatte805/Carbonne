// Récupérer l'ID de l'utilisateur connecté
$id_utilisateur = $_SESSION['id_utilisateur'];

// Récupérer les scores de l'utilisateur
$score_alimentation = $_POST['score_alimentation'];
$score_numerique = $_POST['score_numerique'];
$score_transport = $_POST['score_transport'];

// Récupérer la date actuelle
$date = date("Y-m-d H:i:s");

// Se connecter à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insérer les scores de l'utilisateur dans la base de données
$sql = "INSERT INTO resultat_quiz (id_utilisateur, score_alimentation, score_numerique, score_transport, date) VALUES ('$id_utilisateur', '$score_alimentation', '$score_numerique', '$score_transport', '$date')";
if ($conn->query($sql) === TRUE) {
    echo "Les résultats ont été enregistrés avec succès";
} else {
    echo "Erreur: " . $sql . "<br>" . $conn->error;
}

// Fermer la connexion à la base de données
$conn->close();
