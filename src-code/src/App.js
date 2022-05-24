import React from 'react';

import Card from './components/Card/Card';
import CountrySearch from './components/CountrySearch/CountrySearch';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({data: data});
    }

    chooseCountry = async (country) => {
        const data = await fetchData(country);
        this.setState({data: data, country: country});
    }

    render() {
        const {data} = this.state;

        return (
            <div className={styles.container}>
                <CountrySearch chooseCountry={this.chooseCountry}/>
                <Card data={data}/>
            </div>
        )
    }
}


export default App;