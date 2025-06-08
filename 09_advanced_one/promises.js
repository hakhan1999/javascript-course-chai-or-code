const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 completed');
        resolve()
    }, 1000)
}).then(() => {
    console.log('Promise 2 consumed');
})

const promisThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'Hassan', email: 'khanhassaan961@gmail.com' })
    }, 1000);
})

promisThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: 'Hassan', email: 'khanhassaan961@gmail.com' })
        }
        else {
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    })

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'JS', password: '123' })
        }
        else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hakhan1999')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all