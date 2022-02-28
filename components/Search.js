import { View, Form, TextInput, StyleSheet } from "react-native";

export default function Search(props) {
  return (
    <View style={styles.container}>
      <TextInput
        type="text"
        name="countrySearch"
        id="countrySearch"
        onChange={props.onChange}
        style={styles.input}
        placeholder="Enter a country"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "rgba(50, 150, 250, 0.7)",
    width: "25%",
    textAlign: "center",
    height: 30,
    marginTop: 30,
    marginBottom: 30,
  },
});
