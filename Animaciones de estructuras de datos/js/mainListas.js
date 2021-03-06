const $create = document.querySelector('#create-input');

$create.onclick = function(){
    const ui = new UI();
    if (document.querySelector('.error')){ 
       ui.deleteError()
    }
    const $valueNodo = document.querySelector('#valueNodo');
    if ($valueNodo.value === '') {
        const $valueNodo = document.querySelector('#valueNodo');
        $valueNodo.className ='error-border ' + $valueNodo.className;
        ui.showError('Error, el campo Valor no puede estar vacío')
    }else{
        const nodo = new Nodo($valueNodo.value);
        let $valorPosicion = document.querySelector('#valorPosicion');
        if ($valorPosicion.value === '') {
            ui.crearNodo(nodo); 
        } else {
            const posicion = document.querySelector('#valorPosicion').value;
            ui.crearNodoAntes(nodo,posicion);
        }
    }
}

const $valueNodo = document.querySelector("#valueNodo");
$valueNodo.onclick = function(){
    if (document.querySelector('.error')){
        const ui = new UI();
        ui.deleteError()
    }
}

const $positionNodo = document.querySelector("#positionNodo");
$positionNodo.onclick = function(){
    if (document.querySelector('.error')){
        const ui = new UI();
        ui.deleteError()
    }
}


const $deleteNodo = document.querySelector('#delete-nodo');
$deleteNodo.onclick = function(){
    const ui = new UI();
    if (document.querySelector('.error')){
        ui.deleteError()
     }
    const $positionNode = document.querySelector('#positionNodo');
    const $allNodes = document.querySelectorAll('#nodo');
    const $allArrows = document.querySelectorAll('#containerArrow');
    if (document.querySelector("#checkBox").checked) {
        $allArrows.forEach(arrow => arrow.remove());
        $allNodes.forEach(nodo => nodo.remove())
    } else if ($positionNode.value) {
        if (($allNodes.length && $positionNode.value-1 >= 0)&&($allNodes.length > $positionNode.value-1 )){
            $allArrows[$positionNode.value-1].remove();
            $allNodes[$positionNode.value-1].remove();
        } else {
            $positionNode.className ='error-border ' + $positionNode.className;
            ui.showError('No existe la posicion solicitada');
        }
    }
}

function intercambio(uno,dos){
    const $nodoUno = document.querySelectorAll('#nodo')[uno-1];
    const $nodoDos = document.querySelectorAll('#nodo')[dos-1];

    $nodoUno.classList.add('intercambio');
    $nodoDos.classList.add('intercambioInverso');

    setTimeout(function(){
        let resguardo = $nodoUno.firstElementChild.innerHTML;
        $nodoUno.firstElementChild.innerHTML = $nodoDos.firstElementChild.innerHTML;
        $nodoDos.firstElementChild.innerHTML = resguardo;
        $nodoUno.classList.remove('intercambio');
        $nodoDos.classList.remove('intercambioInverso');
    },4000)
}

const $quickSort = document.querySelector('#quick-sort');

$quickSort.onclick = function(){
    const $allP = document.querySelectorAll('#conteinerNodes #valorNodo');
    let $allValues = [];
    $allP.forEach(p => $allValues.push(Number(p.innerText)));
    
    $allValues = quickSort($allValues);

    const $allNodes = document.querySelectorAll('#nodo');
    const $allArrows = document.querySelectorAll('#containerArrow');

    $allNodes.forEach(div => div.remove());
    $allArrows.forEach(div => div.remove());

    const ui = new UI();

    $allValues.forEach(value => ui.crearNodo(new Nodo(value)))

}

const $menu = document.querySelector('#menu');
$menu.onclick = function(){
    $('.collapse').collapse('toggle')
}

function reposicionamientoADerecha(numeroDeNodo){
    const $conteinerWidth = document.querySelector("#conteinerNodes").clientWidth-53;
    return $conteinerWidth-(106*numeroDeNodo+contadorDerecha*53)
}
function reposicionamientoAIzquierda(numeroDeNodo,id){
   if(id.id === 'nodo'){
        return -(55*numeroDeNodo*2-(55*contadorIzquierda))
   }else{
        return -(55*numeroDeNodo-(55*contadorIzquierda))
   }
}


const $botonTemporal = document.querySelector("#sort > button")
let contadorIzquierda = 0;
let contadorDerecha = 0;
$botonTemporal.onclick = function(){
    document.querySelectorAll('#nodoIzquierda').forEach(div => div.remove())
    document.querySelectorAll('#nodoDerecha').forEach(div => div.remove())
    quickSortAnimation('nodo');
    contadorDerecha = 0;
    contadorIzquierda = 0;
}

function quickSortAnimation(idNodo){
    let pivote;
    const creadorDeNodos = new NodoAnimado();
    const $allNodes = document.querySelectorAll(`#${idNodo}`);
    let keyFrameNodo = new NodoAnimado();
    for(let entry of $allNodes.entries()){
        if(!entry[0]){
            pivote = Number(entry[1].firstElementChild.firstElementChild.innerText)
        }else{
            let value = Number(entry[1].firstElementChild.firstElementChild.innerText)
            let nodo = new Nodo(value)
            if (value < pivote){
                var nodoAnimate = new Animation(keyFrameNodo.keyFrameAIzquierda(entry), document.timeline);
                contadorIzquierda++
                setTimeout(function(){
                    creadorDeNodos.crearNodoAlaIzquierda(nodo)
                },2000);
            }else{
                var nodoAnimate = new Animation(keyFrameNodo.keyFrameADerecha(entry), document.timeline);
                contadorDerecha++
                setTimeout(function(){
                    creadorDeNodos.crearNodoAlaDerecha(nodo)
                },2000);
            }
            nodoAnimate.play();
        }
    }
    setTimePivote()
    contadorDerecha = 0;
    contadorIzquierda = 0;
}

function setTime(){
    return new Promise(
        resolve => {
            setTimeout(
                () => {
                    resolve('nodoIzquierda')
                },2000
            )
        }
    );
}

function setTimePivote(){
    return new Promise(
        resolve => {
            setTimeout(
                () => {
                    resolve(hacerCosas('Div'))
            },2000)
        }
    );
}

async function crearPivote(){
   return await setTimePivote()
}

async function llamadaRecursiva(){
    const result = await setTime()
    quickSortAnimation(result)
}

function borrarNodosIzquierda(){
    document.querySelectorAll('#nodoIzquierda').forEach(div => div.remove())
}