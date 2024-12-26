async function fetchData(){
    const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,nsfw,political,explicit`;
    const res = await fetch (url);
    const record = await res.json();
    console.log(record);
    if (record.type == "single") {
        document.getElementById("joke").innerHTML = record.joke;
        document.getElementById("jokeTwo").innerHTML = " ";
    } else {
        document.getElementById("joke").innerHTML = record.setup;
        document.getElementById("jokeTwo").innerHTML = record.delivery;
    }
}
document.getElementById("newJokeBtn").addEventListener("click", fetchData);
fetchData();