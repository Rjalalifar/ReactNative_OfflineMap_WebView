import React from "react";
import { View, Text, StyleSheet, Image,ScrollView } from "react-native";
import ToplearnText from "./ToplearnText";
import { numberWithCommas } from "../../utils/price";

const Card = ({ title, price, teacher, time, image ,courseInfo = null }) => {
    return (
        <View style={styles.card}>
            <Image
                resizeMode="contain"
                source={{
                    uri: `http://192.168.227.1:8099/${image}`,
                }}
                style={styles.courseImage}
            />
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.courseDetails}>
                    <Text style={styles.price}>
                        {`Damage Cost Is : ${numberWithCommas(price)}`}
                    </Text>
                    <Text style={styles.time}>Time : {time}</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.teacher}> Submited By : {teacher}</Text>
                </View>
            </View>
            {courseInfo ? (
                <View>
                    <ToplearnText fontFamily="yekan" size="2.5">
                        توضیحات  :
                    </ToplearnText>
                    <ScrollView>
                        <ToplearnText
                            fontFamily="ih"
                            size="1.7"
                            styles={styles.courseInformation}
                        >
                            {courseInfo}
                        </ToplearnText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
        overflow: "hidden",
    },
    courseImage: {
        width: "100%",
        height: 300,
    },
    courseDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    courseInformation: {
        textAlign: "justify",
        marginVertical: 10,
        lineHeight: 25,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    userContainer: {
        marginVertical: 10,
    },
    title: {
        marginBottom: 7,
        alignSelf: "center",
    },
    teacher: {
        alignSelf: "center",
    },
});
