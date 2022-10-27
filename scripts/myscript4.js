let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro = null;

const $d = document,
  $segundos = $d.querySelector("#segundos"),
  $minutos = $d.querySelector("#minutos"),
  $horas = $d.querySelector("#horas"),
  $contenedorBtn = $d.querySelector(".button-contenedor");

function start() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }
  $horas.innerHTML = horas.toString().padStart(2, "0");
  $minutos.innerHTML = minutos.toString().padStart(2, "0");
  $segundos.innerHTML = segundos.toString().padStart(2, "0");
}

function setAllZero() {
  segundos = 0;
  minutos = 0;
  horas = 0;
  $segundos.innerHTML = segundos.toString().padStart(2, "0");
  $minutos.innerHTML = minutos.toString().padStart(2, "0");
  $horas.innerHTML = horas.toString().padStart(2, "0");
}

$contenedorBtn.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "start":
      if (!cronometro) {
        cronometro = setInterval(start, 1000);
        e.target.textContent = "Stop";
      } else {
        clearInterval(cronometro);
        cronometro = null;
        e.target.textContent = "continue";
      }
      break;
    case "reset":
      if (cronometro) clearInterval(cronometro);
      setAllZero();
      cronometro = null;
      e.target.nextElementSibling.textContent = "Start";
  }
});
