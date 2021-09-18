export function signIn(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve({
                token: 'token',
                user: {
                    name:'Plinyo',
                    email:'email',
                },
            });
        }, 2000);
    });
}
