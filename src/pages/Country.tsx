import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import MoreCountries from "../components/MoreCountries";

const Country = () => {
  const navigate = useNavigate();
  const { code } = useParams();

  const COUNTRY_DETAILS = gql`
    {
        country(code: "${code}") {
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
  const { loading, error, data } = useQuery(COUNTRY_DETAILS);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <nav className="flex items-center gap-3 px-5 py-3 text-white bg-slate-800">
        <button onClick={() => navigate(-1)}>
          <img src="/chevron-left.svg" alt="" />
        </button>
        <h1 className="text-xl md:text-2xl">{data.country.name}</h1>
      </nav>
      <main className="flex flex-col w-full max-w-screen-xl px-12 m-auto md:p-12 py-14 text-slate-800">
        <div className="">
          <div className="text-5xl">{data.country.emoji}</div>
          <div className="text-2xl font-semibold md:text-3xl">
            {data.country.name} - {data.country.code}
          </div>
          <table className="w-full mt-4 md:w-fit">
            <tbody>
              <tr>
                <td>Native Name</td>
                <td>{data.country.native}</td>
              </tr>
              <tr>
                <td>Capital</td>
                <td>{data.country.capital ?? "-"}</td>
              </tr>
              <tr>
                <td>Currency</td>
                <td className="flex gap-2">
                  {data.country.currencies[0]
                    ? data.country.currencies.map((curr: string) => (
                        <div className="px-2 py-1 text-xs font-bold bg-blue-200 rounded-md w-fit">
                          {curr}
                        </div>
                      ))
                    : "-"}
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td className="flex gap-2">
                  {data.country.phones.map((phone: string) => (
                    <div className="px-2 py-1 text-xs font-bold bg-orange-200 rounded-md w-fit">
                      {phone}
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full m-auto my-12 border-b border-slate-400 md:w-1/2"></div>
        <MoreCountries />
      </main>
    </>
  );
};

export default Country;
