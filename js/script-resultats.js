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

    var desir = "scale(0." + ++feeling.desir +",0." + feeling.desir +")";
    $("#desireImg").css("transform",desir); 

    var embarras = "scale(0." + ++feeling.embarras +",0." + feeling.embarras +")";
    $("#uncomfortableImg").css("transform",embarras);

    var ennui = "scale(0." + ++feeling.ennui +",0." + feeling.ennui +")";
    $("#boredomImg").css("transform",ennui);

    var serenite = "scale(0." + ++feeling.serenite +",0." + feeling.serenite +")";
    $("#serenityImg").css("transform",serenite);

    var nostalgie = "scale(0." + ++feeling.nostalgie +",0." + feeling.nostalgie +")";
    $("#nostalgiaImg").css("transform",nostalgie);

    var peur = "scale(0." + ++feeling.peur +",0." + feeling.peur +")";
    $("#fearImg").css("transform",peur);

    var anxiete = "scale(0." + ++feeling.anxiete +",0." + feeling.anxiete +")";
    $("#anxietyImg").css("transform",anxiete);

    var tristesse = "scale(0." + ++feeling.tristesse +",0." + feeling.tristesse +")";
    $("#sadnessImg").css("transform",tristesse);

    var satisfaction = "scale(0." + ++feeling.satisfaction +",0." + feeling.satisfaction +")";
    $("#satisfactionImg").css("transform",satisfaction);

    var degout = "scale(0." + ++feeling.degout +",0." + feeling.degout +")";
    $("#disgustImg").css("transform",degout);


}