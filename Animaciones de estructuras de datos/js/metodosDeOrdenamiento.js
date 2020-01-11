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
    let nodoAnimate = new NodoAnimate('nodoPivote').crearNodoAnimate();

    conteinerDos.appendChild(nodoAnimate)
    $conteiners.appendChild(conteinerDos)

    conteinerDos = new conteinerNodo('conteinerNodesDiv').crearConteiner();
    let $divColIzquierda = (new conteinerNodo).crearColumnas();
    let $divColDerecha = (new conteinerNodo).crearColumnas();

    nodoAnimate = new NodoAnimate('nodo').crearNodoAnimate();
    $divColIzquierda.appendChild(nodoAnimate);
    

    nodoAnimate = new NodoAnimate('nodoDerecha').crearNodoAnimate();
    $divColDerecha.appendChild(nodoAnimate);

    conteinerDos.classList.add('row');
    conteinerDos.appendChild($divColIzquierda);
    conteinerDos.appendChild($divColDerecha);

    $conteiners.appendChild(conteinerDos);



}
















function prueba(){
    let x = [3,4,5,6,0,2,7,4,8,9]
    let ui = new UI()
    x.forEach(n => ui.crearNodo(new Nodo(n)))
}

prueba()