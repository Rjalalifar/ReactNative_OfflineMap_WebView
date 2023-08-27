import React, { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import CustomButton from "../components/shared/CustomButton";
import { StackActions, useNavigationState } from "@react-navigation/native";
import {
    Alert,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    BackHandler,
} from "react-native";
import ToplearnText from "./../components/shared/ToplearnText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { userAction } from "../actions";
import { decodeToken } from "./../utils/token";
import { customToast } from "./../utils/toasts";

const confirmationAlert = () => {
    return Alert.alert(
        "ارتباط با سرور",
        `برای استفاده از اپلیکیشن باید به اینترنت متصل باشید`,
        [
            {
                text: "باشه",
                onPress: BackHandler.exitApp,
            },
        ],
        { cancelable: false }
    );
};

const WelcomeScreen = ({ navigation }) => {
    const screenIndex = useNavigationState((state) => state.index);
    const dispatch = useDispatch();

    useEffect(() => {
        let currentCount = 0;

        if (screenIndex <= 0) {
            BackHandler.addEventListener("hardwareBackPress", () => {
                if (currentCount === 1) {
                    BackHandler.exitApp();
                    return true;
                }

                currentCount += 1;
                customToast("Two touch for logout");

                setTimeout(() => {
                    currentCount = 0;
                }, 1000);

                return true;
            });
        }
    }, []);

    useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch();
            if (!state.isConnected) confirmationAlert();
            else {
                const token = await AsyncStorage.getItem("token");
                const userId = JSON.parse(await AsyncStorage.getItem("userId"));

                if (token !== null && userId !== null) {
                    const decodedToken = decodeToken(token);

                    dispatch(userAction(decodedToken.user));

                    if (decodedToken.user.userId === userId)
                        navigation.dispatch(StackActions.replace("Home"));
                    else {
                        await AsyncStorage.removeItem("token");
                        await AsyncStorage.removeItem("userId");
                        navigation.navigate("Login");
                    }
                }
            }
        };
        checkForNet();
    }, []);

    return (
        <ImageBackground
            source={require("../assets/bg1.jpg")}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                />
                <ToplearnText
                    fontFamily="ih"
                    size="2"
                    styles={styles.firstText}
                >
                    Emergency Oprating Page
                </ToplearnText>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Login"
                    color="royalblue"
                    onPress={() => navigation.navigate("Login")}
                />
                <CustomButton
                    title="Sign Up"
                    onPress={() => navigation.navigate("Register")}
                />
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
    },
    firstText: {
        top: 25,
        color: "tomato",
    },
    logo: {
        width: 260,
        height: 190,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
});
