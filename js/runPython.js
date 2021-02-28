jQuery(window).on("load", function () {
    var stringplacer = "Website has loaded - ";
    pypyjs.exec(
        //Python version
        "import sys\nver = sys.version"
    ).then(function() {
        return pypyjs.get("ver");
    }).then(function(result) {
        stringplacer += result;
    })
    pypyjs.exec(
        //Python platform
        "import sys\nplat = sys.platform"
    ).then(function() {
        return pypyjs.get("plat");
    }).then(function(result) {
        stringplacer += " - Platform: " + result;
    })
    document.getElementById("infoplacer").innerHTML = stringplacer;
});

/*
.runButton:hover {
    cursor: no-drop;
}

^^Implement, with runbutton turning to pointer when loaded
*/



