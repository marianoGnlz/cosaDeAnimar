class conteinerNodo {
    constructor(id){
        this.id = id;
    }

    crearConteiner(){
        const $divConteiner = document.createElement('div');
        $divConteiner.id = this.id;
        $divConteiner.className = 'ml-3 mr-3 position-relative'
        return $divConteiner
    }

    crearColumnas(){
        const $divCol = document.createElement('div');
        $divCol.className = 'col pl-0 pr-0'
        return $divCol
    }

}



class NodoAnimado{
    constructor(id){
        this.id = id;
    }

    keyFrameADerecha(entry){
        let nodoKeyFrame = new KeyframeEffect(
            entry[1],
            [
                {
                // 0% 
                    top: '112px' , 
                    left: '0px' 
                },
                {
                    // 20% 
                    top:'112px',
                    left: reposicionamientoADerecha(entry[0])+'px'
                },
                {
                    // 100% 
                    top:'112px',
                    left: reposicionamientoADerecha(entry[0])+'px'
                }
    
            ],
            {duration: 2000, easing: 'ease-out'}
        );
        return nodoKeyFrame
    }
    keyFrameAIzquierda(entry){
        let nodoKeyFrame = new KeyframeEffect(
            entry[1],
            [
                {
                // 0% 
                    top: '112px' , 
                    left: '0px' 
                },
                {
                    // 20% 
                    top:'112px',
                    left: reposicionamientoAIzquierda(entry[0],entry[1])+'px'
                },
                {
                    // 100% 
                    top:'112px',
                    left: reposicionamientoAIzquierda(entry[0],entry[1])+'px'
                }
    
            ],
            {duration: 2000, easing: 'ease-out'}
        );
        return nodoKeyFrame
    }

    crearNodoEstatico(nodo){
        const $divNodo = document.createElement('div');
        $divNodo.id = this.id;
        $divNodo.className = 'bg-info d-inline-block position-relative'
        $divNodo.innerHTML = `
            <div id="conteinerNodo" class="d-inline-block">
                <p id="valorNodo" class="position-absolute mb-0 h3">${nodo.valor}</p>
            </div>
        `
        return $divNodo
    }
    crearNodoAlaDerecha(nodo){
        const $conteinerDiv = document.querySelectorAll("#conteinerNodesDiv .col")[1];
        const $nodoDerecha = new NodoAnimado('nodoDerecha').crearNodoEstatico(nodo);
        $conteinerDiv.appendChild($nodoDerecha);
    }
    crearNodoAlaIzquierda(nodo){
        const $conteinerDiv = document.querySelectorAll("#conteinerNodesDiv .col")[0];
        const $nodoIzquierda = new NodoAnimado('nodoIzquierda').crearNodoEstatico(nodo);
        $conteinerDiv.appendChild($nodoIzquierda);
    }
}


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
            const $valueNodo = document.querySelector('#valueNodo');
            $valueNodo.className ='error-border ' + $valueNodo.className;
            this.showError('Valor no permitido')
        }
    }
    crearArrow(){
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.innerHTML = $conteinerNodes.innerHTML + `
        <div id="containerArrow" class="animacion d-inline-block position-relative">
            <div id="arrow"></div>
        </div>
        `
    }
    crearNodoAntes(nodo,posicion){
        const $divNodo = document.createElement('div');
        $divNodo.id = 'nodo';
        $divNodo.className = 'bg-info d-inline-block position-relative';
        $divNodo.innerHTML = `
            <div id="conteinerNodo" class="d-inline-block">
                    <p id="valorNodo" class="position-absolute mb-0 h3">${nodo.valor}</p>
                </div>
        `
        const $nodosActuales = document.querySelectorAll('#nodo');
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.insertBefore($divNodo,$nodosActuales[posicion-1]);
        this.crearArrowAntes(posicion);
    }
    crearArrowAntes(posicion){
        const $newArrow = document.createElement('div');
        $newArrow.id = 'containerArrow';
        $newArrow.className = 'animacion d-inline-block position-relative';
        $newArrow.innerHTML = `<div id="arrow"></div>`;
        const $nodosActuales = document.querySelectorAll('#nodo');
        const $conteinerNodes = document.querySelector('#conteinerNodes');
        $conteinerNodes.insertBefore($newArrow,$nodosActuales[posicion]);
    }
    showError(error){
        const $navBar = document.querySelector('#navbar');
        const $cite = document.querySelector('#cite');
        const $divError = document.createElement('div');
        $divError.innerText = error;
        $divError.className = 'error alert alert-danger w-50 h6';
        $divError.role = 'alert'
        $navBar.insertBefore($divError,$cite);
    }
    deleteError(){
        document.querySelector('.error').remove();
        const $inputs = document.querySelectorAll("input[name='value']");
        $inputs.forEach(input => input.className = 'col');
    }
}