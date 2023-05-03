import axios from 'axios';

const url = 'https://sistemas.anac.gov.br/SACI/';
const METHODS = {
    POST: 'post',
    GET: 'get',
    PUT: 'put',
    DELETE: 'delete'
};

async function login() {
    const oldLogin = 'Login.asp?versaoantiga=1'

    const login = axios({
        method: METHODS.POST,
        url: url + oldLogin,
        data:        
    })
}

async function main() {
    try {

    } catch (error) {

    }
}

main();