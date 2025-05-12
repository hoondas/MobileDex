import { Box, Button, TextField } from "@mui/material";
import "../App.css";
import Navbar from "./Navbar";
import Pokecard from "./Pokecard";
import { Link } from "react-router-dom";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
const { useState, useEffect } = require("react");

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pokemons")
      .then((res) => {
        setPokemons(res.data);
        setCount(res.data.length);
      })
      .catch((err) => {
        console.error("Erro ao buscar Pokémons:", err);
      });
  }, []);

  function handleClick(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return (
    <div className="mobile-container">
      <Navbar />
      
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <h1>Pokémons</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {pokemons.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            style={{ cursor: "pointer" }}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            onClick={() => handleClick(pokemon)}
          />
        ))}
      </Box>

      {selectedPokemon && (
        <div className="overlay">
          <div className="modal">
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />
            <Pokeinfo pokemonData={selectedPokemon} />
              <Button variant="contained" color="error" onClick={() => setSelectedPokemon(null)}>Fechar</Button>
            <Link to={"/shiny"} state={{pokemonData:selectedPokemon}}>
              <Button variant="contained" color="success" sx={{marginLeft: "5px"}}>Shiny Version</Button>
            </Link> 
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;