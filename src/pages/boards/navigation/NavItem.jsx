import React from 'react'
import { useSelector } from 'react-redux';
import { selectautheduser } from '../../../features/users/userSlice';

const NavItem = (props) => {

    const TheIcon = props.icon; 

    const user = useSelector(selectautheduser)


    return (
            <>
            {
                user.__t === props.role &&
            <div className="navigationitem">
                {props.children}
                <TheIcon className='navitem-icon' {...props} />
                <span>{props.text}</span>
            </div>}
            </>
    
    )
}

export default NavItem
