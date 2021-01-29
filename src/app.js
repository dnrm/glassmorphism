const toggle = document.querySelector('#toggle');

let localAppearance = localStorage.getItem("dnrm-appearance");

window.onload = () => {
    if (localAppearance == "black") {
        document.body.style.setProperty("--primary", "white");
        document.body.style.setProperty("--background", "black");
        document.body.style.setProperty("--translucent-background", "rgba(0, 0, 0, 0.25)");
    } else {
        document.body.style.setProperty("--primary", "black");
        document.body.style.setProperty("--background", "white");
        document.body.style.setProperty("--translucent-background", "rgba(255, 255, 255, 0.25)");
    }
}

toggle.addEventListener('click', () => {
    if (localAppearance == "black") {
        document.body.style.setProperty("--primary", "black");
        document.body.style.setProperty("--background", "white");
        document.body.style.setProperty("--translucent-background", "rgba(255, 255, 255, 0.25)");
        localStorage.setItem("dnrm-appearance", "white");
        localAppearance == "white";
    } else if (localAppearance == "white") {
        document.body.style.setProperty("--primary", "white");
        document.body.style.setProperty("--background", "black");
        document.body.style.setProperty("--translucent-background", "rgba(0, 0, 0, 0.25)");
        localStorage.setItem("dnrm-appearance", "black");
        localAppearance == "black";
    }
});