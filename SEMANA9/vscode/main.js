//api (aplication progamming interface)
//es un servicio en un formaton JSON (ARREGLO DE OBJETOS)
//EN JS NATIVA PETICIONES FUNCTION FETCH
//EXISTEN 4 TIPOS DE PETICIONES
//GET OBTIENE INFORMACION
//POST CREA DATOS
//PUT ACTUALIZAR
//DELETE BORRAR

//fUNCION ASYNC ASINCRONIA


//elementos de ejecucion
const gitHubActionSearch = document.querySelector("#github-action-search")
const githubSearch = document.querySelector("#github-search")

//PINTAR LOS DATOS QUE VIENEN DEL API

const imgProfile = document.querySelector('#img-profile')
const gitHubName = document.querySelector ('#github-name')
const gitHubUserName = document.querySelector('#github-username')
const gitHubBio = document.querySelector('#github-bio')

gitHubActionSearch.onclick =()=>{
    const username = githubSearch.value
    console.log (username)
    obtenerDatosGithub(username)
}

//  el disparado o evento de boton - captura el valior del input y lo guarda
//en la variable username
githubActionSearch.onclick =()=>{
    const username = githubSearch.value
    console.log(username)
    obtenerDatosGithub(username)
}
//funcion que se encarga de traer los datos de la API

const obtenerDatosGithub = async(username="")=>{
    const response = await fetch (`https://api.github.com/users/${username}`) //verificar las comillas invertidas `` (alt+96)
    const data = await response.json ()
    console.log(data)

    setDataUser(data)
}

//Evento inserta datos al html

const setDataUser = (data)=> {
    imgProfile.src =data.avatar_url;
    gitHubName.textContent = data.login;
    gitHubUserName.textContent = data.name;
    gitHubBio.textContent = data.bio;
    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;
}

