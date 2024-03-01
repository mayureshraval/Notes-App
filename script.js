// initializting dom variables
const card = document.querySelector('.card');
const createNoteBtn = document.querySelector('.createNoteBtn');

// showing previous notes.
showNotes();

function createNote() {
    // The Parent Note Element container
    let note = document.createElement('div');
    note.classList.add('note');
    // The text input box for note
    let noteInput = document.createElement('textarea');
    noteInput.classList.add('noteInput');
    noteInput.setAttribute('onchange','saveNoteText(event)');
    // The delete button to remove note
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.setAttribute('onclick','deleteNote(event)');
    // The image for delete button.
    let trashImg = document.createElement('img');
    trashImg.setAttribute('src','trash.png');
    // some fun animation for trashbutton from animate.style
    trashImg.classList.add('animate__animated');
    trashImg.classList.add('animate__swing');
    // appending the image to the delete button.
    deleteBtn.append(trashImg);

    // appending all the elements into note
    note.append(noteInput,deleteBtn);
    // appending note into card
    card.append(note);

    // saving notes once they have been created.
    saveNotes();
}
// defining a function to delete a note
function deleteNote(e) {
    // first one is matching the delete button by className
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    // second one is matching the element by tag name and since its appended in the button it has to move one level higher to delete the note.
    else if(e.target.tagName='img'){
        e.target.parentElement.parentElement.remove();
    }
    // updating notes if they have been deleted
    saveNotes();
}
// saving notes
function saveNotes() {
    localStorage.setItem('notes',card.innerHTML);
}
// showing previous notes
function showNotes() {
    // if notes exist then only show notes.
    if (localStorage.getItem('notes')) {
        card.innerHTML=localStorage.getItem('notes');
    }
}
// so whenever something is entered into the textarea it will trigger an onchange and this function will run and now we will just replace that elements innerHTML to the data which is being entered.
function saveNoteText(e) {
    e.target.innerHTML=e.target.value;
    saveNotes();
}