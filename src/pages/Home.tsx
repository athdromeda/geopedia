import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import CountryCardProps from "../types/CountryCard";
import CountryCard from "../components/CountryCard";

const COUNTRIES = gql`
  {
    countries {
      code
      name
      emoji
      capital
      currencies
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(COUNTRIES);

  return (
    <main className="flex flex-col items-center w-full max-w-screen-xl px-12 m-auto md:p-12 py-14 text-slate-800">
      <Header />
      {loading && <Loading />}
      {error && <Error />}
      <div className="grid w-full grid-cols-1 gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.countries.map((country: CountryCardProps) => (
            <CountryCard country={country} />
          ))}
      </div>
    </main>
  );
}

const Header = () => {
  return (
    <div className="relative items-center w-full gap-4 mb-8 max-h-80">
      <img src="/world.svg" alt="" className="object-contain w-full max-h-80" />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 py-6 text-center bg-gradient-to-t from-white to-transparent">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold md:text-5xl">GeoPedia</h1>
          <h2 className="text-lg md:text-xl text-slate-600">
            Explore countries in the world
          </h2>
        </div>
        <input
          type="text"
          placeholder="Type the country name..."
          className="w-full px-6 py-3 border rounded-full max-w-[500px] md:w-2/3 border-slate-300"
        />
      </div>
    </div>
  );
};

export default Home;
