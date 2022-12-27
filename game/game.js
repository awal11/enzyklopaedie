var stahu = ['stahu',  [150,200]];
var mario = ['mario', [100,200]];
var imie = ['imie', [400, 300]];
var rumjan = ['rumjan', [500, 400]];
var strzelczyk = ['strzelczyk', [600, 500]];

var grzyby = [stahu, mario, imie, rumjan, strzelczyk];



var strony = ['biologia','matematyka', 'miesnie', 'organy', 'chemia'];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }



function animateScript(name) {
    var item = localStorage.getItem(name);
    var itemFound = item === 'find!';
    console.log(name + " getItem: " + item + " getItem: " + itemFound);

    var a = document.getElementById(name);
    if (!itemFound) {
        a.style.width = '420px';
        a.style.height = '420px';
        a.style.position = 'absolute';
        a.style.top = '20%';
        a.style.left = '50%';
        localStorage.setItem(name, 'find!');
    }
    else {
        a.style.display = "none";

    }
};




function init() {
    console.log("init!!!!");


    //todo dodac warunek jesi: localstorage jest pusty
    if (localStorage.getItem('stahu') === null) {
        console.log("nie znaleziono stanu gry, inicjacja stanu");

        //todo dla kazdego grzyba - wylosuj jedną stronę
        shuffle(strony);
        console.log(strony);

        for (var i = 0; i < grzyby.length; i++) {
            var x = Math.floor(Math.random() * 950) + 320;
            var y = Math.floor(Math.random() * 600) + 35;
            console.log(x);
            console.log(y);
            
            var grzyb = grzyby[i];
            var nazwa = grzyb[0];
            var wspolrzedne = grzyb[1];
            console.log (grzyb);
            console.log (nazwa);
            console.log (wspolrzedne);
            var a = document.getElementById(nazwa);
            var item = localStorage.getItem(nazwa);
            var itemFound = item === 'find!';
            a.style.width = '100px';
            a.style.height = '100px';
            a.style.position = 'absolute';
            wspolrzedne[0] = x;
            wspolrzedne[1] = y;
            a.style.top = y + 'px';
            a.style.left = x + 'px';
            console.log(" getItem: " + item + " getItem: " + itemFound);
            if (itemFound) {
                a.style.display = "none";
            }
        } 
    
        for (var i = 0; i < grzyby.length; i++) {
        var para = grzyby[i][0] + '  ' + strony[i]; 
         //zapisz do local storage parę strona:grzyb
         console.log(para);
        }
    }
    else {
        console.log("gra aktywna");

        //else pobierasz z localstorage parę strona:grzyb
    // sprawdzasz czy jestes na pobranej stronie
    }


};



function deleteItems() {
    var x = (Math.floor(Math.random() * 950) + 320 + 'px');
var y = Math.floor(Math.random() * 600) + 35;

    localStorage.clear();
    init();

}
