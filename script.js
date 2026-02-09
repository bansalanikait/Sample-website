function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* Boot loader */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});

/* Neon flicker logo */
setInterval(() => {
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.style.opacity = Math.random() > 0.1 ? "1" : "0.5";
    }
}, 150);

const terminalLines = [
    "> Initializing SQC Robotics Core...",
    "> Loading Embedded Systems Module...",
    "> Calibrating Sensors...",
    "> Booting AI & Vision Stack...",
    "> Connecting IoT Devices...",
    "> System Status: ONLINE",
    "",
    "> Welcome to SQC Robotics Club"
];

let lineIndex = 0;
let charIndex = 0;
const speed = 40;

function typeTerminal() {
    if (lineIndex < terminalLines.length) {
        const line = terminalLines[lineIndex];
        if (charIndex < line.length) {
            document.getElementById("terminal-text").textContent += line.charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, speed);
        } else {
            document.getElementById("terminal-text").textContent += "\n";
            charIndex = 0;
            lineIndex++;
            setTimeout(typeTerminal, 400);
        }
    }
}

/* Start typing when page loads */
window.addEventListener("load", typeTerminal);



