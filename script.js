const button = document.querySelector('button')
const box = document.querySelector('.box-right')

button.addEventListener('click', async ()=> {
  const valueInput = document.querySelector('input').value
  const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${valueInput}`)
  const converteToJSON = await response.json()
  
  box.innerHTML = `
    <img src=${converteToJSON.data[0].card_images[0].image_url}>
  `
})
