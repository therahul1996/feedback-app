import React, {useState} from 'react'
import user from '../img/user.png'
import grid from '../img/grid.png'
import list from '../img/list.png'
import { NavLink, Link } from 'react-router-dom'
const Sidebar = () => {
    const [isOpen, setOpen] = useState("false");
    const ToggleClass = () => {
        setOpen(!isOpen); 
       };
    return (
        <>
            <div className={isOpen ? "sideNav" : "sideNav open"}>
                <button className={`toggleSidenav ${isOpen ? "open" : "close"}`} onClick={ToggleClass}>
                    <span className='lineOne'></span>
                    <span className='lineTwo'></span>
                    <span className='lineThree'></span>
                </button>
                <div className='sideContent'>
                    <div className='sideCard mb-15'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={user} alt='userName' className='prof-img' />
                            </div>
                            <div className='ml-15'>
                                <h3 className='m-0'>Hi Reader,</h3>
                                <p className='m-0'>Here's your News!</p>
                            </div>
                        </div>
                    </div>
                    <div className='sideCard mb-15 text-center'>
                        <h2 className='m-0 mb-15'>View Toggle</h2>
                        <div className='btn-droup'>
                            <NavLink className={(navData) => (navData.isActive ? "active btn-one" : 'none btn-one')} to='/' onClick={ToggleClass}>
                                <img src={grid} alt='grid' className='w-30px' />
                            </NavLink>
                            <NavLink className={(navData) => (navData.isActive ? "active btn-two" : 'none btn-two')} to='/list-content' onClick={ToggleClass}>
                                <img src={list} alt='list' className='w-30px' />
                            </NavLink>
                        </div>
                    </div>
                    <div className='sideCard mb-15 text-center'>
                        <h2 className='m-0 mb-15'>Have a Feedback?</h2>
                        <Link to='/add-content' onClick={ToggleClass} className='listing-btn'>We're Listing!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar