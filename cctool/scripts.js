var boni = {ch:0, ge:0, in:0, ko:0, st:0, we:0};

racebonus(){
  var value = race.value;
  boni = {ch:0, ge:0, in:0, ko:0, st:0, we:0};
  switch(value){
    case "c":
      boni.ge = 1;
      break;
    case "e":
      boni.we = 1;
      break;
    case "gn":
      boni.in = 1;
      break;
    case "gr":
      boni.st = 1;
      break;
    case "n":
      boni.ch = 1;
      break;
    case "z":
      boni.ko = 1;
      break;
  }
}

function racechange(){
  adaptcultures();
  racebonus();
}

function culturechange(){

}

function adaptcultures(){
  var cul = document.getElementById('cultureselect');
  var i = 0;
  for (i=0; i<4; i++){
    cul.remove(1);
  }
  var race = document.getElementById('raceselect');
  var value = race.value;
  switch(value){
    case "c":
      addoption(cul,"Enchidna","ench");
      addoption(cul,"Schnecke","schn");
      addoption(cul,"Satyr","sat");
      addoption(cul,"Zentaur","zen");
      break;
    case "e":
      addoption(cul,"Dunkelelfe","de");
      addoption(cul,"Hochelfe","he");
      addoption(cul,"Steppenelfe","se");
      addoption(cul,"Waldelfe","we");
      break;
    case "gn":
      addoption(cul,"Felsgnom","fg");
      addoption(cul,"Tiefengnom","tig");
      addoption(cul,"Tüftelgnom","tueg");
      addoption(cul,"Waldgnom","wg");
      break;
    case "gr":
      addoption(cul,"Ent","ent");
      addoption(cul,"Nork","no");
      addoption(cul,"Riesen","ri");
      addoption(cul,"Zyklopen","zy");
      break;
    case "n":
      addoption(cul,"Dryaden","dr");
      addoption(cul,"Erdnymphen","erdn");
      addoption(cul,"Luftnymphen","ln");
      addoption(cul,"Wassernymphen","wn");
      break;
    case "z":
      addoption(cul,"Bergzwerg","bz");
      addoption(cul,"Hobbitzwerg","hz");
      addoption(cul,"Tiefenzwerg","tz");
      addoption(cul,"Wickyzwerg","wz");
      break;
  }
}

function addoption(x, name, value){
  var option = document.createElement("option");
  option.text = name;
  option.value = value;
  x.add(option);
}
