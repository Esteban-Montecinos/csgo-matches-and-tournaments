import CustomImage from "../components/CustomImage";
import { FormatFecha } from "../components/FormatFecha";
const url =
  "https://hltv-api.vercel.app/api/results.json";
const options = {
  method: "GET",
  cache: "no-store",
};

const fetchPlayed = () => {
  return fetch(url, options).then((data) => data.json());
};

export default async function ListOfPlayed() {
  const played = await fetchPlayed();
  return played && played.map((match) => (
    <article
      key={match.matchId}
      className="max-w-sm h-90 min-h-fullshadow-lg text-center text-white p-5 grid h-full w-full bg-neutral-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50"
    >
      <div className="grid gap-1 mb-2">
        <CustomImage
            className={"justify-self-center "}
            src={match.event.logo}
            w={24}
            h={24}
            alt={match.event.name}
          />
        <p className="md:justify-self-center justify-self-center self-center text-xs ">{match.event.name}</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 justify-center">
        <div className="grid grid-cols-1 gap-1">
          <CustomImage
            className={"justify-self-center "}
            src={match.teams[0].logo}
            w={48}
            h={48}
            alt={match.teams[0].name}
          />
          <p className="font-bold text-md text-slate-200 justify-self-center">
            {match.teams[0].name}
          </p>
        </div>
        <div className="grid">
        <p className="self-center font-bold text-2xl">
          {match.teams[0].result + " - " + match.teams[1].result}
        </p>
        <div>
        <p className="justify-self-center self-center text-emerald-500 bg-neutral-600 rounded-full px-2 font-semibold">{match.maps}</p>
        </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <CustomImage
            className={"justify-self-center"}
            src={match.teams[1].logo}
            w={48}
            h={48}
            alt={match.teams[1].name}
          />
          <p className="font-bold text-md text-slate-200 justify-self-center">
            {match.teams[1].name}
          </p>
        </div>
      </div>
      <div className="grid">
        <p className="md:justify-self-end justify-self-center self-center text-xs">{ FormatFecha(match.time)}</p>
      </div>
      
    </article>
  ));
}
