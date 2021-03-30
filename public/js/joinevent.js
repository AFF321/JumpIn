console.log('hello')

const signUp =async (event) =>{
    event.preventDefault();
console.log('hello')
console.log(window.location.href)
const answer =document.querySelector('.text').value.trim()

const test =''
 const hel =window.location.pathname.split('/')
console.log(test)
console.log(hel[2])
hel2= hel[2]
    const response =await fetch('/api/users/join',{
        method:'POST',
        body: JSON.stringify({answer,hel2}),
        headers:{'content-Type': 'application/json'},
    })
    if(response.ok){
       document.location.replace(`/event/${hel2}`)
    }
    else{
        alert('could not join')
    };
}


document.querySelector('#joinevent').addEventListener('submit',signUp);