const getObj = async () => {
    const result = await fetch('https://animechan.vercel.app/api/random')
    return result // promise
}

getObj()
    .then(res => res.json())
    .then(obj => {
        let wrapper = document.getElementById('randomAnimeQuote');
        const data = `
            <h1>${obj.anime}</h1>
            <h3>${obj.character}</h3>
            <blockquote>${obj.quote}</blockquote>
        `
        wrapper.innerHTML += data;
    })
