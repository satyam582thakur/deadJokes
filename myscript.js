const jokes = document.querySelector('#joke');
const jokebtn=document.querySelector('#jokebtn');

//API Call using promises
// const Generatejokes = () => {
//     const setHeader = {
//         headers :{
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res) => 
//         res.json()).then((data) => {
//         jokes.innerHTML =data.joke;
//     })
//     .catch((error) => 
//         console.log(error))}
//API Call using Async Await
const Generatejokes = async () => {
    try{
    const setHeader = {
        headers :{
            Accept : "application/json"
        }
    }
    const res  = await fetch('https://icanhazdadjoke.com',setHeader)
    const data = await res.json();
    jokes.innerHTML = data.joke;
}catch(err){
        console.log(error)}
}

jokebtn.addEventListener('click',Generatejokes);
Generatejokes();