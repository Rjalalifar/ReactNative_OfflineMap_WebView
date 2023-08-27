import AsyncStorage from "@react-native-async-storage/async-storage";

import http from "./";

export const registerUser = async (user) => {
    try {
        const { status } = await http.post(
            `${http.url}/register`,
            JSON.stringify(user)
        );
        console.log(status);
        return status;
    } catch (err) {
        console.log(err);
    }
};

export const loginUser = async (user) => {

    console.log(user);
    try {
        const { data, status } = await http.post(
            `${http.url}/users/login/`,
            JSON.stringify(user)
        );
        // console.log(data);
        console.log(status);
        await AsyncStorage.setItem("token", JSON.stringify(data.token));

        await AsyncStorage.setItem("userId", JSON.stringify(data._id));
        return status;
    } catch (err) {
        console.log(err);
    }
};
