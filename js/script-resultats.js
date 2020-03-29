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
    console.log(feeling);
  
    if (feeling.joie > 8) {
      var joie = "scale(1)";
    }
    else {
      var joie = "scale(0." + ++feeling.joie +",0." + feeling.joie +")";
    }
    $("#joyImg").css("transform",joie);
  
    //

    if (feeling.excitation > 8) {
      var excitation = "scale(1)";
    }
    else {
      var excitation = "scale(0." + ++feeling.excitation +",0." + feeling.excitation +")";
    }
    $("#excitationImg").css("transform",excitation);
  
    //

    if (feeling.amusement > 8) {
      var amusement = "scale(1)";
    }
    else {
      var amusement = "scale(0." + ++feeling.amusement +",0." + feeling.amusement +")";
    }
    $("#funImg").css("transform",amusement);

    //
  
    if (feeling.colere > 8) {
      var colere = "scale(1)";
    }
    else {
      var colere = "scale(0." + ++feeling.colere +",0." + feeling.colere +")";
    }
    $("#angerImg").css("transform",colere);

    //
    
    if (feeling.desir > 8) {
      var desir = "scale(1)";
    }
    else {
      var desir = "scale(0." + ++feeling.desir +",0." + feeling.desir +")";
    }
    $("#desireImg").css("transform",desir); 

    //

    if (feeling.embarras > 8) {
      var embarras = "scale(1)";
    }
    else {
      var embarras = "scale(0." + ++feeling.embarras +",0." + feeling.embarras +")";
    }
    $("#uncomfortableImg").css("transform",embarras);

    //

    if (feeling.ennui > 8) {
      var ennui = "scale(1)";
    }
    else {
      var ennui = "scale(0." + ++feeling.ennui +",0." + feeling.ennui +")";
    }
    $("#boredomImg").css("transform",ennui);

    //

    if (feeling.serenite > 8) {
      var serenite = "scale(1)";
    }
    else {
      var serenite = "scale(0." + ++feeling.serenite +",0." + feeling.serenite +")";
    }
    $("#serenityImg").css("transform",serenite);
 
    //

    if (feeling.nostalgie > 8) {
      var nostalgie = "scale(1)";
    }
    else {
      var nostalgie = "scale(0." + ++feeling.nostalgie +",0." + feeling.nostalgie +")";
    }
    $("#nostalgiaImg").css("transform",nostalgie);

    //

    if (feeling.peur > 8) {
      var peur = "scale(1)";
    }
    else {
      var peur = "scale(0." + ++feeling.peur +",0." + feeling.peur +")";
    }
    $("#fearImg").css("transform",peur);

    //

    if (feeling.anxiete > 8) {
      var anxiete = "scale(1)";
    }
    else {
      var anxiete = "scale(0." + ++feeling.anxiete +",0." + feeling.anxiete +")";
    }
    $("#anxietyImg").css("transform",anxiete);
    //

    if (feeling.tristesse > 8) {
      var tristesse = "scale(1)";
    }
    else {
      var tristesse = "scale(0." + ++feeling.tristesse +",0." + feeling.tristesse +")";
    }
    $("#sadnessImg").css("transform",tristesse);
    //

    if (feeling.satisfaction > 8) {
      var satisfaction = "scale(1)";
    }
    else {
      var satisfaction = "scale(0." + ++feeling.satisfaction +",0." + feeling.satisfaction +")";
    }
    $("#satisfactionImg").css("transform",satisfaction);
    //

    if (feeling.degout > 8) {
      var degout = "scale(1)";
    }
    else {
      var degout = "scale(0." + ++feeling.degout +",0." + feeling.degout +")";
    }
    $("#disgustImg").css("transform",degout);

}