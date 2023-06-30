const outputEl = document.querySelector('#note-output');

function outputNotes() {
  fetch('/notes')
    .then(res => res.json())
    .then(data => {

      if (data.length) outputEl.innerHTML = '';

      data.forEach(noteObj => {
        outputEl.insertAdjacentHTML('beforeend', `
        <div class="note p-4 mb-3">
          <p>ID: ${noteObj.id}</p>
          <h3>${noteObj.text}</h3>
        </div>
        `);
      })
    })
}

outputNotes();