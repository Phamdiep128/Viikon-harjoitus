// tehtävä1
function btn1() {
  var number1 = document.getElementById('luku1').value;
  if (number1 % 2 ==0 && number1>0) {
    var i;
    var text ="";
    for (let i = 2; i<number1; i+=2) {
     text += i + " " ;
    document.getElementById("tulos1").innerHTML = text;
  }} else {
    alert('tämä on pariton numero');
  }  
  };


  //tehtävä 2

  function btn2() {
    var number2 = document.getElementById('luku2').value;
    
    
    var number2 = String(number2);
    var a = number2.split("");
    var text = ""
   for (let index = 0; index < a.length; index++) {
    text += a[index] +"Ö";


     document.getElementById("tulos2").innerHTML = text;
     
   }
    };


  //tehtävä 3

  function btn3(){
    var number3 = document.getElementById('luku3').value;
    var a2 = new RegExp("ö");
    var a3 = a2.test(number3);

    if(a3){
      document.getElementById("tulos3").innerHTML = "On";
    }else{
      document.getElementById("tulos3").innerHTML = "Ei ole";
    }
  };


  //tehtävä 4

  function btn4(){

    var number4 = document.getElementById('luku4').value;
    var parse = parseInt(number4);
    var laske = 1 ;

    for (let i = 1; i <= number4; i++) {
    laske *=i ;
      
    }

    document.getElementById("tulos4").innerHTML = "Luvun" +" "+ number4 +" " + "kertoma on"+" "+ laske;
  }

  // tehtävä 5

  function btn5(){
    var num5 = "";
  for (var i = 1; i <=100; i++) {
    
    
    if(i % 3 == 0 && i % 5 == 0){
      num5 += "HipHeijaa ";
    }else if(i % 5 == 0){
      num5 += "Heijaa ";
    }else if(i % 3 == 0 ){
      num5 += "Hip "
    }else{
      num5+= i + " ";
    }

    document.getElementById("tulos5").innerHTML = num5;
  }
  }  


  // tehtävä 6

  function btn6(){
    var num6 = " ";

    for (var i = 1;  i <= 10; i++) {
     var ensim = num6 += i + " ";
      
    }
    document.getElementById("tulos6").innerHTML = ensim;
  }

  // tehtävä 7

  function btn7(){
    var num7 = 0;
    for (var index = 1; index <= 10; index++) {
     num7 += index;
      
    }
    document.getElementById("tulos7").innerHTML = num7;
  }

  // tehtävä 8

  function btn8 (){
    var num8 = document.getElementById('luku8').value;
    var num8a = document.getElementById('luku8a').value;
    var yht = num8;
    for (var i = 1;  i < num8a; i++) {
     yht *= num8;
     
      
    }
    document.getElementById('tulos8').innerHTML = yht;
  }

  // tehtävä 9

  function btn9(){
    var num91 = parseInt(document.getElementById('te9a').value);
    var num92 = parseInt(document.getElementById('te9b').value);
    var num93 = parseInt(document.getElementById('te9c').value);
    var num94 = parseInt(document.getElementById('te9d').value);
    var num95 = parseInt(document.getElementById('te9e').value);
    var max = Math.max(num91, num92, num93,num94,num95);
    var min = Math.min(num91, num92, num93,num94,num95);
    document.getElementById('tulos9').innerHTML =  'suurin arvo on' +' ' + max+' ' + 'pienin arvo on' +' '+min ;
   
  }

  // tehtävä 11

  function btn11(){
    var num11a = document.getElementById('luku11a').value;
    var num11b = document.getElementById('luku11b').value;
    var array = [];
      for (var n = num11a; n <= num11b; n++){
       
          array.push(n);
        
          var pari = array.filter(number => number%2 ==0);
          var pariton = array.filter(number => number%2 !==0);
          
          var sumpari = 0;
          var sumpariton = 0;

          for(var k in pari){
            sumpari += pari[k]
          }
          for(var b in pariton){
            sumpariton += pariton[b]
          }
    }
      document.getElementById('tulos11').innerHTML = 
      'Parilliset numerot:' + ' '+ pari + 'ja niiden summa:'+ sumpari + 
      'Parittomat luvut:' + ' ' + pariton + 'ja niiden summa:'+ sumpariton
    }
   
    
  