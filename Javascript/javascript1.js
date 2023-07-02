const person= {
  firstFightWith: "SOhan";
  lastFightWith: "Mohan";
  WinNumber= 500;
  finalFight= function(){
    return this.firstFightWith + ""+ this.lastFightWith;
  }
  document.getElementById('helo').innerHTML= person.finalFight();
}