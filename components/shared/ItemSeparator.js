import React from "react";
import { View, StyleSheet } from "react-native";

const ItemSeparator = ({ height = 1 }) => {
    return <View style={[styles.separator, { height }]} />;
};

export default ItemSeparator;

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        backgroundColor: "gray",
    },
});
