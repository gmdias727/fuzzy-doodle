const getObj = async () => {
    const result = await fetch('https://animechan.vercel.app/api/quotes')
    return result // promise
}


getObj()
    .then(res => res.json())
    .then(obj => obj.map(quote => {
        let wrapper = document.getElementById('quotes');

        const data = `
            <hgroup>
                <h1>${quote.character}</h1>
                <h4>from: ${quote.anime}</h4>    
            </hgroup>
            <p>Once said:</p>
            <blockquote>${quote.quote}</blockquote>
        `
        wrapper.innerHTML += data;
    }))