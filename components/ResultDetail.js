import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ResultDetail({ item }) {

    

    return (
        <View style={styles.view} >
            {item.is_closed ? <FontAwesome style={styles.icon} name="ban" size={24} color="black" /> : null}
            <Image style={styles.image} source={item.image_url ? { uri: item.image_url } : null} />
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>Puan: {item.rating} {"\n"}Değerlendirme sayisi: {item.review_count}</Text>
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
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 5,
        borderRadius: 100,
        top: 10,
        right: 10,
    }
})