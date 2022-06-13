import {Text, TextInput, View, StyleSheet, Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

const defaultSettings = {
    name: "",
    address: "",
}

const saveSettings = async (data) => {
    await AsyncStorage.setItem("settings", JSON.stringify(data));
}

const loadSettings = async () => {
    const settings = await AsyncStorage.getItem("settings");
    if (settings !== null) {
        return JSON.parse(settings);
    }
    return defaultSettings;
}


const SettingsScreen = () => {
     const [name, setName] = useState(" ");
     const [address, setAddress] = useState(" ")

    const onSaveSettings = () => {
        global.settings = {
            name: name,
            address: address,
        }
        saveSettings(global.settings).then( () => {
            alert("saved");
        });
    };

    useEffect(() => {
        loadSettings().then((data) => {
            global.settings = data;
            setName(data.name);
            setAddress(data.address);
        });
    }, []);

    return (
      <View>
        <View>
            <Text style={styles.text} >Name</Text>
            <TextInput value={name} onChangeText={setName} style={styles.textinput} placeholder={"Enter your name"}/>
        </View>
        <View>
            <Text style={styles.text} >Address</Text>
            <TextInput value={address} onChangeText={setAddress} style={styles.textinput} placeholder={"Enter your address"}/>
        </View>
        <View style={styles.button}>
            <Button title="Save" onPress={onSaveSettings}/>
        </View>
      </View>

    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
    },
    textinput: {
        borderWidth: 1,
        backgroundColor: "#fff",
        fontSize: 20,
        padding: 10,
        marginHorizontal: 10,
    },
    button: {
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 20,
    }
})


export default SettingsScreen;