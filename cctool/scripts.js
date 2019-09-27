function racechange(){
  var cul = document.getElementById('cultureselect');
  var i = 0;
  for (i=0; i<4; i++){
    cul.remove(1);
  }
  var race = document.getElementById('raceselect');
  var value = race.value;
  switch(value){
    case c:
      cul.add("Schnecke");
      break;
    case e:
      break;
    case gn:
      break;
    case gr:
      break;
    case n:
      break;
    case z:
      break;
  }
}
