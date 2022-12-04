var grzyby = ['stahu', 'mario', 'imie', 'rumjan', 'halo'];

function animateScript(name) {
    var item = localStorage.getItem(name);
    var itemFound = item === 'find!';
    console.log(name + " getItem: " + item + " getItem: " + itemFound);

    var a = document.getElementById(name);
    if (!itemFound) {
        a.style.width = '120px';
        a.style.height = '120px';
        a.style.position = 'absolute';
        a.style.top = '50%';
        a.style.left = '50%';
        localStorage.setItem(name, 'find!');

    } else {
        a.style.visibility = "hidden";

    }
};

function init() {
    console.log("init!!!!");
    for (var i = 0; i < grzyby.length; i++) {

        var item = localStorage.getItem(grzyby[i]);
        var itemFound = item === 'find!';
        console.log(" getItem: " + item + " getItem: " + itemFound);
        if (itemFound) {
            var a = document.getElementById(grzyby[i]);
            a.style.visibility = "hidden";
        }

    }


};

function deleteItems() {
    localStorage.clear();
}

</script >