const TeamGrid = (monData, loading, infoPokemon, types, strongWeak) => {
  return (
    <div className="team-grid">
      <div className="teampoke">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          monData.map((item) => {
            console.log(item);
            return (
              <>
                <div
                  className="team-poke-card"
                  //   key={item.id}
                  //   onClick={() => infoPokemon(item)}
                >
                  <h3>{item.name}</h3>
                  <img src={item.sprites.front_default} alt="" />
                  <h2>{types}</h2>
                </div>
              </>
            );
          })
        )}
      </div>
      <div className="teamstat">
        {!strongWeak ? (
          <h1>Loading...</h1>
        ) : (
          monData.map((item) => {
            // console.log(item);
            return (
              <>
                <div className="Both">
                  <div className="strength">
                    <h2>Strength</h2>
                    <div className="strength-type"></div>
                  </div>
                  <div className="weakness">
                    <h2>Weakness</h2>
                    <div className="weak-type"></div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TeamGrid;
