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

    let bold = document.getElementById(`bold`)
    let textType = bold;
    if (textType == bold) {
        if (textarea.style.fontWeight === "bold") {
            textarea.style.fontWeight = "normal";
        } else {
            textarea.style.fontWeight = "bold";
        }
    }
    // console.log(textType);
}

function changeTextItalic() {

    let italic = document.getElementById(`italic`)
    let textType = italic;
    if (textType == italic) {
        if (textarea.style.fontStyle === "italic") {
            textarea.style.fontStyle = "normal";
        } else {
            textarea.style.fontStyle = "italic";
        }
    }
    // console.log(textType);
}

function changeTextUnderline() {

    let underline = document.getElementById(`underline`)
    let textType = underline;
    if (textType == underline) {
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

    console.log("Toggle On");
})

document.getElementById("toggleArrow").addEventListener('click', () => {
    document.getElementById("backgroundOpt").style.display = "none";
    document.getElementById("bgImg").style.display = "flex";
    document.getElementById("toggleArrow").style.display = "none";

    // console.log("Toggle Off");
})

// post.addEventListener('click', () => {
//     let inputText = textarea.value;

//     result.innerHTML += `<p> ${inputText} </p>
//     <div class="btmBar">
//     <span id="like"><i class="fa-regular fa-thumbs-up"></i></span>
//     <span id="comment"><i class="fa-regular fa-comment"></i></span>
// </div>`;

//     textarea.value = "";
// })


post.addEventListener('click', () => {
    let inputText = textarea.value;

    textarea.readOnly = true;
    textarea.style.height = "300px";
    center.style.height = "400px";
    document.querySelector(".tagOption").style.display = "none"
    document.querySelector(".backgroundPicker").style.display = "none"
    document.getElementById("post").style.display = "none"
    document.querySelector(".btmBar").style.display = "flex"
})


// cancel.addEventListener("click", () => {
//     // document.getElementById("backgroundOpt").style.display = "flex";
//     // document.getElementById("bgImg").style.display = "none";
//     // document.getElementById("toggleArrow").style.display = "flex";
//     document.getElementById("toggleArrow").addEventListener('click', () => {
//         document.getElementById("backgroundOpt").style.display = "none";
//         document.getElementById("bgImg").style.display = "flex";
//         document.getElementById("toggleArrow").style.display = "none";

//         // console.log("Toggle Off");
//     })


//     background.addEventListener('click', () => {

//         document.getElementById("toggleArrow").style.display = "flex";
//         document.getElementById("bgImg").style.display = "none";
//         document.getElementById("backgroundOpt").style.display = "flex";

//         // console.log("Toggle On");
//     })
//     document.querySelector(".tagOption").style.display = "flex";
//     document.querySelector(".backgroundPicker").style.display = "block";
//     document.getElementById("post").style.display = "block";
//     document.querySelector(".btmBar").style.display = "none";
//     textarea.style.height = "30%";
//     center.style.height = "100%";
//     document.getElementById("backgroundOpt").remove();

//     textarea.value = "";
//     textarea.readOnly= false
// });

cancel.addEventListener("click", () => {
    document.querySelector(".tagOption").style.display = "flex";
    document.querySelector(".backgroundPicker").style.display = "block";
    document.getElementById("post").style.display = "block";
    document.querySelector(".btmBar").style.display = "none";
    textarea.style.height = "30%";
    center.style.height = "100%";
    document.getElementById("backgroundOpt").remove();

    // Reset background options to default
    document.getElementById("toggleArrow").style.display = "none";
    document.getElementById("bgImg").style.display = "flex";
    // document.getElementById("backgroundOpt").style.display = "none";

    // Clear textarea content and make it editable
    textarea.value = "";
    textarea.readOnly = false;
});


