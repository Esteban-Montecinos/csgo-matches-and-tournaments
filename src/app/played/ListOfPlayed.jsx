import CustomImage from "../components/CustomImage";
import {DiasDesde} from "../components/DiasDesde";
const url =
  "https://csgo-matches-and-tournaments.p.rapidapi.com/matches?page=1&limit=10";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
  },
};

const fetchPlayed = () => {
  return fetch(url, options).then((data) => data.json());
};

export default async function ListOfPlayed() {
  const played = await fetchPlayed();
  return played.data.map((match) => (
    <article
      key={match.id}
      className="max-w-sm w-full h-90 min-h-full rounded shadow-lg text-center bg-neutral-100 opacity-90 p-5 grid content-between"
    >
      <div className="grid grid-cols-3 gap-1 mb-2">
        <p className="justify-self-center self-center text-xs">{match.event.title}</p>
        <p className="justify-self-center self-center font-medium">{match.location}</p>
        <p className="justify-self-center self-center">{"Hace "+ DiasDesde(match.played_at)+" días."}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 justify-center">
        <div className="grid">
          <CustomImage
            src={match.team_won.image_url}
            w={48}
            h={48}
            alt={match.team_won.title}
          />
          <p className="font-bold text-md text-green-800">
            {match.team_won.title}
          </p>
        </div>
        <p className="self-center font-bold text-2xl">
          {match.score_won + " - " + match.score_lose}
        </p>
        <div className="grid">
          <CustomImage
            src={match.team_lose.image_url}
            w={48}
            h={48}
            alt={match.team_lose.title}
          />
          <p className="font-bold text-md text-red-800">
            {match.team_lose.title}
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-2">
          <CustomImage
            src={match.team_won_country.image_url}
            w={24}
            h={24}
            alt={match.team_won_country.title}
          />
          <p className="justify-self-center self-center text-emerald-500 bg-neutral-600 rounded-full px-2 font-semibold">{match.match_kind.title}</p>
          <CustomImage
            src={match.team_lose_country.image_url}
            w={24}
            h={24}
            alt={match.team_lose_country.title}
          />
        </div>
      </div>
      
    </article>
  ));
}
