const { log } = require('console');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function fetchData() {
  fetch("localhost:5000/products")
    .then((response) => response.json())
    .then(information => {
      console.log(information)
    
    document.querySelector("#products").innerText = data
        document.querySelector("#fruList").innerText = data
        document.querySelector("#vegList").innerText = data
      })
      .catch(console.error('An error occured'))
}

fetchData();





