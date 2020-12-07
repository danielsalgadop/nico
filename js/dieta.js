function setCalories(number){
    caloriesSelector = document.getElementById('calories');
    actualCaloriesAsInt = parseInt(caloriesSelector.textContent);
    caloriesSelector.innerHTML = actualCaloriesAsInt + number;
}
