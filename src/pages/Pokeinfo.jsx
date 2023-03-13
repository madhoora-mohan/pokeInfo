const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h2>{data.name}</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="typing">
            {data.types.map((poke) => {
              return (
                <>
                  <div className="group2">
                    <h3>{poke.type.name}</h3>
                  </div>
                </>
              );
            })}
          </div>
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h3>{poke.ability.name}</h3>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <h4>
                    {poke.stat.name}:{" " + poke.base_stat}
                  </h4>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
