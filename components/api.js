

// function to filter to 10 games based on rating 
async function topGames() {
    let reqUrl = 'https://api.rawg.io/api/games?key=d45ff65c85c84827a67ebe4eca53df87&ordering=-rating&page_size=10';
  
    let response = await fetch(reqUrl, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    let data = await response.json();
    console.log("API Response:", data); 
  
    return data.results || [];
  }


  // search function

  async function searchGames(searchTerm = "") {
    let reqUrl = 'https://api.rawg.io/api/games?key=d45ff65c85c84827a67ebe4eca53df87';
  
   
    if (searchTerm) {
      reqUrl += `&search=${encodeURIComponent(searchTerm)}`;
    }
  
    let response = await fetch(reqUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return await response.json();
  }
  
  // function to get game details by ID
 const getGameDetails = async (id) => {
  const response = await fetch(`https://api.rawg.io/api/games/${id}?key=d45ff65c85c84827a67ebe4eca53df87`);
  const data = await response.json();
  return data;
};
  


  module.exports = {
    topGames,
    searchGames,
    getGameDetails,
  };

