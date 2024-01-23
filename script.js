let background = document.getElementById("bgImg");
let textarea = document.getElementById("textArea");
let post = document.getElementById("post");
let result = document.getElementById("result");
let center = document.getElementById("center");
let toggles = document.querySelectorAll(".toggleBox");

let arr = Array.from(toggles);


function textColorChange() {
    textarea.style.color = event.target.value;
    // console.log(event.target.value);
}

function changeBackground() {
    let imgSrc = event.target.src;
    textarea.style.backgroundImage = "url(" + imgSrc + ")";

    // console.log(event.target.src);
}

function changeBackgroundColorPurple() {
    // #C600FF

    textarea.style.backgroundColor = "#C600FF";

    // console.log(event.target.style.backgroundColor = "#C600FF");
}

function changeBackgroundColorRed() {
    // #E2013B

    textarea.style.backgroundColor = "#E2013B";

    // console.log(event.target.style.backgroundColor = "#E2013B");
}

function changeBackgroundColorBlack() {
    // Black

    textarea.style.backgroundColor = "black";

    // console.log(event.target.style.backgroundColor = "black");
}

function changeBackgroundColorDefult() {
    // White

    textarea.style.backgroundColor = "white";

    // console.log(event.target.style.backgroundColor = "white");
}

function changeTextBold() {

    let textType = document.getElementById("bold");
    if (textType == document.getElementById("bold")) {
        if (textarea.style.fontWeight === "bold") {
            textarea.style.fontWeight = "normal";
        } else {

            textarea.style.fontWeight = "bold";
        }
    }
    // console.log(textType);
}

function changeTextItalic() {

    let textType = document.getElementById("italic");
    if (textType == document.getElementById("italic")) {
        if (textarea.style.fontStyle === "italic") {
            textarea.style.fontStyle = "normal";
        } else {

            textarea.style.fontStyle = "italic";
        }
    }
    // console.log(textType);
}

function changeTextUnderline() {

    let textType = document.getElementById("underline");
    if (textType == document.getElementById("underline")) {
        if (textarea.style.textDecoration === "underline") {
            textarea.style.textDecoration = "none";
        } else {

            textarea.style.textDecoration = "underline";
        }
    }
    // console.log(textType);
}



background.addEventListener('click', () => {
    document.getElementById("toggleArrow").style.display = "flex";
    document.getElementById("bgImg").style.display = "none";
    document.getElementById("backgroundOpt").style.display = "flex";

    // console.log("Toggle On");
})

document.getElementById("toggleArrow").addEventListener('click', () => {
    document.getElementById("backgroundOpt").style.display = "none";
    document.getElementById("bgImg").style.display = "flex";
    document.getElementById("toggleArrow").style.display = "none";

    // console.log("Toggle Off");
})