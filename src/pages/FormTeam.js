import Head from "./Head";
import TeamGrid from "./TeamGrid";
import { useState } from "react";

export default function FormTeam() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  return (
    <>
      <Head />
      <div className="formteam">
        <h2>Your Teams</h2>
        <div className="allteams">
          <TeamGrid loading={loading} />
        </div>
      </div>
    </>
  );
}
