var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let addNotes = document.getElementById("addNotes");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addNotes.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addNotes.value = "";
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card">
            <h5 class="h5">Note ${index + 1}</h5>
            <p class="para">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)">Delete Notes</button>
        </div>
        `
    });
    let notesElement = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElement.innerHTML = html;
    } else {
        notesElement.innerHTML = `<h3>Pls Add Notes</h3>`
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}