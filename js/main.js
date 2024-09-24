document.querySelector('button').addEventListener('click', getMeal)

function getMeal(){
    let meal = document.querySelector('input').value

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json())
    .then(data => {
    console.log(data.meals[0])
    document.querySelector('h2').innerText = data.meals[0].strMeal
    document.querySelector('img').src = data.meals[0].strMealThumb
    document.querySelector('p').innerText = data.meals[0].strInstructions
    })
    .catch(err => {
    console.log(`error ${err}`)
    })

}

