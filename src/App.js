import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const countries = [
    {
      name: "United States",
      cities: ["New York", "Los Angeles", "Chicago", "Houston"]
    },
    {
      name: "Canada",
      cities: ["Toronto", "Montreal", "Vancouver", "Calgary"]
    },
    {
      name: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham", "Glasgow"]
    },
    {
      name: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <p>Country</p>
        <select
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        >
          {countries.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <p>City</p>
        <select onChange={(e) => console.log(e.target.value)}>
          {countries[selectedCountry]?.cities.map((city, index) => {
            return (
              <option key={index} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
