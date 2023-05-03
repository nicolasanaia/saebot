import axios from 'axios';
import { CREDENTIALS } from './anacCredentials';

const url = 'https://sistemas.anac.gov.br/SACI/';
const METHODS = {
    POST: 'post',
    GET: 'get',
    PUT: 'put',
    DELETE: 'delete'
};

async function login() {
    const oldLogin = 'Login.asp?versaoantiga=1'

    axios({
        method: METHODS.POST,
        url: url + oldLogin,
        data: {
            acao: 'VL',
            txtLogin: CREDENTIALS.LOGIN,
            txtSenha: CREDENTIALS.PASSWORD,
            x: 6,
            y: 6
        }    
    })
}

async function main() {
    try {
        await login();

        
    } catch (error) {

    }
}

main();