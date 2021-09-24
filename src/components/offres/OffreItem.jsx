import React from 'react'
import './offreitem.css'
import { BiMap } from 'react-icons/bi'
import { FaFileContract } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'

const OffreItem = ({ offre/* props offre itam data from table map as object 0 */ }) => {
    return (
        <div className='offreitem'  >
            <div className="offrehead">

                <img src={'http://localhost:5000/getfile/' + offre.entreprise.avatar} alt="" />
                <div className="details">
                    <span>{offre.poste}</span>
                    <h6>{offre.entreprise.nom}</h6>
                </div>

            </div>
            <hr />
            <div className="offrebody">
                {offre.description}
            </div>

            <div className="offrefooter">

                <div className="location" >
                    <div>
                        <FaRegCalendarAlt className='icons' />
                        <span>{moment(offre.createdAt).format('DD-MM-YYYY')}</span>
                    </div>
                </div>
                <div className="location" >
                    <div>
                        <BiMap className='icons' />
                        <span>{offre.lieu}</span>
                    </div>
                </div>

                <div className="typecontrat">
                    <div>
                        <FaFileContract className='icons' />
                        <span>{offre.type_contrat}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffreItem
