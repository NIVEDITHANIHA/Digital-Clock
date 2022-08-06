var timeElement = document.getElementById("currentTime");
function putZero(nm) {
   return nm<10?"0"+nm:nm;
}
function showtime( ) {
    var dt = new Date();
    var hours = dt.getHours();
    var amOrpm = hours>12?"pm":"am";
    var dateString = putZero(hours%12) +":"+putZero(dt.getMinutes())+":"+putZero(dt.getSeconds())+""+amOrpm;
    timeElement.innerHTML=dateString ;
    setTimeout(function(){
        showtime();
    },1000);
}
showtime();