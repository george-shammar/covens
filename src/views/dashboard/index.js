import React, {useState}  from 'react'
import { Row, Col, Container, Dropdown, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import CustomToggle from '../../components/dropdowns'
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { useExploreProfiles } from '@lens-protocol/react-web';
import Feed from './app/feed';

//image
import user1 from '../../assets/images/user/1.jpg'
import user01 from '../../assets/images/user/01.jpg'
import user2 from '../../assets/images/user/02.jpg'
import user3 from '../../assets/images/user/03.jpg'
import user4 from '../../assets/images/user/04.jpg'
import img1 from '../../assets/images/small/07.png'
import img2 from '../../assets/images/small/08.png'
import img3 from '../../assets/images/small/09.png'
import img4 from '../../assets/images/small/10.png'
import img5 from '../../assets/images/small/11.png'
import img6 from '../../assets/images/small/12.png'
import img7 from '../../assets/images/small/13.png'
import img8 from '../../assets/images/small/14.png'
import p1 from '../../assets/images/page-img/p1.jpg'
import s1 from '../../assets/images/page-img/s1.jpg'
import s2 from '../../assets/images/page-img/s2.jpg'
import s3 from '../../assets/images/page-img/s3.jpg'
import s4 from '../../assets/images/page-img/s4.jpg'
import s5 from '../../assets/images/page-img/s5.jpg'
import p4 from '../../assets/images/page-img/p4.jpg'
import p5 from '../../assets/images/page-img/p5.jpg'
import img42 from '../../assets/images/page-img/42.png'
import img9 from '../../assets/images/small/img-1.jpg'
import img10 from '../../assets/images/small/img-2.jpg'
import loader from '../../assets/images/page-img/page-load-loader.gif'
import icon1 from '../../assets/images/icon/01.png'
import icon2 from '../../assets/images/icon/02.png'
import icon3 from '../../assets/images/icon/03.png'
import icon4 from '../../assets/images/icon/04.png'
import icon5 from '../../assets/images/icon/05.png'
import icon6 from '../../assets/images/icon/06.png'
import icon7 from '../../assets/images/icon/07.png'
import p2 from '../../assets/images/page-img/p2.jpg';
import p3 from '../../assets/images/page-img/p3.jpg';
import ShareOffcanvas from '../../components/share-offcanvas';


const Index = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data: profiles } = useExploreProfiles({
        limit: 50
    })

    const { address } = useAccount();
  
    return (
        <>
        <div id="content-page" className="content-page">
        <Container>
            <Row>
                <Col lg={8} className="row m-0 pb-0">
                {address && address.length > 0 ? (
                    // <Col sm={12} >
                    //     <Card id="post-modal-data" className="card-block card-stretch card-height">
                    //         <div className="card-header d-flex justify-content-between">
                    //             <div className="header-title">
                    //                 <h4 className="card-title">Create Post</h4>
                    //             </div>
                    //         </div>
                    //         <Card.Body >
                    //             <div className="d-flex align-items-center">
                    //                 <div className="user-img">
                    //                     <img src={user1} alt="user1" className="avatar-60 rounded-circle"/>
                    //                 </div>
                    //                 <form className="post-text ms-3 w-100 "   onClick={handleShow}>
                    //                     <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                    //                 </form>
                    //             </div>
                    //             <hr></hr>
                    //             <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                    //                 <li className="me-3 mb-md-0 mb-2">
                    //                     <Link to="#" className="btn btn-soft-primary">
                    //                         <img src={img1} alt="icon" className="img-fluid me-2"/> Photo/Video
                    //                     </Link>
                    //                 </li>
                    //                 <li className="me-3 mb-md-0 mb-2">
                    //                     <Link to="#" className="btn btn-soft-primary">
                    //                         <img src={img2} alt="icon" className="img-fluid me-2"/> Tag Friend
                    //                     </Link>
                    //                 </li>
                    //                 <li className="me-3">
                    //                     <Link to="#" className="btn btn-soft-primary">
                    //                         <img src={img3} alt="icon" className="img-fluid me-2"/> Feeling/Activity
                    //                     </Link>
                    //                 </li>
                    //                 <li>
                    //                     <button className=" btn btn-soft-primary">
                    //                         <div className="card-header-toolbar d-flex align-items-center">
                    //                             <Dropdown>
                    //                                 <Dropdown.Toggle as='div'className="lh-1">
                    //                                 <span className="material-symbols-outlined">
                    //                                     more_horiz
                    //                                 </span>
                    //                                 </Dropdown.Toggle>
                    //                                 <Dropdown.Menu>
                    //                                     <Dropdown.Item  onClick={handleShow}  href="#">Check in</Dropdown.Item>
                    //                                     <Dropdown.Item  onClick={handleShow}  href="#">Live Video</Dropdown.Item>
                    //                                     <Dropdown.Item  onClick={handleShow}  href="#">Gif</Dropdown.Item> 
                    //                                     <Dropdown.Item  onClick={handleShow}  href="#">Watch Party</Dropdown.Item> 
                    //                                     <Dropdown.Item  onClick={handleShow}  href="#">Play with Friend</Dropdown.Item> 
                    //                                 </Dropdown.Menu>
                    //                             </Dropdown>
                    //                         </div>
                    //                     </button>
                    //                 </li>
                    //             </ul>   
                    //         </Card.Body>
                    //         <Modal size="lg" className="fade" id="post-modal" onHide={handleClose} show={show} >
                    //             <Modal.Header  className="d-flex justify-content-between">
                    //                 <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
                    //                 <Link to="#" className="lh-1" onClick={handleClose} >
                    //                     <span className="material-symbols-outlined">close</span>
                    //                 </Link>
                    //             </Modal.Header>
                    //             <Modal.Body>
                    //                 <div className="d-flex align-items-center">
                    //                     <div className="user-img">
                    //                         <img src={user1} alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                    //                     </div>
                    //                     <form className="post-text ms-3 w-100 "  data-bs-toggle="modal" data-bs-target="#post-modal">
                    //                     <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                    //                 </form>
                    //                 </div>
                    //                 <hr/>
                    //                 <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img1} alt="icon" className="img-fluid"/> Photo/Video</div>
                    //                     </li>
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img2} alt="icon" className="img-fluid"/> Tag Friend</div>
                    //                     </li>
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img3} alt="icon" className="img-fluid"/> Feeling/Activity</div>
                    //                     </li>
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img4} alt="icon" className="img-fluid"/> Check in</div>
                    //                     </li>
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img5} alt="icon" className="img-fluid"/> Live Video</div>
                    //                     </li>
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img6} alt="icon" className="img-fluid"/> Gif</div>
                    //                     </li>
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img7} alt="icon" className="img-fluid"/> Watch Party</div>
                    //                     </li>
                    //                     <li className="col-md-6 mb-3">
                    //                         <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                    //                         <img src={img8} alt="icon" className="img-fluid"/> Play with Friends</div>
                    //                     </li>
                    //                 </ul>
                    //                 <hr/>
                    //                 <div className="other-option">
                    //                     <div className="d-flex align-items-center justify-content-between">
                    //                         <div className="d-flex align-items-center">
                    //                         <div className="user-img me-3">
                    //                             <img src={user1} alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                    //                         </div>
                    //                         <h6>Your Story</h6>
                    //                         </div>
                    //                         <div className="card-post-toolbar">
                    //                             <Dropdown>
                    //                                 <Dropdown.Toggle as={CustomToggle} role="button">
                    //                                 <span className="btn btn-primary">Friend</span>
                    //                                 </Dropdown.Toggle>
                    //                                 <Dropdown.Menu className=" m-0 p-0">
                    //                                     <Dropdown.Item className=" p-3" to="#">
                    //                                         <div className="d-flex align-items-top">
                    //                                         <i className="ri-save-line h4"></i>
                    //                                         <div className="data ms-2">
                    //                                             <h6>Public</h6>
                    //                                             <p className="mb-0">Anyone on or off Facebook</p>
                    //                                         </div>
                    //                                         </div>
                    //                                     </Dropdown.Item>
                    //                                     <Dropdown.Item className="p-3" to="#">
                    //                                         <div className="d-flex align-items-top">
                    //                                         <i className="ri-close-circle-line h4"></i>
                    //                                         <div className="data ms-2">
                    //                                             <h6>Friends</h6>
                    //                                             <p className="mb-0">Your Friend on facebook</p>
                    //                                         </div>
                    //                                         </div>
                    //                                     </Dropdown.Item>        
                    //                                     <Dropdown.Item className=" p-3" to="#">
                    //                                         <div className="d-flex align-items-top">
                    //                                         <i className="ri-user-unfollow-line h4"></i>
                    //                                         <div className="data ms-2">
                    //                                             <h6>Friends except</h6>
                    //                                             <p className="mb-0">Don't show to some friends</p>
                    //                                         </div>
                    //                                         </div>
                    //                                     </Dropdown.Item>
                    //                                     <Dropdown.Item className=" p-3" to="#">
                    //                                         <div className="d-flex align-items-top">
                    //                                         <i className="ri-notification-line h4"></i>
                    //                                         <div className="data ms-2">
                    //                                             <h6>Only Me</h6>
                    //                                             <p className="mb-0">Only me</p>
                    //                                         </div>
                    //                                         </div>
                    //                                     </Dropdown.Item>
                    //                                 </Dropdown.Menu>
                    //                             </Dropdown>
                    //                             </div>
                    //                         </div>
                    //                     </div>
                    //                 <button type="submit" className="btn btn-primary d-block w-100 mt-3">Post</button>
                    //             </Modal.Body>
                    //         </Modal>
                    //     </Card>
                    // </Col>
                    <></>
                    ) : (
                        <p>As a Visitor, you have view-only right. Create a profile to engage.</p>
                    )}
                    <Col sm={12}>
                        <Feed />
                    </Col>
                </Col>
                <Col lg={4}>
                    <Card>
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Recommended Profiles</h4>
                            </div>
                        </div>
                        <Card.Body>
                            <ul className="media-story list-inline m-0 p-0">
                                <li className="d-flex mb-3 align-items-center">
                                    <i className="ri-add-line"></i>
                                    <div className="stories-data ms-3">
                                        <h5>Profiles</h5>
                                    </div>
                                </li>
                                <div>
                                    {
                                        profiles?.map((profile, index) => (
                                            <Link to={`/dashboard/app/profile/${profile.handle}`} key={index} className="mb-0 h6">
                                                <li className="d-flex mb-3 align-items-center active" key={index}>
                                                {
                                                    profile.picture && profile.picture.__typename === 'MediaSet' ? (
                                                        <img src={profile.picture.original.url} alt={profile.handle} className="rounded-circle img-fluid"/>
                                                    ) : <img src={s2} alt="story-img" className="rounded-circle img-fluid"/>
                                                }
                                                <div className="stories-data ms-3">
                                                    <h5>{profile.handle}</h5>
                                                </div>
                                                </li>
                                            </Link>
                                            ))
                                        }
                                </div>
                            </ul>
                            {/* <Link to="#" className="btn btn-primary d-block mt-3">See All</Link> */}
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Events</h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                        <i className="ri-more-fill h4"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                        <Dropdown.Item  href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <Card.Body>
                            <ul className="media-story list-inline m-0 p-0">
                                <li className="d-flex mb-4 align-items-center ">
                                    <img src={s4} alt="story1" className="rounded-circle img-fluid"/>
                                    <div className="stories-data ms-3">
                                        <h5>Web Workshop</h5>
                                        <p className="mb-0">1 hour ago</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src={s5} alt="story2" className="rounded-circle img-fluid"/>
                                    <div className="stories-data ms-3">
                                        <h5>Fun Events and Festivals</h5>
                                        <p className="mb-0">1 hour ago</p>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Upcoming Birthday</h4>
                            </div>
                        </div>
                        <Card.Body>
                            <ul className="media-story list-inline m-0 p-0">
                                <li className="d-flex mb-4 align-items-center">
                                    <img src={user01} alt="story3" className="rounded-circle img-fluid"/>
                                    <div className="stories-data ms-3">
                                        <h5>Anna Sthesia</h5>
                                        <p className="mb-0">Today</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src={user2} alt="story-img" className="rounded-circle img-fluid"/>
                                    <div className="stories-data ms-3">
                                        <h5>Paul Molive</h5>
                                        <p className="mb-0">Tomorrow</p>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Suggested Pages</h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle as={CustomToggle}>
                                        <i className="ri-more-fill h4"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                        <Dropdown.Item  href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                        <Dropdown.Item  href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <Card.Body>
                            <ul className="suggested-page-story m-0 p-0 list-inline">
                                <li className="mb-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src={img42} alt="story-img" className="rounded-circle img-fluid avatar-50"/>
                                        <div className="stories-data ms-3">
                                        <h5>Iqonic Studio</h5>
                                        <p className="mb-0">Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <img src={img9} className="img-fluid rounded" alt="Responsive"/>
                                    <div className="mt-3"><Link to="#" className="btn d-block"><i className="ri-thumb-up-line me-2"></i> Like Page</Link></div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center mb-3">
                                        <img src={img42} alt="story-img" className="rounded-circle img-fluid avatar-50"/>
                                        <div className="stories-data ms-3">
                                        <h5>Cakes & Bakes </h5>
                                        <p className="mb-0">Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <img src={img10} className="img-fluid rounded" alt="Responsive"/>
                                    <div className="mt-3"><Link to="#" className="btn d-block"><i className="ri-thumb-up-line me-2"></i> Like Page</Link></div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-sm-12 text-center">
                    <img src={loader} alt="loader" style={{height: "100px"}}/>
                </div>
            </Row>
        </Container>          
        </div>
    </>
    )
}

export default Index
