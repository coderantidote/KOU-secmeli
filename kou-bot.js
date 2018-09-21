/* KOU LOGIN BOT V1.0 */
function delay(milisecondDelay) {
   milisecondDelay += Date.now();
   while(Date.now() < milisecondDelay){}
}
function CryKou() {
  $('#OgrNo').val("you-login-number");
  $('#Sifre').val("you-login-password");
  $("#Ara").click() 
   delay(2000);
}
setTimeout(CryKou(), 9000);
