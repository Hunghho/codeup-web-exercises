(async() => {
    'use strict';

    // function gitHubUsers() {
    //     fetch('https://api.github.com/users/hunghho/events', {headers: {'Authorization': `token ${keys.gitHub}`}})
    //         .then(data => {
    //             data.json().then(users =>{
    //                 for (let i = 0 ; i < users.length ; i += 1){
    //                     console.log(users[i].created_at)
    //                 }
    //                 console.log(users[0].created_at)
    //             })
    //         })
    //         .catch(error => {
    //             alert(error);
    //         })
    //
    // }

    async function gitHubUsers() {
        try {
            const response = await fetch('https://api.github.com/users/hunghho/events', {headers: {'Authorization': `token ${keys.gitHub}`}})
            const users = await response.json()
            console.log(users)
            for (let i = 0; i < users.length; i += 1) {
                console.log(`LoginID: ${users[i].actor.login} Last push to gitHub: ${users[i].created_at}`)
            }
        } catch (error) {
            console.log(`error ${error}`)
        }
    }
    gitHubUsers()

})();