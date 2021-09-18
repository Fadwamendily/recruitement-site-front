import React from 'react'
import '../../../assets/css/navigation.css'
import { MdWork } from 'react-icons/md'
import { ImUserTie } from 'react-icons/im'
import { RiSettings2Fill } from 'react-icons/ri'
import NavItem from './NavItem'
import { useSelector } from 'react-redux'
import { selectautheduser } from '../../../features/users/userSlice'

const Navigation = (props) => {

    

    return (
        <div class='navigation'  >
            
                {props.children}

                < NavItem role='admin'  {...props} icon={MdWork} text='Offres' />
                < NavItem role='entreprise' {...props} icon={ImUserTie} text='Condidates' />
                < NavItem role='condidat' {...props} icon={RiSettings2Fill} text='settings' />

        </div>
    )
}

export default Navigation