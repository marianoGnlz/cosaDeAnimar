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

function prueba(){
    let x = [3,4,5,6,0,2,7,4,8,9]
    let ui = new UI()
    x.forEach(n => ui.crearNodo(new Nodo(n)))
}

prueba()