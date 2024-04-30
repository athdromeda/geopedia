import { useQuery } from "@apollo/client";
import { COUNTRIES } from "../pages/Home";
import CountryCardProps from "../types/CountryCard";
import CountryCard from "./CountryCard";

const MoreCountries = () => {
  const { loading, error, data } = useQuery(COUNTRIES);

  return (
    <>
      {!loading && !error && (
        <div>
          <h2 className="mb-4 text-xl font-bold">Explore more countries</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {/* return 3 random country cards */}
            {data.countries
              .slice(Math.floor(Math.random() * (data.countries.length - 3)))
              .slice(0, 3)
              .map((country: CountryCardProps) => (
                <CountryCard country={country} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MoreCountries;
