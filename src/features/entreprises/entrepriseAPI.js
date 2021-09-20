import { requests } from "../requests";

import axios from 'axios'

export function CreateEntreprise(data) {
    return axios.post(requests.entrepriseapi, data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
