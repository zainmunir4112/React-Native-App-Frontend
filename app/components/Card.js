import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import AppText from './AppText'

import colors from "../config/colors"
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Card({ title, subTitle, imageURL, onPress }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageURL }}></Image>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subtitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        marginBottom: 20,
        backgroundColor: colors.white,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20
    },
    image:{
        width: "100%",
        height: 200
    },
    subtitle: {
        fontWeight: "bold",
        color: colors.primary
    },
    title: {
        fontWeight: "bold",
        marginBottom: 7
    }
})
