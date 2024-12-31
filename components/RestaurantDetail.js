import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function RestaurantDetail({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.view}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
            <Image style={styles.image} source={item.image_url ? { uri: item.image_url } : null} />
            <Text>Puan: {item.rating} {"\n"}Değerlendirme sayisi: {item.review_count}</Text>
            <Text>Adres: {item.location.display_address} {item.location.city}</Text>	
            <Text>Telefon: {item.display_phone}</Text>
            <Text>Yemek Türleri: {item.categories.map(category => category.title).join(', ')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    view: {
        marginVertical: 10,
        marginLeft: 10,
    }
})