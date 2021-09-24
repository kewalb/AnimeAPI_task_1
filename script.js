// fetch('https://animechan.vercel.app/api/random')
//         .then(response => response.json())
//         .then(quote => console.log(quote))

// getting a single randon quote from api.
document.getElementById("get_quote").addEventListener("click", () => {
        jumbo = document.getElementById('content')
        fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
                console.log(quote)
                jumbo.insertAdjacentHTML("beforeend",
                `<p>Anime title :  ${quote.anime} </p>
                <p>Anime charecter :   ${quote.character} </p>
                <p> Quote :  ${quote.quote} </p> `);
        })
        .catch(err => jumbo.insertAdjacentHTML("beforeend", `Failed to fetch requested data. Please try later ${err}`))
})

// getting quotes from api based on inputs from input fields.
getQuoteByName = () => {
        animeName = document.getElementById("anime_name").value;
        jumbo = document.getElementById('content')
        if(animeName === ""){
                alert("please fill out the input field to get quote")
        }
        else{
                fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeName}`)
                .then(response => response.json())
                .then(quote => {
                        for(var i=0; i<=9; i++){
                        console.log(quote)
                        jumbo.insertAdjacentHTML("beforeend",
                        `<p>Anime title :  ${quote[i].anime} </p>
                        <p>Anime charecter :   ${quote[i].character} </p>
                        <p> Quote :  ${quote[i].quote} </p> `);
                }})
                .catch(err => jumbo.insertAdjacentHTML("beforeend", `Failed to fetch requested data. Please try later ${err}`))
        }
}

// getting quotes from api based on inputs from input fields.
getQuoteByCharacter = () => {
        animeCharacter = document.getElementById("character_name").value;
        jumbo = document.getElementById('content')
        if(animeCharacter === ""){
                alert("please fill out the input field to get quote")
        }
        else{
                fetch(`https://animechan.vercel.app/api/quotes/character?name=${animeCharacter}`)
                .then(response => response.json())
                .then(quote => {
                        for(var i=0; i<=9; i++){
                        console.log(quote)
                        jumbo.insertAdjacentHTML("beforeend",
                        `<p>Anime title :  ${quote[i].anime} </p>
                        <p>Anime charecter :   ${quote[i].character} </p>
                        <p> Quote :  ${quote[i].quote} </p> `);
                }})
                .catch(err => jumbo.insertAdjacentHTML("beforeend", `Failed to fetch requested data. Please try later ${err}`))
        }
}

// fetching 10 random quotes from api.
getRandomQuote = () => {
        jumbo = document.getElementById('content')
        fetch("https://animechan.vercel.app/api/quotes")
        .then(response => response.json())
        .then(quote => {
                        for(var i=0; i<=9; i++){
                        console.log(quote)
                        jumbo.insertAdjacentHTML("beforeend",
                        `<p>Anime title :  ${quote[i].anime} </p>
                        <p>Anime charecter :   ${quote[i].character} </p>
                        <p> Quote :  ${quote[i].quote} </p> `);
                }})
                .catch(err => jumbo.insertAdjacentHTML("beforeend", `Failed to fetch requested data. Please try later ${err}`))
        }
