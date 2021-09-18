import { requests } from "../requests";

import axios from 'axios'

export function CreateCandidat(data) {
    return axios.post(requests.candidatapi, data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}