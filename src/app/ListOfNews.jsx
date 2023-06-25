import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FormatFecha } from "./components/FormatFecha";

const url = "https://hltv-api.vercel.app/api/news.json";
const options = {
  method: "GET",
};

const fetchNews = () => {
  return fetch(url, options).then((data) => data.json());
};

export default async function ListOfNews() {
  const newness = await fetchNews();
  return newness && newness.map((news) => (
    <article
      key={news.link}
      className="max-w-xl h-90 min-h-fullshadow-lg text-center text-white p-5 grid h-full w-full bg-slate-800 rounded-md hover:scale-105 duration-300"
    >
      <div className="grid text-sm text-start text-gray-400 uppercase">
        {FormatFecha(news.time)}
      </div>
      <div className="grid md:text-2xl text-lg font-bold text-start">
        <h2>
          {news.title}
        </h2>
      </div>
      <div className="grid md:text-xl text-sm font-semibold text-start text-gray-400">
        {news.description}
      </div>
      <div className="flex gap-1 justify-items-start hover:text-blue-500 ">
        
          <Link
            href={news.link}
            target="_blank"
            className="text-start uppercase self-center"
          >
            Más información
          </Link>
        <AiOutlineArrowRight className="self-center"/>
      </div>
    </article>
  ));
}
