import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen, LoginScreen, RegisterScreen, CourseDetailsScreen } from "../screens";
import TabsNavigator from "./TabsNavigator";
import OfflineMap from "../screens/OfflineMap";


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen   name="Login"  component={LoginScreen} initialParams={{ successRegister: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={TabsNavigator} />
            <Stack.Screen   name="AccDetail"   component={CourseDetailsScreen} />
            <Stack.Screen   name="OfflineMap"   component={OfflineMap} screenOptions={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
