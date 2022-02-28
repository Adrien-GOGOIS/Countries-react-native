import { Text, View, Image } from "react-native";

export default function Card(props) {
  return (
    <View className="card">
      <Image src={props.displayFlag} alt="Drapeau" />
      <View className="card-body">
        <Text className="card-title">Country : {props.countryName}</Text>
        <Text>Capital : {props.capitalName}</Text>
        <Text>Continent : {props.regionName}</Text>
        <Text>Population : {props.populationNum} habitants</Text>
      </View>
    </View>
  );
}
