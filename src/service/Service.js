import axios from 'axios';

const BOUQUET_API_BASE_URL = "http://localhost:8080/bouquet";

class Service {

    getBouquets(){
        return axios.get(BOUQUET_API_BASE_URL +'/bouquets' );
    }

    createBouquet(bouquet){
        return axios.post(BOUQUET_API_BASE_URL, bouquet);
    }

    getBouquetById(bouquetId){
        return axios.get(BOUQUET_API_BASE_URL + '/' + bouquetId);
    }

    updateBouquet(bouquet, bouquetId){
        return axios.put(BOUQUET_API_BASE_URL + '/' + bouquetId, bouquet);
    }
    deleteBouquet(bouquetId){
        return axios.delete(BOUQUET_API_BASE_URL + '/' + bouquetId);
    }

}

export default new Service()