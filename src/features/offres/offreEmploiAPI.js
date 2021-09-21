import { requests } from "../requests";

import axios from 'axios'

export function CreateOffreEmploi(data) {
    return axios.post(requests.offreEmploiapi, data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}