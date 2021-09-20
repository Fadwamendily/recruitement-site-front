import React from 'react'
import './offres.css'
import { AiFillPlusSquare } from 'react-icons/ai'
import { MdLocalPostOffice } from 'react-icons/md'
import MenuSiderItem from './MenuSiderItem'

const Sider = (props) => {
    return (
        <div className='offres-sider'  >
            <MenuSiderItem roles={['entreprise']} {...props} url='/create' icon={AiFillPlusSquare} text='Nouvelle offre' />
        </div>
    )
}

export default Sider