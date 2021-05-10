
function drag(ev){
    ev.dataTransfer.setData('productName',ev.target.id);
}

// esto se parece a onmouseover
function drop(ev){
    productName = ev.dataTransfer.getData('productName');
    product = data[productName];
    renderCalories(parseInt(product.calories));
    renderVitamins(product.vitamins);
    ev.preventDefault();

}

// esto se parace a contrario de onclick
function allowDrop(ev) {
    ev.preventDefault();
}
