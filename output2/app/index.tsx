import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/mark.jpg")}
        style={{ width: 150, height: 200}}
      />
      <Text style={{ fontWeight: 'bold' }}>MARK ZUCKERBERG</Text>
      <Text>CEO META</Text>
    </View>
  );
}
