var fruitArray = ['Banana', 'grapes', 'Apple', 'Mango'];
function loadFruits()
{
    document.getElementById("fruits").innerHTML = fruitArray;
}

function selectFruit()
{
    var fruit = prompt("Choose a fruit: ");
    fruitArray[fruitArray.length] = fruit;
    document.getElementById("fruits").innerHTML = fruitArray;
}