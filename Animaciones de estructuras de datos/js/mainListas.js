class Arrow{
    crearArrow(){
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.innerHTML = $conteinerNodes.innerHTML + `
        <div id="containerArrow" class="d-inline-block position-relative">
            <div id="arrow"></div>
        </div>
        `
    }
}
class Nodo{
    constructor(valor){
        this.valor = valor   
    }
    crearNodo(){
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.innerHTML = $conteinerNodes.innerHTML + `
            <div id="nodo" class="bg-info d-inline-block position-relative">
                <div id="conteinerNodo" class="d-inline-block">
                    <p id="valorNodo" class="position-absolute mb-0 h3">${this.valor}</p>
                </div>
            </div>
        `
    }
}


