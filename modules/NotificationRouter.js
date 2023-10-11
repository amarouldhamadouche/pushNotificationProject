import { navigate } from "./RootNavigation"

export const NotificationRouter = (action)=>{
    if(action == "firstScreen"){
      navigate("FirstScreen")
    }else if(action == "secondScreen") {
      navigate("SecondScreen")  
    }
}