async function getData(poke) {
  try {
    //gets data
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ditto}`)
    if (response.status != 200) {
        throw new Error(response);} else {const = await response.json();
            console.log(data);
            document.getElementById("api-response").textContent = data.mame;
        }
    } catch (error) {console.log(error);} } getData (gengar)

