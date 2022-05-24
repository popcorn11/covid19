import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    var tmpUrl = url;
    if(country){
        tmpUrl = url + "/countries/" + country;
    }
    if(country == "Global"){
        tmpUrl = url;
    }

    try{
        const {data: {confirmed, deaths, lastUpdate}} = await axios.get(tmpUrl);

        return {confirmed, deaths, lastUpdate};
    }
    catch (error){
    }
}

export const countries = async () => {
    try {
        const {data: {countries}} = await axios.get(url + "/countries");
        return countries.map(country => country.name);
    } catch (error) {
        console.log(error);
    }
}
