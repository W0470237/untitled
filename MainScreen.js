import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ControlMasterScreen from "./ControlMasterScreen";
import ControlChildScreen from "./ControlChildScreen";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Master" component={ControlMasterScreen} options={{headerShown: false}} />
            <Stack.Screen name="Child" component={ControlChildScreen} />
        </Stack.Navigator>
    )
}

export default MainScreen;