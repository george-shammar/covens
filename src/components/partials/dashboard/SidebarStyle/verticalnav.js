/* eslint-disable*/
import React, { useState, useContext} from 'react'

//router
import { Link, useLocation } from 'react-router-dom'

//react-bootstrap
import { Accordion, useAccordionButton, AccordionContext, Nav,Tooltip,OverlayTrigger} from 'react-bootstrap'



function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
            decoratedOnClick(isCurrentEventKey)
        }}>
            {children}
        </Link>
    );
}

const VerticalNav = React.memo(() => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive]= useState('')
    //location
    let location = useLocation();


    return (
        <React.Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Social</span>
                        <span className="mini-icon" data-bs-toggle="tooltip" title="Social" data-bs-placement="right">-</span>
                    </Link>
                </li>
                <li  className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/' ? 'active' : ''} nav-link `} aria-current="page" to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Newsfeed</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                newspaper
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Newsfeed</span>
                    </Link>
                </li>
                <Accordion.Item as="li" eventKey="profile-menu" bsPrefix={`nav-item ${active === 'profile' ? 'active' : '' } `} onClick={() => setActive('profile')} >
                    <CustomToggle eventKey="profile-menu" onClick={(activeKey) =>  setActiveMenu(activeKey) }>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Explorer</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                person
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Explorer</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="profile-menu" >
                        <ul className="sub-nav">
                            {/* <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/profile' ? 'active' : ''} nav-link`} to="/dashboard/app/profile">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile</Tooltip>}>
                                     <i className="sidenav-mini-icon"> P </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile </span>
                                </Link>
                            </Nav.Item> */}
                            
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/app/profile-images' ? 'active' : ''} nav-link`} to="/dashboards/app/profile-images">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Pictures</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PI </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Pictures</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/app/profile-videos' ? 'active' : ''} nav-link`} to="/dashboards/app/profile-videos">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Videos</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PV </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Videos</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/profile-forum' ? 'active' : ''} nav-link`} to="/dashboard/app/profile-forum">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Forum</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PF </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Forum</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                {/* <Accordion.Item as="li" eventKey="friends-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="friends-menu" onClick={(activeKey) => setActiveMenu(activeKey)}>
                        
                        <OverlayTrigger placement="right" overlay={<Tooltip>Friend</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            people
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Friend</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="friends-menu" >
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/app/friend-list' ? 'active' : ''} nav-link`} to="/dashboards/app/friend-list">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Friend List</Tooltip>}>  
                                      <i className="sidenav-mini-icon"> FL </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Friend List</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/friend-profile' ? 'active' : ''} nav-link`} to="/dashboard/app/friend-profile">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Friend Profile</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> FP </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Friend Profile</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/friend-request' ? 'active' : ''} nav-link`} to="/dashboard/app/friend-request">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Friend Request</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> FR </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Friend Request</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item> */}
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/groups' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/groups">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Group</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                            groups
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Group</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/notification' ? 'active' : ''} nav-link `} aria-current="page"  to="/dashboard/app/notification">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Notification</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                            notifications
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Notification</span>
                    </Link>
                </Nav.Item>
                <li  className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">FEATURED</span>
                        <span className="mini-icon" data-bs-toggle="tooltip" title="Social" data-bs-placement="right">-</span>
                    </Link>
                </li>
                {/* <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/file' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/app/file">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Files</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           insert_drive_file
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Files</span>
                    </Link>
                </Nav.Item> */}
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/chat/index' ? 'active' : ''} nav-link `} aria-current="page" to="/chat/index" target='_blank noopener,noreferrer'>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Chat</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                            message
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Chat</span>
                    </Link>
                </Nav.Item>
                {/* <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/todo' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/app/todo">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Todo</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           task_alt
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Todo</span>
                    </Link>
                </Nav.Item> */}
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/calendar' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/calendar">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Calendar</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           calendar_month
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Calendar</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/birthday' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/birthday">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Birthday</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           cake
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Birthday</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/weather' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/weather">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Weather</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           thunderstorm
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Weather</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/music' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/music">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Music</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           play_circle
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Music</span>
                    </Link>
                </Nav.Item>
                {/* <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">OTHER PAGES</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li> */}
                
            </Accordion>
        </React.Fragment>
    )
})

export default VerticalNav
/* eslint-enable*/
