import React, { useEffect } from 'react'
import { Row, Col  } from 'antd';
import { useSelector } from 'react-redux';
import { selectsingleoffre } from '../../features/offres/offreEmploiSlice';
import moment from 'moment'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';

import './single.css'
import { selectautheduser, selectuser } from '../../features/users/userSlice';

const SinglePage = () => {
    const user = useSelector(selectuser)

const offre=useSelector(selectsingleoffre)


    return (
        <div>

            <Row  >
                <Col span={24}>image maps</Col>
            </Row>
            <hr/>
            <Row>
                <Col span={8} ><img src={'http://localhost:5000/getfile/' + offre.entreprise.avatar} alt=""  className='img'/></Col>
                <Col span={8}><h4>{offre.entreprise.nom}</h4></Col>

              {(user.__t==='condidat')&& <Col span={8}><button className="btn btn-primary">postuler</button></Col>}
               {(user.__t==='entreprise')&& <Col span={8}><button className="btn btn-primary">Update</button></Col>}

            </Row>
            <Row>
                <Col span={24}><b>{offre.poste}</b></Col>
            </Row>
            <Row>
                <Col span={24}>{offre.description}</Col>
            </Row>
            <hr/>
            <Row>
                <Col span={8}>{moment(offre.createdAt).format('DD-MM-YYYY')}</Col>
                <Col span={8}>{offre.type_contrat}</Col>
                <Col span={8}>{offre.lieu} </Col>
            </Row>
        </div>
    )
}

export default SinglePage
