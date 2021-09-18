import { requests } from "../requests";

import axios from 'axios'

export function Login(data) {
    return axios.post(requests.userapi+'/signin', data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}