class Nodo{
    constructor(valor){
        this.valor = valor   
    }
}
class UI{
    crearNodo(nodo){
        if (nodo.valor > -1 && nodo.valor < 10) {
            const $conteinerNodes = document.querySelector('#conteinerNodes');
            $conteinerNodes.innerHTML = $conteinerNodes.innerHTML + `
            <div id="nodo" class="bg-info d-inline-block position-relative">
                <div id="conteinerNodo" class="d-inline-block">
                    <p id="valorNodo" class="position-absolute mb-0 h3">${nodo.valor}</p>
                </div>
            </div>
        `
        this.crearArrow();
        }else{
            this.showErrorValor('Valor no permitido')
        }
    }
    crearArrow(){
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.innerHTML = $conteinerNodes.innerHTML + `
        <div id="containerArrow" class="d-inline-block position-relative">
            <div id="arrow"></div>
        </div>
        `
    }
    showErrorValor(error){
        const $valueNodo = document.querySelector('#valueNodo');
        const nodoClass = $valueNodo.className;
        $valueNodo.className ='error-border ' + nodoClass;
        const $navBar = document.querySelector('#navbar');
        const $cite = document.querySelector('#cite');
        const $divError = document.createElement('div');
        $divError.innerText = error;
        $divError.className = 'error h6 card text-light text-center w-50';
        $navBar.insertBefore($divError,$cite);
    }
    deleteErrorValor(){
        document.querySelector('.error').remove();
        document.querySelector('#valueNodo').className = 'mb-1 w-50'
    }
}


const $create = document.querySelector('#create-input');

$create.onclick = function(){
    const ui = new UI();
    if (document.querySelector('.error')){
       ui.deleteErrorValor()
    }
    const $valueNodo = document.querySelector('#valueNodo');
    if ($valueNodo.value === '') {
        ui.showErrorValor('Error, el campo Valor no puede estar vacío')
    }else{
        const nodo = new Nodo($valueNodo.value);
        ui.crearNodo(nodo);
    }
}

const $valueNodo = document.querySelector("#valueNodo");

$valueNodo.onclick = function(){
    const ui = new UI();
    if (document.querySelector('.error')){
       ui.deleteErrorValor()
    }
}