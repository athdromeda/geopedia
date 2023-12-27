import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

const baseUrl = "https://restcountries.com/v3.1"

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/all`).then(
      response => setCountries(response.data)
    )
  }, [])

  return (
    <>
      <h1>GeoPedia</h1>
      <div>
        {countries.map(country => <Card
          key={country.name.common}
          name={country.name.common}
          flagUrl={country.flags.svg}
          region={country.region}
        />)}
      </div>
    </>
  )
}

export default App
