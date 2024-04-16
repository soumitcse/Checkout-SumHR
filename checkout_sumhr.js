function checkout(){
  content= document.getElementsByClassName('clock-in-out')[0]
  kbButtons = content.getElementsByTagName("button");
  kbButtons[0].click();
  console.log("Checkout clicked");
}

current_date = new Date;
start_date = "" + (current_date.getMonth()  + 1)+ " " + current_date.getDate() + " " + current_date.getFullYear()  + " " + current_date.getHours() + ":" + current_date.getMinutes()+":00"
end_date = "" + (current_date.getMonth()  + 1)+ " " + current_date.getDate() + " " + current_date.getFullYear()  + "  19:00:00" 
dt1 = new Date(start_date);
dt2 = new Date(end_date);
var diff =(dt2.getTime() - dt1.getTime()) / 1000;
 diff /= 60;
timout_mini_sec = 1000  * 60 * Math.abs(Math.round(diff))
setTimeout(() => {
   checkout();
}, timout_mini_sec);

