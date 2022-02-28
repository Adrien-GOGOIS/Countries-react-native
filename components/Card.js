import { Text, View, Image, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View className="card">
      <Image source={props.displayFlag} alt="Drapeau" style={styles.img} />
      <View className="card-body">
        <Text className="card-title" style={styles.description}>
          Country : {props.countryName}
        </Text>
        <Text style={styles.description}>Capital : {props.capitalName}</Text>
        <Text style={styles.description}>Continent : {props.regionName}</Text>
        <Text style={styles.description}>
          Population : {props.populationNum} habitants
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    Height: 50,
    Width: 50,
    textAlign: "center",
  },

  description: {
    fontSize: 25,
    textAlign: "center",
  },
});
