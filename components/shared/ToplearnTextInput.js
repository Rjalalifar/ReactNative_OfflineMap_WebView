import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ToplearnTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text} {...otherProps} />
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={15}
                    color="#6e6969"
                    style={styles.icon}
                />
            )}
        </View>
    );
};

export default ToplearnTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        borderRadius: 15,
        flexDirection: "row",
        width: "90%",
        marginVertical: 7,
        padding: 10,
    },
    icon: {
        marginLeft: 10,
        alignSelf: "center",
    },
    text: {
        fontSize: 16,
        fontFamily: "yekan",
        color: "#0c0c0c",
        textAlign: "center",
        width: "90%",
    },
});
