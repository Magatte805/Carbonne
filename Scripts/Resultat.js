function affich(){

  document.querySelector("#resultatt").innerHTML =  "Votre empreinte carbonne numérique est de: " + 
  
     
      sessionStorage.getItem("numérique") + " kgCO2" + "<br>" + "<br>" + 
      "Votre empreinte carbonne alimentaire est de: " + 
      sessionStorage.getItem("alimentation") + " kgCO2" + 
      "<br>" + "<br>"  + "Votre empreinte carbonne de transport est de: " +
      sessionStorage.getItem("transport")+
      " kgCO2" + "<br>"+ "<br>" + "<strong>" +
      "Au totale votre empreinte carbonne est de: " + "<strong>" + 
      (Number(sessionStorage.getItem("alimentation")) + Number(sessionStorage.getItem("transport")) + Number(sessionStorage.getItem("numérique"))) + " kgCO2" + "<strong>";
  }
  
  window.addEventListener('load', affich); 