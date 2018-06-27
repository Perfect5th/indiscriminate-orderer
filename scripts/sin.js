const FRAMES = 100;

window.addEventListener('DOMContentLoaded', () => {
  let dateInput = document.getElementById('date-input');
  dateInput.value = (new Date()).toISOString().slice(0, 10);

  let form = document.getElementById('actual-form');
  let results = document.getElementById('results');

  form.onsubmit = e => {
    e.preventDefault();

    form.style.display = 'none';
    results.style.display = 'block';

    let randGen = getNumber(FRAMES);
    let num = document.getElementById('days-num');
    let redo = document.getElementById('redoButton');
    redo.disabled = true;
    num.style.color = '#000';

    for (let i = 1; i <= FRAMES; i++) {
      setTimeout(() => {
        let result = randGen.next();

        num.textContent = result.value.toString();

        if (i >= FRAMES) {
          redo.disabled = false;
          num.style.color = '#0bcc0d';
          alert('I hate you');
        }
      }, 2 * i**2);
    }

    /*let interval = setInterval(() => {
      let result = randGen.next();

      if (result.done) {
        clearInterval(interval);
        redo.disabled = false;
        return;
      } else {
        num.textContent = result.value.toString();
      }
    }, 20);*/
  };

  let redo = document.getElementById('redoButton');
  redo.onclick = e => {
    form.style.display = 'block';
    results.style.display = 'none';
  };
});

function* getNumber(max) {
  for (let i = 0; i < max; i++) {
    let randInt = Math.floor(Math.random() * (1000 - 30) + 30);
    yield randInt;
  }
}
