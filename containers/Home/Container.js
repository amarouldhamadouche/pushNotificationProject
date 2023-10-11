import { View, Text } from "react-native"

const HomeContainer = ({navigation})=>{
  return (
    <View
      style={{
        flex: 1, 
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text
        style={{
            fontSize: 20,
            color: "black"
        }}
      >
        Home container
      </Text>
    </View>
  )
}

export default HomeContainer