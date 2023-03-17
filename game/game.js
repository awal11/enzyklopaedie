var grzyby = ['stahu', 'muchom', 'imie', 'rumjan', 'strzelczyk'];
var strony = ['biologia','matematyka', 'miesnie', 'organy', 'chemia'];
var texts = ['mushrooms/boletus.html', 'mushrooms/flyagaric.html','mushrooms/cantharellus.html','mushrooms/parasol.html','mushrooms/magic.html']
var gertexts = ['../../game/pilze/steinpilz.html', '../../game/pilze/fliegenpilz.html', '../../game/pilze/pfifferlinge.html', '../../game/pilze/riesenschirmling.html', '../../game/pilze/magic.html']
var frtexts = ['../../game/champignons/boletus.html', '../../game/champignons/amanite.html', '../../game/champignons/cantharellus.html', '../../game/champignons/lepiote.html', '../../game/champignons/magic.html']


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
    var grzyb = JSON.parse(localStorage.getItem(name));
    var found = grzyb[2];
    console.log(name + " getItem: " + grzyb + " found: " + found);
    var a = document.getElementById(name);
    alert(grzyby)
    alert(name)
    alert(number)

    if (found) {
        a.style.display = "none";
    }
    else { 
        alert(x);
                      
        if ( document.URL.includes("game.html") ) 
     {
        location.replace(texts[number]);
     }
     else if (document.URL.includes('spiel.html'))
     {
        location.replace(gertexts[number]);

     }
     else if (document.URL.includes('jeu.html'))
     {
        location.replace(frtexts[number]);

     }
     else
     {
         alert("japier");

     }
     
        grzyb[2] = true;
        localStorage.setItem(name, JSON.stringify(grzyb));        
    }
};

function init() {
    console.log("init!!!!");

    if (localStorage.getItem('stahu') === null) {
        console.log("nie znaleziono stanu gry, inicjacja stanu");

        shuffle(strony);
        console.log(strony);

        for (var i = 0; i < grzyby.length; i++) {
            var x = Math.floor(Math.random() * 950) + 320;
            var y = Math.floor(Math.random() * 600) + 35;
            console.log(x);
            console.log(y);
            
            var nazwa = grzyby[i];
            var a = document.getElementById(nazwa);
            a.style.width = '100px';
            a.style.height = '100px';
            a.style.position = 'absolute';
            a.style.top = y + 'px';
            a.style.left = x + 'px';
 
            var para = grzyby[i] + '  ' + strony[i]; 
            //zapisz do local storage parę strona:grzyb
            console.log(para);

            var grzyb = [nazwa, [x,y], false];
            localStorage.setItem(nazwa, JSON.stringify(grzyb));
     
        }
    }
    else {
        console.log("gra aktywna");

        for (var i = 0; i < grzyby.length; i++) {
            var grzyb = JSON.parse(localStorage.getItem(grzyby[i]));
            console.log(grzyb);
            
            var nazwa = grzyb[0];
            var wspolrzedne = grzyb[1];
            var found = grzyb[2];

            console.log (grzyb);
            console.log (nazwa);
            console.log (wspolrzedne);
            console.log(found);

            var a = document.getElementById(nazwa);
            if (found) {
             a.style.display = "none";


            } else {
                a.style.width = '100px';
                a.style.height = '100px';
                a.style.position = 'absolute';
                a.style.left = wspolrzedne[0] + 'px';
                a.style.top = wspolrzedne[1] + 'px';    
            }
     
        }
    }

};



function deleteItems() {
    localStorage.clear();
    init();
}
