// JavaScript functions are executed in the sequence they are called.
//  Not in the sequence they are defined.


function resultado(r) {
    console.log(r)
}

function soma(n1, n2, callbackFunction) {
    var soma = n1 + n2;
    callbackFunction(soma);
}

soma(10, 15, resultado);
















// const result = await (await ;

// const result = async () => (await fetch('https://animechan.vercel.app/api/random')).json()

// const res = await result;
// console.log(res)


    // .then(anime => console.log(anime))

        // console.log(obj.anime, obj.character, obj.quote)
    



// const randomQuote = fetch('https://animechan.vercel.app/api/random')
//     .then(response =>  response.json())
//     .then(obj => showName(obj))

// const showName = (obj) => {
//     console.log(obj.name)
// }
// console.log(randomQuote)


// const randomQuote2 = async () => await fetch('https://animechan.vercel.app/api/random')
// const res = async () => await randomQuote2.json()
// console.log(res)


// promise A
// .then(quote => console.log('quote: ', quote)) // return promise A resolved
// .catch(error => console.log('error: ', error))
// .finally(() => console.log('bateu no finally'))



// const arrow = (param) => {
//     return param + 1
// }
// // exemplo 1 de uma arrow function

// const arrow2 = param => param + 1
// // exemplo 2 de uma arrow function


// () => {

// }


// AGORA VAI
