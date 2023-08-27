import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "./../components/shared/Screen";
import { customToast, loadingToast, successToast } from "./../utils/toasts";
import {
    ToplearnForm,
    ToplearnFormField,
    SubmitButton,
} from "../components/forms";
import { loginUser } from "../api/users";
import Toast from "react-native-tiny-toast";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("Please enter your username")
        .email("This email is not valid"),
    password: Yup.string()
        .required("Please enter your password")
        .min(4, "Password have to be more than 4 characters"),
});

const LoginScreen = ({ navigation, route }) => {
    useEffect(() => {
        if (route.params.successRegister)
            successToast("Sign in was successfull");
    }, []);

    const handleUserLogin = async (user) => {
        try {
            loadingToast("Connecting ...");
            const status = await loginUser(user);
            if (status === 200) {
                Toast.hide();
                successToast("Login was successfull");
                // navigation.navigate("Home");
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Home" }],
                });
            } else {
                Toast.hide();
                customToast("Email or passworl was not valid");
            }
        } catch (err) {
            Toast.hide();
            console.log(err);
        }
    };

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <ToplearnForm
                initialValues={{ username: "", password: "" }}
                // onSubmit={() => navigation.navigate("Home")}
                onSubmit={(user) => {
                    handleUserLogin(user);
                }}
                validationSchema={validationSchema}
            >
                <ToplearnFormField
                    placeholder="email"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    name="username"
                    placeholderTextColor="royalblue"
                />
                <ToplearnFormField
                    placeholder="password"
                    autoCompleteType="password"
                    autoCorrect={false}
                    icon="onepassword"
                    name="password"
                    placeholderTextColor="royalblue"
                    secureTextEntry
                />
                <View style={{ width: "60%" }}>
                    <SubmitButton title="Login" />
                </View>
            </ToplearnForm>
        </Screen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40,
    },
});
