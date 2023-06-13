const data = {
    'achatWeb': {
      empreinte_carbonne: 0.00755,
      Unité_français: "kgCO2e/unité",
    },
    'email': {
        empreinte_carbonne: 0.004,
        Unité_français: "kgCO2e/unité",

    },
    'emailAvecPieceJointe': {
        empreinte_carbonne: 0.035,
        Unité_français: "kgCO2e/unité",

    },

    'SPAM': {
        empreinte_carbonne: 0.00003,
        Unité_français: "kgCO2e/unité",

    },
    'webNavigation': {
        empreinte_carbonne: 0.00101,
        Unité_français: "kgCO2e/unité",

    },
    'webRequest': {
        empreinte_carbonne: 0.00665,
        Unité_français: "kgCO2e/unité",

    }
}



function remplacer_virgule_par_point(decimal) {
	return parseFloat((decimal+"").replace(",","."));
}

var currentQuestion = 1;
var totalQuestions = document.getElementsByClassName('question').length;

function nextQuestion() {
  if(currentQuestion < totalQuestions) {
    document.getElementById('question'+currentQuestion).style.display = 'none';
    document.getElementById('btn').style.display = 'none'
    currentQuestion++;
    document.getElementById('question'+currentQuestion).style.display = 'block';
  }
}



let TOTALNumerique = 0;

function email(){

  let rejet = document.getElementById("mail").value;
  console.log(rejet);

  let emailCarbonne = data['email'].empreinte_carbonne;

  console.log (emailCarbonne);

  const variable = remplacer_virgule_par_point(emailCarbonne);
  const empreinteEmail = variable * rejet
 
    TOTALNumerique += empreinteEmail ;

  console.log(TOTALNumerique);


}

function emailPiece(){
  let saisiEmailPiece = document.getElementById("piece").value;
 

  let emailPieceCarbonne = data['emailAvecPieceJointe'].empreinte_carbonne;

  console.log (emailPieceCarbonne);

  const variable = remplacer_virgule_par_point(emailPieceCarbonne);
  const empreinteEmailPiece = variable * saisiEmailPiece ;
 
    TOTALNumerique += empreinteEmailPiece ;

  console.log(TOTALNumerique);


}

function achatWeb(){
  let saisiachatWeb = document.getElementById("achat").value;
 

  let achatWebCarbonne = data['achatWeb'].empreinte_carbonne;

  console.log (achatWebCarbonne);

  const variable = remplacer_virgule_par_point(achatWebCarbonne);
  const empreinteachatWeb = variable * saisiachatWeb ;
 
    TOTALNumerique += empreinteachatWeb;

  console.log(TOTALNumerique);


}

function SPAM(){
  let saisiSPAM = document.getElementById("spam").value;
 

  let SPAMCarbonne = data['SPAM'].empreinte_carbonne;

  console.log (SPAMCarbonne);

  const variable = remplacer_virgule_par_point(SPAMCarbonne);
  const empreinteSPAM= variable * saisiSPAM ;
 
    TOTALNumerique += empreinteSPAM ;

  console.log(TOTALNumerique);


}


function résultat(){
  const res = Math.floor(TOTALNumerique * 10e6) / 10e6;
  sessionStorage.setItem("numérique", res);
  document.querySelector("#nextali").style.display ="block";
  document.querySelector(".bouton_envoi").style.display ="none";
  document.querySelector("#resultat").innerHTML = "BRAVO !!! Vous avez finis le test , à présent cliquez sur la flèche suivante afin de voir les résultats"

}

/*
document.getElementById("submitButton").addEventListener('click', carbonne);

function carbonne(){
  document.getElementById("totalcarbonne").value =  (Number(sessionStorage.getItem("alimentation")) + Number(sessionStorage.getItem("transport")) + Number(sessionStorage.getItem("numérique"))) ;
  document.getElementById("submitTotalCarbonne").click();
}*/