import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { NotificationRouter } from './NotificationRouter';

const setupOnNotificationHandler = () => {
    return  messaging().onMessage(remoteMessage => {
        NotificationRouter(remoteMessage.data.action)
        setTimeout(()=>{
          Alert.alert(`opened in state forground`);
        }, 100)
      });
}

const setupInitialNotification = async () => {
    messaging().getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        NotificationRouter(remoteMessage.data.action)
        setTimeout(()=>{
          Alert.alert(`opened in state quite`);
        }, 100)
      }
    });
}

const setupOnNotificationOpenedApp = ()=>{
   messaging().onNotificationOpenedApp(remoteMessage => {
    NotificationRouter(remoteMessage.data.action)
      setTimeout(()=>{
        Alert.alert(`opened in state background`);
      }, 100)
  });
}

const setBackgroundMessageHandler = ()=>{
  return messaging().setBackgroundMessageHandler(async () => {});
}

const getDeviceToken = async ()=>{
  await messaging().registerDeviceForRemoteMessages();
   return await messaging().getToken();
}

export default {setupInitialNotification, setBackgroundMessageHandler, setupOnNotificationHandler, setupOnNotificationOpenedApp, getDeviceToken}