var grzyby = ['stahu', 'mario', 'imie', 'rumjan', 'halo'];

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

    } else {
        a.style.display = "none";

    }
};



function init() {
    console.log("init!!!!");
    for (var i = 0; i < grzyby.length; i++) {

        var x = Math.floor(Math.random() * 1150) + 320;
        var y = Math.floor(Math.random() * 670) + 35;

        console.log(x);
        console.log(y);
        
        var a = document.getElementById(grzyby[i]);
        var item = localStorage.getItem(grzyby[i]);
        var itemFound = item === 'find!';
        a.style.width = '420px';
        a.style.height = '420px';
        a.style.position = 'absolute';
        a.style.top = '20%';
        a.style.left = '50%';
        console.log(" getItem: " + item + " getItem: " + itemFound);
        if (itemFound) {
            a.style.display = "none";
        }
    } 


};

function deleteItems() {
    localStorage.clear();
}
