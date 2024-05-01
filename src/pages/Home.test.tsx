import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import Home, { COUNTRIES } from "./Home";

it("Should display loading when the data is in loading process", async () => {
  const mocks = [
    {
      delay: 30,
      request: {
        query: COUNTRIES,
      },
      result: {
        data: {
          countries: [
            {
              __typename: "Country",
              code: "",
              name: "",
              emoji: "",
              capital: "",
              currencies: "",
            },
          ],
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </MockedProvider>
  );

  expect(await screen.queryByText(/Loading Data.../i)).toBeVisible();
});

it("Should display error warning when the data is not fetched properly", async () => {
  const mocks = [
    {
      request: {
        query: COUNTRIES,
      },
      error: new Error("Error"),
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.queryByText(/Oops! Something went wrong.../i)).toBeVisible();
  });
});

it("Should display the country data properly", async () => {
  const mocks = [
    {
      delay: 30,
      request: {
        query: COUNTRIES,
      },
      result: {
        data: {
          countries: [
            {
              __typename: "Country",
              code: "AD",
              name: "Andorra",
              emoji: "🇦🇩",
              capital: "Andorra la Vella",
              currencies: "EUR",
            },
          ],
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.queryAllByText(/Andorra/i)[0]).toBeVisible();
  });
});
