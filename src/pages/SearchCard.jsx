export default function SearchCard({ pokemon, b, setStatCard }) {
  let abt = "Ability: ";
  let cnt = 0;
  pokemon.abilities.map((poke) => {
    let temp = poke.ability.name;
    if (cnt === 0) {
      abt += temp;
      cnt++;
    } else {
      abt += ", " + temp;
      cnt++;
    }
  });

  return (
    <div className="SearchCard">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} alt="" />
      <h3>{abt}</h3>
      <h3>{b}</h3>
      <h3>Hp: {pokemon.hp}</h3>
      <h3>Attack: {pokemon.attack}</h3>
      <h3>Defense: {pokemon.defense}</h3>
      <div className="btn-srch-crd">
        <button className="add-btn">Favourite</button>
        <button className="close-btn" onClick={() => setStatCard(false)}>
          Close
          {/* <img src="https://img.icons8.com/sf-black-filled/50/000000/close-window.png" /> */}
        </button>
      </div>
    </div>
  );
}
