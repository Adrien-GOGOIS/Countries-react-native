import { Text, View, Image, StyleSheet } from "react-native";

export default function Card(props) {
  console.log("SOURCE", props.source);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.description}>Country : {props.countryName}</Text>
        <Text style={styles.description}>Capital : {props.capitalName}</Text>
        <Text style={styles.description}>Continent : {props.regionName}</Text>
        <Text style={styles.description}>
          Population : {props.populationNum} habitants
        </Text>
      </View>
      <View style={styles.container}>
        <Image
          source={{ uri: props.source }}
          alt="Drapeau"
          style={styles.img}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  img: {
    height: 200,
    width: 300,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  description: {
    fontSize: 25,
  },
});
