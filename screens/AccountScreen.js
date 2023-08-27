import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Screen from "./../components/shared/Screen";
import Icon from "../components/shared/Icon";
import ItemSeparator from "./../components/shared/ItemSeparator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToplearnText from "./../components/shared/ToplearnText";

const AccountScreen = ({ navigation }) => {
    const [getImage, setImage] = useState(null);

    useEffect(() => {
        const loadingImage = async () => {
            const imageUri = await AsyncStorage.getItem("Image");
            if (imageUri !== null) {
                setImage(imageUri);
            }
        };
        loadingImage();
    }, []);

    const user = useSelector((state) => state.user);

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
        navigation.dispatch(StackActions.replace("Welcome"));
    };

    const pickImage = async () => {
        let result = await launchCamera({
            quality: 1,
        });

        console.log(JSON.stringify(result.assets[0].uri));

        if (!result.cancelled) {
            await AsyncStorage.setItem("Image", result.assets[0].uri);
            setImage(result.assets[0].uri);
        }
    };

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <TouchableOpacity onPress={pickImage}>
                    {getImage ? (
                        <Image
                            source={{ uri: getImage }}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            style={styles.image}
                            source={require("../assets/favicon.png")}
                        />
                    )}
                </TouchableOpacity>
                <View style={styles.details}>
                    <ToplearnText fontFamily="ih" size="2">
                        {user.fullname}
                    </ToplearnText>
                    <ToplearnText
                        fontFamily="yekan"
                        size="1.5"
                        styles={styles.subTitle}
                    >
                        {user.email}
                    </ToplearnText>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.settings}>
                    <Icon name="settings" backgroundColor="tomato" />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={10} />
            <TouchableHighlight underlayColor="#f8f4f4" onPress={handleLogout}>
                <View style={styles.container}>
                    <Icon name="logout" backgroundColor="tomato" />
                    <View style={styles.details}>
                        <ToplearnText fontFamily="ih" size="2">
                            خروج از حساب کاربری
                        </ToplearnText>
                    </View>
                </View>
            </TouchableHighlight>
        </Screen>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    details: {
        marginLeft: 10,
        justifyContent: "center",
    },
    subTitle: {
        color: "#6e6969",
    },
    settings: {
        alignSelf: "center",
        marginLeft: 20,
    },
});
