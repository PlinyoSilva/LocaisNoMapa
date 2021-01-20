export function signIn(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve({
                token: 'sdfgasbdfysdbfsbvadjfvs',
                user: {
                    name:'Plinyo',
                    email:'plinyosilvadev@gmail.com',
                },
            });
        }, 2000);
    });
}