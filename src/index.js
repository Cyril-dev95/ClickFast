// const app = require("express")();

// app.get("/", (req, res) => res.json({ message: "Bonjouuuur :)" }));

// const port = process.env.PORT || 8080;

// app.listen(port, () =>
//   console.log(`app listening on http://localhost:${port}`)
// );

let nombreClics = 0;
let tempsRestant = 5;
let intervalle;
let timerStart = false;

function counting() {

    if (!timerStart) {
        timerStart = true;
        document.getElementById("timer").textContent = `Temps restant : ${tempsRestant} secondes`;

        intervalle = setInterval(() => {
            tempsRestant--;
            document.getElementById("timer").textContent = `Temps restant : ${tempsRestant} secondes`;

            if (tempsRestant <= 0) {
                clearInterval(intervalle);
                alert (`Temps écoulé ! vous avez cliqué ${nombreClics} fois.`);
            }
        }, 1000);
    }

    if (tempsRestant > 0) {
        nombreClics++;
        document.getElementById("nombreClics").textContent = nombreClics;
    }
}

document.getElementById("boutonClic").addEventListener("click", counting);