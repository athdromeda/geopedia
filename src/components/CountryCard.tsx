import { Link } from "react-router-dom";
import CountryCardProps from "../types/CountryCard";

const CountryCard = ({ country }: { country: CountryCardProps }) => {
  return (
    <Link
      key={country.code}
      to={"/country/" + country.code}
      className="px-5 py-4 border rounded-lg shadow-md cursor-pointer group border-slate-200 hover:bg-slate-800 hover:text-white hover:shadow-none"
    >
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg font-semibold">
          {country.emoji} {country.name}
        </h2>
        <img
          src="/arrow-right.svg"
          alt=""
          className="hidden group-hover:block size-5"
        />
      </div>
      <div className="flex justify-between w-full mt-2 text-slate-500 group-hover:text-white">
        <h2>Capital: {country.capital}</h2>
        <h2>Currency: {country.currencies[0]}</h2>
      </div>
    </Link>
  );
};

export default CountryCard;
