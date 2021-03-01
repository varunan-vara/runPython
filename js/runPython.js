//Variables
document.getElementById("runButton").style.cursor = "not-allowed";
pypyjs.ready().then( function () {
    console.log("Pypy.js ready for use.");
    setTimeout(function() {
        document.getElementById("infoplacer").style.color = "#F8F9FA";
        document.getElementById("infoplacer").innerHTML = "Pypyjs is loaded, and ready for use.";
        document.getElementById("IDE").disabled = false;
        function addToString (stringy) {
            stringplacer += stringy
        }
        function terminalOutput (resulty) {
            const output = document.createElement("p");
            output.className = "outputText";
            output.innerHTML = resulty + "\n";
            output.style.color = "#F8F9FA";

            document.getElementById("terminalbox").appendChild(output);
        }
        var ver = "";
        pypyjs.set("ver", ver);
        pypyjs.exec(
            //Python version
            "import sys\nver = str(sys.version)\nprint 'sys.version:', sys.version"
        ).then(function() {
            return pypyjs.get("ver");
        }).then(function(result) {
            terminalOutput(result);
         })
         document.getElementById("runButton").style.cursor = "pointer";
    }, 1000)
});

var pythonRun = new pypyjs({
    stdout: function (data) {
        
    },
});
