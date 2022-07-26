var form = document.querySelector("form")

form.addEventListener('submit', function(e){
    
    e.preventDefault()
    
    let name = document.getElementById("name")
    let urlForm = `https://pokeapi.co/api/v2/pokemon/${this.name.value}`

    let resp = document.getElementById('content')
    let imageFront = document.getElementById('imgPokemon')
    
    let htmlResp = ''

    fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data)
        htmlResp = `Nome: ${data.forms[0].name}<br>
        Tipo: ${data.types[0].type.name}`
        resp.innerHTML = htmlResp
        
        imageFront.innerHTML = `<img src='${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}'><img src='${data['sprites']['versions']['generation-v']['black-white']['animated']['back_default']}'>`
    })
    .catch(function(err){
        if(err){
            resp.innerHTML = "<p>Pokemon não encontrado.😢</p>"
        } else {
            resp.innerHTML = `<p>Erro! ${err}!</p>`
        }
        htmlResp.innerHTML = resp
        console.log(err)
    })
})