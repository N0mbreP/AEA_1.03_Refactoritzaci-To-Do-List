const addAct = () => {
    let llistaDiv = document.getElementById('list');
    let divAct = document.createElement('div');
    let checkBox = document.createElement('input');
    let idClassDiv= llistaDiv.lastElementChild;
    let idClass= parseInt(idClassDiv.id);
    console.log(idClass);
    let text=document.createElement('span');
    let actText=document.getElementById('add');
    let buttonDel=document.createElement('button');
    divAct.setAttribute('id', idClass+1);  
    checkBox.setAttribute('type', 'checkBox');
    text.innerText= actText.value;
    buttonDel.value="Eliminar";
    buttonDel.onclick = () =>{
        divAct.remove()
    };
    buttonDel.textContent = 'Eliminar';
    llistaDiv.appendChild(divAct);
    console.log(divAct.id);
    divAct.appendChild(checkBox);
    divAct.appendChild(text);
    divAct.appendChild(buttonDel);
}
