import axios from 'axios';


const ApiClient = {

    getTeams(){
        return axios.get('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/');
    },

    getUsers(){
        return axios.get('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/');
    }
}



export default ApiClient;