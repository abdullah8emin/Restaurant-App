import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.background}>
            <Feather style={styles.icon} name="search" size={24} color="black" />
            <TextInput style={styles.textInput}
                placeholder='Ara'
                autoCorrect={false}
                autoCapitalize='none'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        border: 1,
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
    },
    textInput: {
        border: 1,
        borderRadius: 300,
        height: 50,
    },
    icon: {
        marginHorizontal: 10,
    },
})