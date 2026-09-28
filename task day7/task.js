fetch("menu.json")
.then(response => response.json())
.then(menu => {
  let result =document.getElementById("result")
  console.log(menu)
  for (let i=0 ;i< menu.length; i++ ){ 
    result.innerHTML += `<p><strong>name:</strong> ${menu[i].name}<br>${menu[i].category}<br>${menu[i].available} </p>`;
  }
}
)
