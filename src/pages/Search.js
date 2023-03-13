import Axios from "axios";
import { useState, useEffect } from "react";
import SearchCard from "./SearchCard";

export default function Search() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemon, setPokemon] = useState({
    name: "".toString().toLowerCase(),
    species: "",
    img: "",
    hp: "",
    attack: "",
    type1: "",
    type2: "",
  });
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        // response.data.name.toLowerCase();
        setPokemon({
          name: response.data.name,
          abilities: response.data.abilities,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type1: response.data.types,

          // type2: response.data.types[1].type.name
        });

        setPokemonChosen(true);
      }
    );
  };

  useEffect(() => {
    setPokemonType(pokemon.type1);
  }, [pokemon]);

  let b = "Typing: ";
  // if (pokemonType) {
  //   for (let x of pokemonType) {
  //     b.push(
  //       <h3>
  //         {"Types:"}
  //         {x.type.name}
  //       </h3>
  //     );
  //   }
  // }
  if (pokemonType) {
    let count = 0;
    for (let x of pokemonType) {
      if (count === 0) {
        b += x.type.name;
        count++;
      } else {
        b += ", " + x.type.name;
      }
    }
  }
  // if (pokemonType) {
  //   b.push(<h3>Types: </h3>);
  //   for (let x of pokemonType) {
  //     b.push(<h3>{x.type.name}</h3>);
  //   }
  // }
  return (
    <>
      {/* <div className="TitleSection"> */}
      <div className="TitleSection">
        <input
          type="text"
          placeholder="Search for a pokemon"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}>
          <img
            src="https://img.icons8.com/pastel-glyph/30/f08080/search--v1.png"
            alt=""
          />
        </button>
      </div>
      {/* <div> */}
      <div>
        {!pokemonChosen ? (
          // <Routes>
          //   <Route path="/Form_Team" element={<Form_Team />} />
          //   <Route path="/Guessing_Game" element={<Guessing_Game />} />
          //   <Route path="/Login" element={<Login />} />
          // </Routes>

          <></>
        ) : (
          <SearchCard pokemon={pokemon} b={b} setStatCard={setPokemonChosen} />
        )}
        {/* </div> */}
      </div>
    </>
  );
}
