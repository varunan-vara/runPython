//Variables
document.getElementById("IDE").spellcheck = "false";
document.getElementById("runButton").style.cursor = "not-allowed";

//Define some variables
var outputwrap = document.getElementById("terminalbox");
function outputLine (data) {
    var outputy = document.createElement("p");
    outputy.className = "outputText";
    outputy.innerHTML = String(data);

    //Add new line to terminal
    outputwrap.appendChild(outputy);
    var br = document.createElement("br");
    outputwrap.appendChild(br);
}

function outputErr (data) {
    document.getElementById("runButton").innerHTML = "Error";
    var outputy = document.createElement("p");
    outputy.className = "errText";
    outputy.innerHTML = String(data);

    //Add new line to terminal
    outputwrap.appendChild(outputy);
    setTimeout(function(){document.getElementById("runButton").innerHTML = "Run Code"}, 2000)
}

//Sort out errors:
if (typeof console != "undefined") {
    if (typeof console.error != "undefined") {
        console.alterror = console.error;
    } else {
        console.alterror = function () {}
    }
}
console.error = function (message) {
    console.alterror(message);
    outputErr(message);
}

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
         outputLine("Interpreter Ready to print")
    }, 1000)
});

document.getElementById("runButton").addEventListener("click", function (){
    var pythonRun = new pypyjs({
        stdout: function (data) {
            outputLine(data);
            document.getElementById("runButton").innerHTML = "Run Code";
        },
        stdin: function () {
            runCode();
        },
        stderr: function (data) {
            outputErr(data);
            document.getElementById("runButton").innerHTML = "Run Code";
        },
    });
    pythonRun.ready().then(function(){
        document.getElementById("runButton").innerHTML = "Running...";
        setTimeout(function(){
            var inputy = document.getElementById("IDE").value;
            return pythonRun.exec(inputy);
        }, 500)
    });
});