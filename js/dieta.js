function renderCalories(number){
    caloriesSelector = document.getElementById('calories');
    actualCaloriesAsInt = parseInt(caloriesSelector.textContent);
    caloriesSelector.innerHTML = actualCaloriesAsInt + number;
}

function renderVitamins(newVitaminsAsArray) {

    vitaminsSelector = document.getElementById('vitamins');

    actualVitaminsAsArray = vitaminsSelector.textContent.split(',');

    // remove initial "0"
    if( actualVitaminsAsArray[0] == "0"){
        actualVitaminsAsArray = [];
    }

    // using Set to avoid repeated elements
    allVitamins = actualVitaminsAsArray.concat(newVitaminsAsArray);
    let vitaminsAsSet = new Set(allVitamins);

    allVitaminsAsString = [...vitaminsAsSet].join(',');
    vitaminsSelector.innerHTML = allVitaminsAsString;
}
