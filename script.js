fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
    const jokeTest=jokeData.attachments[0].text;
    const jokeElement=document.getElementById("jokeElement");
    jokeElement.innerHTML=jokeTest;
})



/* 
    const getJOkes = async( ) => {
    try{
        const res = await fetch( "https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJoke = document.querySeIector( "#myJoke" ) ;
        myJoke.innerHTML= data.value;
    }catch (error) { }

}
        
    window.addEventListener( "load" ,()=>{
        get Jokes( ) ; 
    }
    
    */