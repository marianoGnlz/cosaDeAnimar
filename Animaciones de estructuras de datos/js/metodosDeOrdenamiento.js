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
    let nodo = new Nodo(Number(document.querySelector('#conteinerNodes #valorNodo').innerHTML));
    let nodoAnimate = new NodoAnimado('nodoPivote').crearNodoEstatico(nodo);

    conteinerDos.appendChild(nodoAnimate)
    $conteiners.appendChild(conteinerDos)

    conteinerDos = new conteinerNodo('conteinerNodesDiv').crearConteiner();
    let $divColIzquierda = (new conteinerNodo).crearColumnas();
    let $divColDerecha = (new conteinerNodo).crearColumnas();
    conteinerDos.classList.add('row');
    conteinerDos.appendChild($divColIzquierda);
    conteinerDos.appendChild($divColDerecha);

    $conteiners.appendChild(conteinerDos);
    

}










function prueba(){
    let x = [5, 7, 6, 4, 3, 8, 2, 9, 0, 1, 8]
    let ui = new UI()
    x.forEach(n => ui.crearNodo(new Nodo(n)))
}

prueba()
hacerCosas()