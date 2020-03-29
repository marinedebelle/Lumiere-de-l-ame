document.addEventListener('DOMContentLoaded', () => {
/* Lier les échelles d'éamusementions aux images */
// Aidée par Dorian Garde

 function getAllItems(){
    var feeling = new Array();
  
    feeling.joie = localStorage.getItem('joie');
    feeling.excitation = localStorage.getItem('excitation');
    feeling.amusement = localStorage.getItem('amusement');
    feeling.colere = localStorage.getItem('colere');
    feeling.desir = localStorage.getItem('desir');
    feeling.embarras = localStorage.getItem('embarras');
    feeling.ennui = localStorage.getItem('ennui');
    feeling.serenite = localStorage.getItem('serenite');
    feeling.nostalgie = localStorage.getItem('nostalgie');
    feeling.peur = localStorage.getItem('peur');
    feeling.anxiete = localStorage.getItem('anxiete');
    feeling.tristesse = localStorage.getItem('tristesse');
    feeling.satisfaction = localStorage.getItem('satisfaction');
    feeling.degout = localStorage.getItem('degout');
  
    var joie = "scale(0." + ++feeling.joie +",0." + feeling.joie +")";
    $("#joyImg").css("transform",joie);
  
  var excitation = "scale(0." + ++feeling.excitation +",0." + feeling.excitation +")";
    $("#excitationImg").css("transform",excitation);
  
    var amusement = "scale(0." + ++feeling.amusement +",0." + feeling.amusement +")";
    $("#funImg").css("transform",amusement);
  
    var colere = "scale(0." + ++feeling.colere +",0." + feeling.colere +")";
    $("#angerImg").css("transform",colere);
  } 



}