'use strict';
let userName = prompt("Enter your Name Plz ? ");
console.log(userName);
alert(" hello (( "+ userName +" )) welcome to our Website ")

let a = prompt("how old are you ? ");
console.log(a);
alert(" you are (( "+ userName +" )) and your age is (( "+ a +" )) ........ ")

let FavoriteSport = prompt("choose number for  your favorite sport : 1-football , 2-basketball , 3-bowling  ? ");
console.log(FavoriteSport);


 while ( FavoriteSport   != "1" && FavoriteSport != "2" && FavoriteSport != "3") {

    FavoriteSport = prompt("please enter the number OF your FavoriteSport : 1-football , 2-basketball , 3-bowling");
  }

 if (FavoriteSport == 1) {
  alert("you are the best") 
  let x = prompt("how many times do you want to see a football image ?")

for (var i=0 ; i < x ; i++) {  document.write ("<img src='https://www.cricketsoccer.com/wp-content/uploads/2020/12/1c5b1aa3386eeb2c21d633f04e2ddfbe.jpg' width=250px height=250p />")
console.log(i)}}

  else if (FavoriteSport == 2) {
  alert(" no bad sport ;-)")
   x = prompt("how many times do you want to see  a basketball image ?")

for (var i=0 ; i < x ; i++) {  document.write ("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuIoVG4ZHwDBUXjLocwNM3P5Pa2mdYpYHhQ&usqp=CAU' width=250px height=250p />")
console.log(i)}
} else {
  alert("hello ")
   x = prompt("how many times do you want to see a bowling image ?")
   for (var i=0 ; i < x ; i++) {  document.write ("<img src='https://img.freepik.com/free-vector/bowling-game_134830-689.jpg?size=626&ext=jpg' width=250px height=250p />")
console.log(i)}


}
alert("the images in the bottom of the page ")

