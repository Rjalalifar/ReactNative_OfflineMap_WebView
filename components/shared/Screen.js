import React from "react";
import { ScrollView,View, StyleSheet,StatusBar } from "react-native";

const Screen = ({ children, style }) => {
    return <View style={[styles.screen, style]}>{children}</View>;
};

export default Screen;

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
    screen: {
        marginTop:statusBarHeight,
        flex: 1,
    },
});
