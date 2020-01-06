class Nodo{
    constructor(valor){
        this.valor = valor   
    }
}
class UI{
    crearNodo(nodo){
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.innerHTML = $conteinerNodes.innerHTML + `
            <div id="nodo" class="bg-info d-inline-block position-relative">
                <div id="conteinerNodo" class="d-inline-block">
                    <p id="valorNodo" class="position-absolute mb-0 h3">${nodo.valor}</p>
                </div>
            </div>
        `
        this.crearArrow();
    }
    crearArrow(){
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.innerHTML = $conteinerNodes.innerHTML + `
        <div id="containerArrow" class="d-inline-block position-relative">
            <div id="arrow"></div>
        </div>
        `
    }
    showError(){
        const $valueNodo = document.querySelector('#valueNodo');
        $valueNodo.className ='error-border ' + $valueNodo.className;
        const $navBar = document.querySelector('#navbar');
        const $cite = document.querySelector('#cite');
        const $divError = document.createElement('div');
        $divError.innerText = 'Error, el campo Valor no puede estar vacío'
        $divError.className = 'error h6 card text-light text-center w-50';
        $navBar.insertBefore($divError,$cite);
    }
}


const $create = document.querySelector('#create');

$create.onclick = function(){
    const ui = new UI();
    const $valueNodo = document.querySelector('#valueNodo');
    if ($valueNodo.value === '') {
        ui.showError()
    }else{
        const nodo = new Nodo($valueNodo.value);
        ui.crearNodo(nodo);
    }
}