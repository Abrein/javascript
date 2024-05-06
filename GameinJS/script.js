const hero = document.querySelector(".hero");
const villian = document.querySelector(".villian");

function jump() {
    if (!hero.classList.contains("animate")) {
        hero.classList.add("animate");
        villian.style.animation = "move 1s infinite linear";
    }
    setTimeout(function() {
        hero.classList.remove("animate");
    }, 200);
}

document.addEventListener("keydown", function() {
    jump();
})

// Check if the hero is alive
let isAlive = setInterval(function() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
    let heroHeight = parseInt(window.getComputedStyle(hero).getPropertyValue("height"));
    let heroWidth = parseInt(window.getComputedStyle(hero).getPropertyValue("width"));

    let villianLeft = parseInt(window.getComputedStyle(villian).getPropertyValue("left"));
    let villianTop = parseInt(window.getComputedStyle(villian).getPropertyValue("top"));
    let villianHeight = parseInt(window.getComputedStyle(villian).getPropertyValue("height"));
    let villianWidth = parseInt(window.getComputedStyle(villian).getPropertyValue("width"));

    // Check for collision
    if (
        heroLeft < villianLeft + villianWidth &&
        heroLeft + heroWidth > villianLeft &&
        heroTop < villianTop + villianHeight &&
        heroTop + heroHeight > villianTop
    ) {
        villian.style.animation = "none";
        alert("Game Over, Press spacebar to restart");
    }
}, 10);
