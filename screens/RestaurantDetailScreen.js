import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function RestaurantDetail({ route }) {
    const { item } = route.params;

    return (
        <View style={styles.view}>
            <Text style={[styles.text,{ fontSize: 17, fontWeight: 'bold' }]}>{item.name}</Text>
            <Text style={styles.text}>Adres: {item.location.display_address} {item.location.city}</Text>
            <Text style={styles.text}>Telefon: {item.display_phone}</Text>
            <Text style={styles.text}>Yemek Türleri: {item.categories.map(category => category.title).join(', ')}</Text>
            <Image style={styles.image} source={item.image_url ? { uri: item.image_url } : null} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        borderRadius: 25,
        margin: 10,
    },
    view: {
        marginVertical: 10,
    },
    text:{
        textAlign: 'center',
    }
})