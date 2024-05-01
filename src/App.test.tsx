import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import { COUNTRIES } from "./pages/Home";

const mocks = [
  {
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

it("Should show title 'GeoPedia'", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </MockedProvider>
  );
  const title = screen.queryAllByText(/GeoPedia/i);
  expect(title[0]).toBeVisible();
});

it("Should show subtitle 'Explore countries in the world'", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </MockedProvider>
  );
  const subtitle = screen.queryByText(/Explore countries in the world/i);
  expect(subtitle).toBeVisible();
});

it("Should show search input field", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </MockedProvider>
  );
  const subtitle = screen.queryByPlaceholderText(/Type the country name.../i);
  expect(subtitle).toBeVisible();
});
