import MainScreen from "./MainScreen";
import SettingsScreen from "./SettingsScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function App() {

  return (
     <NavigationContainer>
         <Tab.Navigator initialRouteName="Main">
             <Tab.Screen name="Main" component={MainScreen}
                         options={{
                             tabBarIcon: ({focused, color, size}) => (
                                 <Ionicons name="home" color={color} size={size} />
                             )
                         }}/>
             <Tab.Screen name="Settings" component={SettingsScreen}
                         options={{
                             tabBarIcon: ({focused, color, size}) => (
                                 <Ionicons name="settings" color={color} size={size} />
                             )
                         }}/>
         </Tab.Navigator>
     </NavigationContainer>
  );
}



