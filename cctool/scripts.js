function racechange(){
  var cul = document.getElementById('cultureselect');
  var i = 0;
  for (i=0; i<4; i++){
    cul.remove(1);
  }
  var race = document.getElementById('raceselect');
  var value = race.value;
  switch(value){
    case "c":
      addoption(cul,"Enchidna");
      addoption(cul,"Schnecke");
      addoption(cul,"Satyr");
      addoption(cul,"Zentaur");
      break;
    case "e":
      addoption(cul,"Dunkelelfe");
      addoption(cul,"Hochelfe");
      addoption(cul,"Steppenelfe");
      addoption(cul,"Waldelfe");
      break;
    case "gn":
      addoption(cul,"Felsgnom");
      addoption(cul,"Tiefengnom");
      addoption(cul,"Tüftelgnom");
      addoption(cul,"Waldgnom");
      break;
    case "gr":
      addoption(cul,"Ent");
      addoption(cul,"Nork");
      addoption(cul,"Riesen");
      addoption(cul,"Zyklopen");
      break;
    case "n":
      addoption(cul,"Dryaden");
      addoption(cul,"Erdnymphen");
      addoption(cul,"Luftnymphen");
      addoption(cul,"Wassernymphen");
      break;
    case "z":
      addoption(cul,"Bergzwerg");
      addoption(cul,"Hobbitzwerg");
      addoption(cul,"Tiefenzwerg");
      addoption(cul,"Wickyzwerg");
      break;
  }
}

function addoption(x, name){
  var option = document.createElement("option");
  option.text = name;
  x.add(option);
}
