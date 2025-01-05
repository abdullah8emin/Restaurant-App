import { StyleSheet, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResutsList from '../components/ResutsList';


export default function SearchScreen() {
    const [searchApi, results, errorMessage] = useResults();
    const [term, setTerm] = useState('');

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <ScrollView>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : <>
                {results.length === 0 ? <></> : <>
                    <ResutsList title='Ucuz Restoranlar' results={filterResultsByPrice('₺')} />
                    <ResutsList title='Uygun Restoranlar' results={filterResultsByPrice('₺₺')} />
                    <ResutsList title='Pahalı Restoranlar' results={filterResultsByPrice('₺₺₺')} /></>}</>}


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
    }
})