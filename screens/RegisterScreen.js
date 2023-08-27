import React from "react";
import Toast from "react-native-tiny-toast";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/shared/Screen";
import { registerUser } from "./../api/users";
import {
    ToplearnForm,
    ToplearnFormField,
    SubmitButton,
} from "../components/forms";
import { loadingToast, customToast } from "../utils/toasts";

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Name Nad Family Are Required"),
    email: Yup.string()
        .required("Required Field")
        .email("Email Is Not Valid"),
    password: Yup.string()
        .required("This Field Is Required")
        .min(4, "Password Must Be More Than 4 Char"),
    passwordConfirmation: Yup.string()
        .required("Repeat Password")
        .oneOf([Yup.ref("password"), null], "Both password and repeated must be the same"),
});

const RegisterScreen = ({ navigation }) => {
    const handleUserRegistration = async (user) => {
        try {
            loadingToast("Sign Up...");
            const status = await registerUser(user);

            if (status === 201) {
                //navigation
                Toast.hide();
                navigation.navigate("Login", { successRegister: true });
            } else {
                //show error
                Toast.hide();
                customToast("An Error Occurred");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <ToplearnForm
                initialValues={{
                    fullname: "",
                    email: "",
                    password: "",
                    passwordConfirmation: "",
                }}
                onSubmit={(user) => {
                    // console.log(user);
                    handleUserRegistration(user);
                }}
                validationSchema={validationSchema}
            >
                <ToplearnFormField
                    placeholder="Name And Family"
                    autoCorrect={false}
                    icon="account-circle"
                    name="fullname"
                    placeholderTextColor="royalblue"
                />
                <ToplearnFormField
                    placeholder="Email"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    name="email"
                    placeholderTextColor="royalblue"
                />
                <ToplearnFormField
                    placeholder="Password"
                    autoCorrect={false}
                    icon="onepassword"
                    name="password"
                    placeholderTextColor="royalblue"
                    secureTextEntry
                />
                <ToplearnFormField
                    placeholder="Repeat Password"
                    autoCorrect={false}
                    icon="onepassword"
                    name="passwordConfirmation"
                    placeholderTextColor="royalblue"
                    secureTextEntry
                />
                <View style={{ width: "60%" }}>
                    <SubmitButton title="Sign In" />
                </View>
            </ToplearnForm>
        </Screen>
    );
};

export default RegisterScreen;

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
