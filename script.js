function losuj1(){//dodawanie
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a+b>100);

    document.getElementById('a').innerHTML = a+" + "+b;
    console.log(a+b);
}
function sprawdz1(){//dodawanie
    x = document.getElementById('d').value;
    if(x==a+b)
        document.getElementById('a').innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
    else
    document.getElementById('a').innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
}

function losuj2(){//odejmowanie
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a+b>100 || a<b);

    document.getElementById('a').innerHTML = a+" - "+b;
    console.log(a-b);
}
function sprawdz2(){//odejmowanie
    x = document.getElementById('d').value;
    if(x==a-b)
        document.getElementById('a').innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
    else
    document.getElementById('a').innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
}

function losuj3(){//mnozenie
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a*b>100);

    document.getElementById('a').innerHTML = a+" * "+b;
    console.log(a*b);
}
function sprawdz3(){//mnozenie
    x = document.getElementById('d').value;
    if(x==a*b)
        document.getElementById('a').innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
    else
    document.getElementById('a').innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
}

function losuj4(){//dzielenie
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    } while(a%b!=0 || b>a || b==0);

    document.getElementById('a').innerHTML = a+" / "+b;
    console.log(a/b);
}
function sprawdz4(){//dzielenie
    x = document.getElementById('d').value;
    if(x==a/b)
        document.getElementById('a').innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
    else
    document.getElementById('a').innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
}
var a=0;
var b=0;
var c=0;
function losuj6(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
        c=Math.floor(Math.random()*101);
    }
    while(a+b+c>300);
    var tab = new Array(a,b,c);
    tab.sort();
    console.log(tab);

    document.getElementById('a').innerHTML = a+" &nbsp; "+b+" &nbsp; "+c;


}
function sprawdz6(){
    var x = parseInt(document.getElementById("b1").value);
    var y = parseInt(document.getElementById("b2").value);
    var z = parseInt(document.getElementById("b3").value);
   console.log(x);
 
   console.log(y);

   console.log(z);

    if(a<c&&a<b){
        if(c<b){
            if(x<y&&x<z&&y<z &&a==x&&y==c&&z==b){
                document.getElementById("wynikS").innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
            }
            else{
                document.getElementById("wynikS").innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
            }
        }
        else if(b<c){
            if(x<y&&x<z&&y<z &&x==a&&y==b&&z==c){
                document.getElementById("wynikS").innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
            }
            else{
                document.getElementById("wynikS").innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
            }
        }
    }
    else if(b<c&&b<a){
        if(a<c){
            if(x<y&&x<z&&y<z &&x==b&&y==a&&z==c){
                document.getElementById("wynikS").innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
            }
            else{
                document.getElementById("wynikS").innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
            }
        }
        else if(c<a){
            if(x<y&&x<z&&y<z &&x==b&&y==c&&z==a){
                document.getElementById("wynikS").innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
            }
            else{
                document.getElementById("wynikS").innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
            }
        }
    }
    else if(c<b&&c<a){
        if(a<b){
            if(x<y&&x<z&&y<z &&x==c&&y==a&&z==b){
                document.getElementById("wynikS").innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
            }
            else{
                document.getElementById("wynikS").innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
            }
        }
        else if(b<a){
            if(x<y&&x<z&&y<z &&x==c&&y==b&&z==a){
                document.getElementById("wynikS").innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
            }
            else{
                document.getElementById("wynikS").innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
            }
        }
    }
       
}
//rzym
var p;
function losujR(){
    var tab = new Array( 
         'I',
         'II',
         'III',
         'IV',
         'V',
        'VI',
         'VII',
         'VIII',
         'IX',
          'X',
          'XI',
          'XII',
          'XIII',
          'XIV',
          'XV',
          'XVI',
          'XVII',
          'XVIII',
          'XIX',
          'XX',
          'XXI',
          'XXII',
          'XXIII',
          'XXIV',
          'XXV',
          'XXVI',
          'XXVII',
          'XXVIII',
          'XXIX',
          'XXX',
          'XXXI',
          'XXXII',
          'XXXIII',
          'XXXIV',
          'XXXV',
          'XXXVI',
          'XXXVII',
          'XXXVIII',
          'XXXIX',
          'XL',
          'XLI',
          'XLII',
          'XLIII',
          'XLIV',
          'XLV',
          'XLVI',
          'XLVII',
          'XLVIII',
          'XLIX',
          'L',
          'LI',
          'LII',
           'LIII',
          'LIV',
          'LV',
          'LVI',
          'LVII',
          'LVIII',
          'LIX',
          'LX',
          'LXI',
          'LXII',
          'LXIII',
          'LXIV',
          'LXV',
          'LXVI',
          'LXVII',
          'LXVIII',
          'LXIX',
          'LXX',
          'LXXI',
          'LXXII',
          'LXXIII',
          'LXXIV',
          'LXXV',
          'LXXVI',
          'LXXVII',
          'LXXVIII',
          'LXXIX',
          'LXXX',
          'LXXXI',
          'LXXXII',
          'LXXXIII',
          'LXXXIV',
          'LXXXV',
          'LXXXVI',
          'LXXXVII',
          'LXXXVIII',
          'LXXXIX',
          'XC',
          'XCI',
          'XCII',
          'XCIII',
          'XCIV',
          'XCV',
          'XCVI',
          'XCVII',
          'XCVIII',
          'XCIX',
           'C', );
           p=Math.floor(Math.random()*101);
           var h= tab[p];
           document.getElementById("a").innerHTML=h;
}
function sprawdzR(){
    var x=document.getElementById("d").value;
    if(x==p+1){
        document.getElementById('a').innerHTML = 'SUPER! POPRAWNA ODPOWIEDŹ';
    }
    else{
        document.getElementById('a').innerHTML = 'ZŁA ODPOWIEDŹ, SPRÓBUJ PONOWNIE';
    }
}
function zegarek(){
    var dzisiaj =new Date();
    var dzien=dzisiaj.getDate();
    var miesiac=dzisiaj.getMonth();
    var rok=dzisiaj.getFullYear();

    var godzina=dzisiaj.getHours();
    if(godzina<10)godzina="0"+godzina;
    var minuta=dzisiaj.getMinutes();
    var sekunda=dzisiaj.getSeconds();
    if(sekunda<10)sekunda="0"+sekunda;
    document.getElementById("timer").innerHTML=dzien+"/"+miesiac+"/"+rok+"--"+godzina+"/"+minuta+"/"+sekunda;

setTimeout("zegarek()",1000);
}