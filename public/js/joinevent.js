console.log('hello')
const signUp =async (event) =>{
    event.preventDefault();
console.log('hello')
    const user_name =await fetch('/api/userRoutes/username',{
        method:'POST',
        body: JSON.stringify({username})
    })
    if(response.ok){
        const update = await fetch('/api/userRoutes/newParti',{
            method:'POST',
            body:JSON.stringify({username}),
        })
        window.location.reload(true)
    }
    else{
        alert('could not join')
    }
};



document.querySelector('#joinevent').addEventListener('submit',signUp);