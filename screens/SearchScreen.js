import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResutsList from '../components/ResutsList';


export default function SearchScreen() {
    const [searchApi, results] = useResults();

    const filterResultsByPrice = (price) => {   
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <ScrollView>
            <SearchBar />
            <ResutsList title='Ucuz Restoranlar' results={filterResultsByPrice('₺')}/>
            <ResutsList title='Uygun Restoranlar' results={filterResultsByPrice('₺₺')}/>
            <ResutsList title='Pahalı Restoranlar' results={filterResultsByPrice('₺₺₺')}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})