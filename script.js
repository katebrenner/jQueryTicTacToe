let clickNum = 0;
let cell = $('.cell');
let mouseClick = function() {
  clickNum = clickNum +1;}



function xOrO () {
  let h2 = $('h2')
  clickNum = clickNum +1;
  if (clickNum % 2 === 0) {
   $(this).html('X');
 }
  else if (clickNum %2 != 0) {
   $(this).html('O');
    }
   $(this).off("click", mouseClick);
   console.log('hello');
   if ($(cell[0]).text() === $(cell[1]).text() && $(cell[0]).text() === $(cell[2]).text() && $(cell[0]).text() != ""){
    h2.html("Winner is " + $(cell[0]).text())}
   else if ($(cell[0]).text() === $(cell[4]).text() && $(cell[0]).text() === $(cell[8]).text() && $(cell[0]).text() != ""){
    h2.html("Winner is " + $(cell[0]).text())}
   else if ($(cell[0]).text() === $(cell[3]).text() && $(cell[0]).text() === $(cell[6]).text() && $(cell[0]).text() != ""){
    h2.html("Winner is " + $(cell[0]).text())}
   else if ($(cell[1]).text() === $(cell[4]).text() && $(cell[1]).text() === $(cell[7]).text() && $(cell[1]).text() != ""){
    h2.html("Winner is " + $(cell[1]).text())}
  else if ($(cell[2]).text() === $(cell[5]).text() && $(cell[2]).text() === $(cell[8]).text() && $(cell[2]).text() != ""){
   h2.html("Winner is " + $(cell[2]).text())}
   else if ($(cell[2]).text() === $(cell[4]).text() && $(cell[2]).text() === $(cell[6]).text() && $(cell[2]).text() != ""){
    h2.html("Winner is " + $(cell[2]).text())}
   else if ($(cell[3]).text() === $(cell[4]).text() && $(cell[3]).text() === $(cell[5]).text() && $(cell[3]).text() != ""){
    h2.html("Winner is " + $(cell[3]).text())}
   else if ($(cell[6]).text() === $(cell[7]).text() && $(cell[6]).text() === $(cell[8]).text() && $(cell[6]).text() != ""){
    h2.html("Winner is " + $(cell[6]).text())}
 }


for (i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", xOrO)}
