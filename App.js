import React, { useState, useEffect } from "react";
import { I18nManager } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
// import getFonts from "./utils/fonts";
import StackNavigator from "./containers/StackNavigator";
import { store } from "./store";

//* Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

        return (
            <AnimatedSplash
                translucent={true}
                isLoaded={loading}
                logoImage={require("./assets/logo.png")}
                backgroundColor={"#262626"}
                logoHeight={250}
                logoWidth={250}
            >
                <NavigationContainer>
                    <Provider store={store}>
                        <StackNavigator />
                    </Provider>
                </NavigationContainer>
            </AnimatedSplash>
        );
    
};

export default App;
