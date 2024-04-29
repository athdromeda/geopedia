import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import Error from "../components/Error";

type CountryData = {
  __typename: "Country";
  code: string;
  name: string;
  emoji: string;
  emojiU: string;
  capital: string;
  currency: string;
};

const COUNTRIES = gql`
  {
    countries {
      code
      name
      emoji
      emojiU
      capital
      currency
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(COUNTRIES);

  return (
    <main className="flex flex-col items-center w-full p-12">
      <Header />
      {loading && <Loading />}
      {error && <Error />}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.countries.map((country: CountryData) => (
            <Link
              to={"/country/" + country.code}
              className="p-4 border rounded-lg shadow-md cursor-pointer border-slate-200 hover:bg-blue-400 hover:text-white"
            >
              <h2 className="text-lg">
                {country.emoji} {country.name}
              </h2>
              <div className="flex justify-between w-full mt-2">
                <h2>Capital: {country.capital}</h2>
                <h2>Currency: {country.currency}</h2>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}

const Header = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4 mb-8">
      <h1 className="text-4xl font-bold">GeoPedia</h1>
      <input
        type="text"
        placeholder="Type the country name..."
        className="px-6 py-3 border rounded-full border-slate-700"
      />
    </div>
  );
};

export default Home;
