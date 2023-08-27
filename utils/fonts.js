import * as Font from "expo-font";

const getFonts = () =>
    Font.loadAsync({
        yekan: require("../assets/fonts/byekan.ttf"),
        ih: require("../assets/fonts/ih.ttf"),
    });

export default getFonts;
