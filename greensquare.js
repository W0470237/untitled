import {Pressable, StyleSheet, View} from "react-native";
import {Octicons} from "@expo/vector-icons";
import {useState} from "react";


const GreenSquare = ({ onPress, children }) => {
    const [color, setColor ] = useState("white");
    const colorPress = () => {
        setColor("red");
    }
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.greensquare,
                    {justifyContent: "center", alignItems: "center", backgroundColor: color}]} >
                {children}
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({

    greensquare: {
        width: 50,
        height:50,
        backgroundColor: 'green',
        margin: 5,
    }

});

export default GreenSquare