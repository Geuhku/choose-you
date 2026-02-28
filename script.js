<script>
let girlName ="Joey";
let text = `In a world of Truth and Ideals...
I found someone legendary.

Joey... can I choose you? ❤️`;

let i = 0;
let speed = 40;

function startExperience() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("bg-music").play();
    typeWriter();
}

function typeWriter() {
    if (i < text.length) {
        document.getElementById("dialogue").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function sayYes() {
    let ball = document.getElementById("pokeball");
    ball.style.display = "block";
    ball.style.animation = "drop 1s forwards";

    // After drop, start shakes
    setTimeout(() => shakeBall(ball, 1), 1200);
}

function shakeBall(ball, count) {
    if (count <= 3) {
        ball.classList.add("shake");

        setTimeout(() => {
            ball.classList.remove("shake");
            setTimeout(() => shakeBall(ball, count + 1), 600);
        }, 500);

    } else {
        captureSuccess(ball);
    }
}

function captureSuccess(ball) {
    document.body.classList.add("flash");

    setTimeout(() => {
        document.body.classList.remove("flash");
        document.getElementById("saving").style.display = "flex";
    }, 600);

    setTimeout(() => {
        document.getElementById("saving").innerHTML =
        `Saving...<br>Joey was saved successfully! 💖`;
    }, 2500);

    setTimeout(() => {
        document.getElementById("saving").style.display = "none";
        document.getElementById("pokedex").style.display = "flex";
    }, 4500);
}

function moveButton() {
    const button = document.querySelector(".no");
    button.style.position = "absolute";
    button.style.left = Math.random() * window.innerWidth + "px";
    button.style.top = Math.random() * window.innerHeight + "px";
}
</script>