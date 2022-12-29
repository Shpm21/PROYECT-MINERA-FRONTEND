import axios from 'axios';
import { ENDPOINT } from '../config/config';

interface Credentials {
    rut: string;
    password: string;
}
export const login = async (credentials: Credentials) => {
    const url = `${ENDPOINT}/login`;
    const response = await axios.post(url, credentials)
    return response.data;
}
