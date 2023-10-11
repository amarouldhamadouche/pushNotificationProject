import { Text, View } from "react-native"

const SecondScreen = ()=>{
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
            SecondScreen container
          </Text>
        </View>
    )
}

export default SecondScreen