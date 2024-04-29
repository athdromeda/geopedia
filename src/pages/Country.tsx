import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

type CountryDetails = {
  __typename: "Country";
  awsRegion: string;
  capital: string;
  code: string;
  currencies: string[];
  currency: string;
  emoji: string;
  name: string;
  native: string;
  phone: string;
  phones: string[];
};

const Country = () => {
  const { code } = useParams();

  const COUNTRIES = gql`
    {
        country(code: "${code}") {
            awsRegion
            capital
            code
            currencies
            currency
            emoji
            name
            native
            phone
            phones
        }
    }
    `;
  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <main>
      <nav className="flex items-center gap-3 px-5 py-3 bg-blue-400">
        <Link to="..">
          <img src="/chevron-left.svg" alt="" />
        </Link>
        <h1 className="text-2xl">{data.country.name}</h1>
      </nav>
      <div className="p-6">
        <div className="text-5xl">{data.country.emoji}</div>
        <div className="text-3xl">
          {data.country.name} - {data.country.code}
        </div>
        <div className="">Native Name: {data.country.native}</div>
        <div className="">awsRegion: {data.country.awsRegion}</div>
        <div className="">Capital: {data.country.capital}</div>
        <div className="flex items-center gap-1">
          Currencies:
          {data.country.currencies.map((curr: string) => (
            <div className="px-2 py-1 text-sm font-bold bg-blue-200 rounded-md">
              {curr}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          Phone:
          {data.country.phones.map((phone: string) => (
            <div className="px-2 py-1 text-sm font-bold bg-blue-200 rounded-md">
              {phone}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Country;
