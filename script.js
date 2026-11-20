

const note = document.querySelector('#notes-container')
    console.log(note);
    
const nouvelle = document.querySelector('#nouvelle-note')
const button = document.querySelectorAll("button")
      console.log(button);
      
const resultat = document.querySelector('#resultat')
const surlig = document.querySelector('#surlig ner')


function ajoutnote() {
    button.forEach(element => {
        element.addEventListener('click'  , () => {
                note.classList.toggle("bg-yellow-200")
        })

    });
    
    const note = document.createElement('p')
    console.log(note);
    note.textContent = ""
   



}
ajoutnote()
     


