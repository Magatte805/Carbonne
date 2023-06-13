const parseStr = str => str.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();

const data = Object.entries({
  Autobus: {
    Total_poste_non_décomposé: 0.113,
    Unité_français: "kgCO2e/passager.km",
  },
  "Métro, tramway, trolleybus": {
    Total_poste_non_décomposé: 0.00298,
    Unité_français: "kgCO2e/passager.km",
  },
  Hoverboard: {
    Total_poste_non_décomposé: 0.00625,
    Unité_français: "kgCO2e/heure",
  },
  Moto: {
    Total_poste_non_décomposé: 0.0763,
    Unité_français: "kgCO2e/km",
  },
  trottinette: {
    Total_poste_non_décomposé: 0.002,
    Unité_français: "kgCO2e/km",
  },
  Vélo: {
    Total_poste_non_décomposé: 0.00223,
    Unité_français: "kgCO2e/km",
  },
  "Voiture E85": {
    Total_poste_non_décomposé: 0.101,
    Unité_français: "kgCO2e/passager.km",
  },
  "Voiture gazole": {
    Total_poste_non_décomposé: 0.142,
    Unité_français: "kgCO2e/passager.km",
  },
  "Voiture essence": {
    Total_poste_non_décomposé: 0.149,
    Unité_français: "kgCO2e/passager.km",
  },
  "Voiture GNV": {
    Total_poste_non_décomposé: 0.148,
    Unité_français: "kgCO2e/passager.km",
  },
  "Voiture GPL": {
    Total_poste_non_décomposé: 0.146,
    Unité_français: "kgCO2e/passager.km",
  },
  "Voiture particulière": {
    Total_poste_non_décomposé: 0.103,
    Unité_français: "kgCO2e/km",
  },
}).reduce((obj, [key,value]) => ({ ...obj, [parseStr(key)]: value }), {});

function toggle(className) {
  const element = document.querySelector(`div.${className}`);
  const checkbox = document.querySelector(`.checkbox .${className}`);
  element.style.display = checkbox.checked ? "block" : "none";
}


const getFirstClassName = input => Array.from(input.classList.values())[0];

function submit() {
  const checkedBox = [
    ...document.querySelectorAll(`input[type="checkbox"]`).values(),
  ]
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => getFirstClassName(checkbox))
  const inputs = [
    ...document.querySelectorAll(`input[type="number"]`).values(),
  ].filter((input) => input.value !== "" && checkedBox.includes(getFirstClassName(input)));
  const somme = Math.floor(inputs.reduce((acc, input) => acc + input.value * data[getFirstClassName(input)].Total_poste_non_décomposé, 0) * 100) / 100;
  
  document.querySelector("#resultat").innerHTML = "<strong>" + " Vous pouvez passez au test du numérique avec la flèche suivante" + "</strong>";
  sessionStorage.setItem("transport", somme);


}


function res(){
  document.querySelector("#resultat").style.display = "block";
  document.querySelector("#nexttrans").style.display = "block" ;
  document.querySelector("#valider").style.display = "none" ;
}
  

