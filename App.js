import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import Search from "./components/Search";

export default function App() {
  const [state, setState] = useState();

  const [selectedCountry, setSelectedCountry] = useState("France");

  // useEffect(() => {
  //   getCountry(selectedCountry);
  // }, []);

  useEffect(() => {
    console.log("FETCH", selectedCountry);
    if (selectedCountry !== undefined) {
      fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
        .then((res) => res.json())
        .then((res) => {
          setState(res);
          console.log("RES", res[0].flags.png);
        });
    }
  }, [selectedCountry]);

  const getCountry = (country) => {
    setSelectedCountry(country);
  };

  const onInputChange = (e) => {
    console.log("INPUT", e.target.value);
    setSelectedCountry(e.target.value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Country Selector</Text>
      {/* <View>
          <Button onClick={() => this.getCountry("france")}>France</Button>
          <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        </View> */}
      <Search onChange={onInputChange} />
      {state !== undefined && (
        <Card
          source={state[0].flags.png}
          countryName={state[0].name.common}
          capitalName={state[0].capital}
          regionName={state[0].region}
          populationNum={state[0].population}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});
