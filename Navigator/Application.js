import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstScreen, HomeContainer, SecondScreen } from "../containers";
import { useEffect } from "react";
import NotificationHandler from "../modules/NotificationHandler";
import { navigationRef } from "../modules/RootNavigation";

const Stack = createNativeStackNavigator()
NotificationHandler.setBackgroundMessageHandler()

const ApplicationNavigator = ()=>{
   
    useEffect(()=>{
      getDeviceToken()
      NotificationHandler.setupInitialNotification()
      NotificationHandler.setupOnNotificationOpenedApp()

      const unsubscribe = NotificationHandler.setupOnNotificationHandler()
      return unsubscribe;

    }, [])

    const getDeviceToken = async ()=>{
      const token = await NotificationHandler.getDeviceToken()
      console.log(token, "deviceToken")
    }

    return (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeContainer}/>
            <Stack.Screen name="FirstScreen" component={FirstScreen}/>
            <Stack.Screen name="SecondScreen" component={SecondScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator