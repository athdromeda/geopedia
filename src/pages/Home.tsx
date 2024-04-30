import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import CountryCardProps from "../types/CountryCard";
import CountryCard from "../components/CountryCard";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export const COUNTRIES = gql`
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResult, setFilteredResult] = useState(data.countries);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setFilteredResult(
      data.countries.filter((country: CountryCardProps) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <main className="flex flex-col items-center w-full max-w-screen-xl px-12 m-auto md:p-12 py-14 text-slate-800">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading && <Loading />}
      {error && <Error />}
      <div className="grid w-full grid-cols-1 gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          filteredResult
            .slice(pageIndex * 6, pageIndex * 6 + 6)
            .map((country: CountryCardProps) => (
              <CountryCard country={country} />
            ))}
      </div>
      {!filteredResult[0] && <p>No match result.</p>}
      <Pagination
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        lastPageIndex={Math.floor(filteredResult.length / 6)}
      />
    </main>
  );
}

export default Home;
