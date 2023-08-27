import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Text } from "react-native";

const ToplearnText = ({
    size,
    fontFamily,
    children,
    styles,
    color = "#000",
}) => {
    return (
        <Text
            style={[
                { fontFamily, fontSize: RFPercentage(size), color },
                styles,
            ]}
        >
            {children}
        </Text>
    );
};

export default ToplearnText;
