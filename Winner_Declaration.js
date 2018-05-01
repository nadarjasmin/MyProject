var count = document.getElementById("34").value;
    var i = 1;
    function valuechk() {
    if
((document.getElementById("1").value === document.getElementById("2").value)  &&
(document.getElementById("2").value === document.getElementById("3").value))
{if(count == 1) alert("SUCCESS row1 PLAYER1"); else alert("SUCCESS row1 PLAYER2");}
else if
((document.getElementById("4").value === document.getElementById("5").value)&&
(document.getElementById("5").value === document.getElementById("6").value)) 
{if(count == 1) alert("SUCCESS row2 PLAYER1"); else alert("SUCCESS row2 PLAYER2");}
else if
((document.getElementById("7").value === document.getElementById("8").value) &&
(document.getElementById("7").value === document.getElementById("9").value) )
{if(count == 1) alert("SUCCESS row3 PLAYER1"); else alert("SUCCESS row13 PLAYER2");}
else if
((document.getElementById("1").value === document.getElementById("5").value) &&
(document.getElementById("5").value === document.getElementById("9").value))
{if(count == 1) alert("SUCCESS diag1 PLAYER1"); else alert("SUCCESS diag1 PLAYER2");}
else if
((document.getElementById("3").value === document.getElementById("5").value) &&
(document.getElementById("5").value === document.getElementById("7").value))
{if(count == 1) alert("SUCCESS diag2 PLAYER1"); else alert("SUCCESS diag2 PLAYER2");}
else if
((document.getElementById("1").value === document.getElementById("4").value) &&
(document.getElementById("4").value === document.getElementById("7").value)) 
{if(count == 1) alert("SUCCESS col1 PLAYER1"); else alert("SUCCESS col1 PLAYER2");}
else if
((document.getElementById("2").value === document.getElementById("5").value) && 
(document.getElementById("5").value === document.getElementById("8").value)) 
{if(count == 1) alert("SUCCESS col2 PLAYER1"); else alert("SUCCESS col2 PLAYER2");}
else if
((document.getElementById("3").value === document.getElementById("6").value) &&
(document.getElementById("6").value === document.getElementById("9").value))
{if(count == 1) alert("SUCCESS col3 PLAYER1"); else alert("SUCCESS col3 PLAYER2");}

}
    function setColor(btn) {
    if(i < 10){
    if(count == 1){
        document.getElementById(btn).style.backgroundColor = "#A95333";
        document.getElementById(btn).innerHTML = "X";
        document.getElementById(btn).value = "X"
        count = 0;
     }
     else 
     {
     	document.getElementById(btn).style.backgroundColor = "#BB8FCE";
        document.getElementById(btn).innerHTML = "O";
        document.getElementById(btn).value = "O"
        count = 1;
     }
     i++;
     if(i > 3){     
        valuechk();
        }
        }
   }