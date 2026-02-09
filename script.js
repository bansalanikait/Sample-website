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
    "> Boot sequence initiated...",
    "> Initializing SQC Robotics Core v1.0",
    "> Checking system integrity... OK",
    "",
    "> Loading Embedded Systems Module",
    "  - Microcontrollers: Arduino / ESP32",
    "  - Motor Drivers: ONLINE",
    "  - Sensors: Calibrated",
    "",
    "> Loading AI & Vision Stack",
    "  - OpenCV modules loaded",
    "  - Neural inference engine ready",
    "  - Camera feed: ACTIVE",
    "",
    "> Initializing IoT Network",
    "  - MQTT Broker: CONNECTED",
    "  - Cloud Dashboard: SYNCED",
    "",
    "> Competition Mode Configuration",
    "  - Autonomous Navigation: ENABLED",
    "  - Real-time Decision Making: ENABLED",
    "  - Fail-safe Protocols: ACTIVE",
    "",
    "> Training & Development Programs",
    "  - Robotics Bootcamp: AVAILABLE",
    "  - AI & ML Workshops: AVAILABLE",
    "  - Hardware Hack Sessions: SCHEDULED",
    "",
    "> System Status: ALL SYSTEMS OPERATIONAL",
    "> Welcome to SQC Robotics Club",
    "> Type 'join_sqc' to begin your journey"
];

let lineIndex = 0;
let charIndex = 0;
let started = false;

const terminal = document.getElementById("terminal-text");
const cursor = document.getElementById("cursor");

function typeTerminal() {
    if (lineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[lineIndex];

    if (charIndex < currentLine.length) {
        terminal.textContent += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeTerminal, 35);
    } else {
        terminal.textContent += "\n";
        charIndex = 0;
        lineIndex++;
        setTimeout(typeTerminal, 300);
    }
}

const terminalSection = document.getElementById("terminal");

window.addEventListener("scroll", () => {
    const rect = terminalSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && !started) {
        started = true;
        typeTerminal();
    }
});




