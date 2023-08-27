import Toast from "react-native-tiny-toast";
import { RFPercentage } from "react-native-responsive-fontsize";

export const successToast = (message) => {
    Toast.showSuccess(message, {
        position: Toast.position.CENTER,
        textStyle: {
            fontFamily: "yekan",
            fontSize: RFPercentage("1.5"),
        },
        shadow: true,
    });
};

export const loadingToast = (message) => {
    Toast.showLoading(message, {
        position: Toast.position.CENTER,
        textStyle: {
            fontFamily: "yekan",
            fontSize: RFPercentage("1.5"),
        },
        shadow: true,
    });
};

export const customToast = (message) => {
    Toast.show(message, {
        position: Toast.position.BOTTOM,
        textStyle: {
            fontFamily: "yekan",
            fontSize: RFPercentage("1.5"),
        },
        shadow: true,
    });
};
