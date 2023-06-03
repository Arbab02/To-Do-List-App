let mytxt1 = document.getElementById('mytxt1')
let mytxt2 = document.getElementById('mytxt2')
// let mytxt3 = document.getElementById('mytxt3')
let btn = document.getElementById('add')
let box = document.getElementById('box')

let myNotes = [];

btn.addEventListener('click', ()=>{
    console.log(mytxt1.value)
    let notes = document.createElement('div');
    notes.style.boxShadow = '1px 1px 7px -1px black' 
    notes.style.display= 'inline-block' 
    notes.style.margin = '10px 0px 0px 10px'
    notes.style.padding = '0rem 1rem '
    notes.style.borderRadius = '4px'
    notes.style.width = '15rem'
    notes.style.overflowWrap = 'break-word'


    box.appendChild(notes)
    let heading = document.createElement('h1');
    notes.appendChild(heading)
   heading.innerHTML = mytxt1.value
    let para = document.createElement('p');
    notes.appendChild(para)
   para.innerHTML = mytxt2.value

    let edit = document.createElement('button');
    edit.innerHTML = 'Edit'
    edit.addEventListener('click', ()=>{
     mytxt1.value = heading.innerHTML;
     mytxt2.value = para.innerHTML;
     notes.style.display = 'none'
    })
    notes.appendChild(edit)
    let dlt = document.createElement('button');
    dlt.innerHTML = 'Delete'
    dlt.addEventListener('click', ()=>{
        notes.style.display = 'none'
    })
    notes.appendChild(dlt)
    // localStorage.setItem("tod", JSON.stringify([mytxt1,mytxt2]))
    mytxt1.value = "";
    mytxt2.value = "";

})
