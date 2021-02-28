document.write(`<script src="script.js" type="text/javascript" />`)
//Getting Values from IDE input
var inputval = document.getElementById("IDE").value

//run Function
function runButtonClick() {
    console.log(inputval.replace(/\n/g,'\\n').replace(/\t/,'\\t'));
}

//IDE Annotations
var inputvalfull = document.getElementById("IDE")

var annotate1 = [
    "print",
    "def",
    "+",
    "-",
    "%",
    "*",
    "/",
    "import",
    "split",
    "str",
    "int",
    "float",
];

var annotate2 = /1234567890./

/*
function annotate() {
    const words = inputvallfull.value.split(" ");
    inputvalfull.value = "";
    words.forEach((word) => {
        const span = div.appendChild(document.createElement("span"));
        span.textcontent = word + " ";
        if (annotate1.indexOf(word) > -1) span.classList.add("annotatecolour-1");
        else span.classList.add("normaltext");
    })
}
*/


pypyjs.exec