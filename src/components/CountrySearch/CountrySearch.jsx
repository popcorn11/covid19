import React, {useState, useEffect} from 'react';

import styles from './CountrySearch.module.css';
import {countries} from '../../api';

const CountrySearch = ({chooseCountry}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await countries());
        }
        fetchCountries();
    }, [setFetchedCountries]);

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <span className="fa fa-search"></span>

                <select name="searchCtr" id="srch" defaultValue="" onChange={(e) => chooseCountry(e.target.value)}>
                    <option value="Global">Global</option>
                    {fetchedCountries.map((country, i) => (<option key={i} value={country}>{country}</option>))}
                </select>
            </div>
             
                
        </div>
    )
}


export default CountrySearch;