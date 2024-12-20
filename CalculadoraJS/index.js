const display = document.getElementById('pantalla');

let reiniciarDatos = false;

display.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    calcular();
    event.preventDefault();
  }
});

function agregarValor(value) {
  if (reiniciarDatos) {
    display.value = '';
    reiniciarDatos = false;
  }
  display.value += value;
}

function borrarDatos() {
  display.value = '';
  reiniciarDatos = false;
}

function calcular() {
  try {

    if (display.value.trim() === '') {
      display.value = 'Introduce una operación';
      reiniciarDatos = true;
      return;
    }

    if (display.value.includes('/0')) {
      display.value = 'No se puede dividir por cero';
      reiniciarDatos = true;
      return;
    }

    display.value = eval(display.value);
    reiniciarDatos = true;

  } catch (error) {
    display.value = 'Error';
    reiniciarDatos = true;
  }
}