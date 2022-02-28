import { View, Form, TextInput } from "react-native";

export default function Search(props) {
  return (
    <View>
      <TextInput
        type="text"
        name="countrySearch"
        id="countrySearch"
        onChange={props.onChange}
      />
    </View>
  );
}
