function quickSort(array){
    let pivote = array[0];
    let arrayIzquierda = [];
    let arrayDerecha = [];

    if (array.length <= 1) {
        return array
    } else {
        for(let i = 1; i < array.length;i++){
            if (array[i] <= pivote){
                arrayIzquierda.push(array[i]);
            } else {
                arrayDerecha.push(array[i]);
            }
        }
    }
    return (new Array).concat(quickSort(arrayIzquierda),pivote,quickSort(arrayDerecha));
}


function hacerCosas(){
    const $conteiners = document.querySelector('#conteiners');
    let conteinerDos = new conteinerNodo('conteinerNodesDos').crearConteiner();
    let nodoAnimate = new NodoAnimado('nodoPivote').crearNodoEstatico();

    conteinerDos.appendChild(nodoAnimate)
    $conteiners.appendChild(conteinerDos)

    conteinerDos = new conteinerNodo('conteinerNodesDiv').crearConteiner();
    let $divColIzquierda = (new conteinerNodo).crearColumnas();
    let $divColDerecha = (new conteinerNodo).crearColumnas();

    nodoAnimate = new NodoAnimado('nodo').crearNodoEstatico();
    $divColIzquierda.appendChild(nodoAnimate);
    

    nodoAnimate = new NodoAnimado('nodoDerecha').crearNodoEstatico();
    $divColDerecha.appendChild(nodoAnimate);

    conteinerDos.classList.add('row');
    conteinerDos.appendChild($divColIzquierda);
    conteinerDos.appendChild($divColDerecha);

    $conteiners.appendChild(conteinerDos);
    

}

function crearNodoAlaDerecha(){
    const $conteinerDiv = document.querySelectorAll("#conteinerNodesDiv .col")[1];
    const $nodoDerecha = new NodoAnimado('nodoDerecha').crearNodoEstatico();
    $conteinerDiv.appendChild($nodoDerecha);
}














function prueba(){
    let x = [3,4,5,6,0,2,7,4,8,9]
    let ui = new UI()
    x.forEach(n => ui.crearNodo(new Nodo(n)))
}

prueba()
hacerCosas()