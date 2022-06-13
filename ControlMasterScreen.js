import {Text, View, StyleSheet} from "react-native";
import GreenSquare from "./greensquare";
import {Octicons} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";

const ControlMasterScreen = ({ navigation }) => {

    const buttonPress = () => {
        navigation.navigate('Child')
    };

    return (
        <View style={styles.container}>
            <Text>Address Book</Text>
            <View style={{flexDirection: 'row'}}>
                <GreenSquare onPress={buttonPress}>
                    <Octicons name="smiley" size={40} color="green" />
                </GreenSquare>
            </View>
            <View style={{flexDirection: 'row'}}>
                <GreenSquare>
                    <Octicons name="bug" size={40} color="white" />
                </GreenSquare>
            </View>
            <View style={{flexDirection: 'row'}}>
                <GreenSquare>
                    <Octicons name="flame" size={40} color="white" />
                </GreenSquare>
            </View>
            <View style={{flexDirection: 'row'}}>
                <GreenSquare>
                    <Octicons name="pencil" size={40} color="white" />
                </GreenSquare>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#888',
        width: 250,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ControlMasterScreen;