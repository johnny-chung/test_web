import camelcaseKeys from './camelcase-keys/index';
import 'whatwg-fetch';

const XPress = {};
const baseUrl = 'http://localhost:3000/api';


XPress.getItems = async (term, subUrl) => {
    const url = `${baseUrl}/${subUrl}/${term}`;
    //alert(url);
    try {
        const response = await fetch (url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return camelcaseKeys(jsonResponse.results);
        }
    } catch (error) {
        console.log(error)
    }
}


export default XPress;