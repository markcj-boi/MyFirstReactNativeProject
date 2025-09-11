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
     <Text style={{ fontWeight: 'bold', fontSize: 24,  textAlign: 'center' }}>COLLEGE OF COMPUTING AND INFORMATION SCIENCES</Text>
      <Image
        source={require("../assets/images/CCIS.png")}
        style={{ width: 350, height: 350}}
      />
      <Text>Developed by</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20,  textAlign: 'center' }}>MARK CJ BALATAYO</Text>
    </View>
  );
}
