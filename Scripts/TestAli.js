const data = {
    'CAFE':{
      empreinte_carbonne: 0.0503,
      Unité_français: "kgCO2e",
    },

    'Vegetarien': {
        empreinte_carbonne: 0.51,
        Unité_français: "kgCO2e",
    },
    'Vegetalien': {
        empreinte_carbonne: 0.39,
        Unité_français: "kgCO2e",
      },

    'ViandeBlanche' :{
        empreinte_carbonne: 1.35,
        Unité_français: "kgCO2e",
      },
    'ViandeRouge':{
        empreinte_carbonne: 6.29,
        Unité_français: "kgCO2e/passager.km",
      },


}


function remplacer_virgule_par_point(decimal) {
	return parseFloat((decimal+"").replace(",","."));
}

function fonctionOUI(){
  if (document.querySelector("#oui").checked === true) {
      document.querySelector("#cafe").style.display = "block" ; 
      document.querySelector("#repas").style.display = "none" ; 
  
  }

}

function fonctionNON (){
  if (document.querySelector("#non").checked === true) {
      document.querySelector("#cafe").style.display = "none" ;
      document.querySelector("#repas").style.display = "block" ; 
  }

}

let TOTALaLIMENTATION = 0;

function carbonne(){

  let rejet = document.getElementById("bilan").value;
  console.log(rejet);

  let cafecarbonne = data['CAFE'].empreinte_carbonne;

  console.log (cafecarbonne);

  const variable = remplacer_virgule_par_point(cafecarbonne)
 
  TOTALaLIMENTATION += variable * rejet;

  console.log(TOTALaLIMENTATION);

}


function fonctionRepas(){
  document.querySelector("#repas").style.display = "block" ; 
}


let totalCarbonne = 0 ;

function viandeBlanche(){
  let viandeBlancheCarbonne = data['ViandeBlanche'].empreinte_carbonne;

  console.log (viandeBlancheCarbonne);
  if (document.getElementById("Checkbox1").checked === true) {
    totalCarbonne += viandeBlancheCarbonne;
    console.log(totalCarbonne);
  }else{
    totalCarbonne -= viandeBlancheCarbonne;

  }

      
}

function vegetarien(){
  let vegetarienCarbonne = data['Vegetarien'].empreinte_carbonne;

  console.log (vegetarienCarbonne);
  if (document.getElementById("Checkbox2").checked === true) {
    totalCarbonne += vegetarienCarbonne;
    console.log(totalCarbonne);
  }else{
    totalCarbonne -= vegetarienCarbonne;

  }
  
}

function viandeRouge(){
  let viandeRougeCarbonne = data['ViandeRouge'].empreinte_carbonne;

  console.log (viandeRougeCarbonne);
  if (document.getElementById("Checkbox3").checked === true) {
    totalCarbonne += viandeRougeCarbonne;
    console.log(totalCarbonne);
  }else{
    totalCarbonne -= viandeRougeCarbonne;

  }
}


function vegetalien(){
  let vegetalienCarbonne = data['Vegetalien'].empreinte_carbonne;

  console.log (vegetalienCarbonne);
  if (document.getElementById("Checkbox4").checked === true) {
    totalCarbonne += vegetalienCarbonne;
    console.log(totalCarbonne);
  }else{
    totalCarbonne -= vegetalienCarbonne;

  }
}







function PasDeRepas(){
  const valeurRien = 0 ;
  if (document.getElementById("Checkbox5").checked === true) {
      totalCarbonne += valeurRien ;
  }else{
      totalCarbonne -= valeurRien ;
  }
}


function resultat(){
  document.querySelector("#result").innerHTML = totalCarbonne;
   
}

function résultat(){
  empreinteCarbonne = "<strong>" + " Vous pouvez passez au test du transport avec la flèche suivante" + "</strong>"
  document.querySelector("#resultat").innerHTML = empreinteCarbonne;
  document.querySelector("#nextali").style.display = "block" ;
  document.querySelector("#bouton_envoi").style.display = "none" ;
  const som = totalCarbonne + TOTALaLIMENTATION
  sessionStorage.setItem("alimentation", som);
  localStorage.clear();
}








