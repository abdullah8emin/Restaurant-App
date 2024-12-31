import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        const response = await yelp.get('/search', {
            params: {
                term: searchTerm,
                location: 'Aydin',
                limit: 50,
            },
        });
        setResults(response.data.businesses);
    };
    useEffect(() => {
        searchApi('Kebap');
    }, []);

    return [searchApi, results];
}