import Image from "next/image";
import { FormatFecha } from "../components/FormatFecha";
import CustomImage from "../components/CustomImage";
const url = 'https://csgo-matches-and-tournaments.p.rapidapi.com/upcoming_matches?page=1&limit=10';
const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
    }
  };

const fetchUpcoming = () => {
  return fetch(url, options).then((data) => data.json());
};


export default async function ListOfUpcoming() {
  const upcoming = await fetchUpcoming();
  return upcoming.data.map((match) => (
    <article
      key={match.id}
      className="max-w-sm min-h-full rounded shadow-lg text-center bg-neutral-100 p-2 grid content-between"
    >
      <div className="grid grid-cols-2 gap-1">
        <p>{match.event.title}</p>
        <p>{FormatFecha(match.play_at)}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 justify-center">
        <div className="grid">
          <CustomImage        
            src={match.team1.image_url}    
            w={48}
            h={48}       
            alt={match.team1.title}
          />
          <p>{match.team1.title}</p>
        </div>
        <p className="self-center text-2xl ">vs</p>
        <div className="grid">
        <CustomImage        
            src={match.team2.image_url} 
            w={48}
            h={48}          
            alt={match.team2.title}
          />
          <p>{match.team2.title}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <p className="justify-self-end">{match.location}</p>
        <p className="justify-self-start">{match.match_kind.title}</p>
      </div>
    </article>
  ));
}