function sayYes() {
    document.getElementById("dialogue").innerHTML =
        "You chose me too... ❤️<br><br>Then from today on, we're legendary together.";
}

function moveButton() {
    const button = document.querySelector(".no");
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 100;

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}