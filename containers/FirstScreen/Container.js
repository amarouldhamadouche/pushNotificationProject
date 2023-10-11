import { Text, View } from "react-native"

const FirstScreen = ({navigation})=>{
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
            FirstScreen container
          </Text>
        </View>
    )
}

export default FirstScreen