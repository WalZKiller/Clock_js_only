function startTime() {

  //pull date, then create variable and pull specific data from date
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  //minute and seconds letak STRING '0' bila less than 10
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  
  //loop balik every 1 sec/every suka hati seconds
  setTimeout(startTime, 1000);
}

//untuk display minutes and seconds dengan string '0' (bukan nombor) bila less than 10, supaya display dia betul mcm normal digital clock
function checkTime(value) {
  if(value < 10) {value = "0" + value};
  return value;
}