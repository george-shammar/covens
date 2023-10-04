import { useExplorePublications } from '@lens-protocol/react-web';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container, Dropdown, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap';
import Card from '../../../components/Card';
import ShareOffcanvas from '../../../components/share-offcanvas';
import CustomToggle from '../../../components/dropdowns';
import Like from './like';


import user01 from '../../../assets/images/user/01.jpg';
import user2 from '../../../assets/images/user/02.jpg';
import user3 from '../../../assets/images/user/03.jpg';
import icon1 from '../../../assets/images/icon/01.png'
import icon2 from '../../../assets/images/icon/02.png'
import icon3 from '../../../assets/images/icon/03.png'
import icon4 from '../../../assets/images/icon/04.png'
import icon5 from '../../../assets/images/icon/05.png'
import icon6 from '../../../assets/images/icon/06.png'
import icon7 from '../../../assets/images/icon/07.png'
import p2 from '../../../assets/images/page-img/p2.jpg';
import p3 from '../../../assets/images/page-img/p3.jpg';
import p1 from '../../../assets/images/page-img/p1.jpg';

const Feed = () => {
  const { data, loading, hasMore, next } = useExplorePublications();
  
  function calculateTimeElapsed(timestamp) {
    const eventTime = new Date(timestamp);
    const currentTime = new Date();

    const timeDifference = currentTime - eventTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(months / 12);

       if (seconds < 60) {
          return `${seconds} seconds ago`
       } else if (seconds > 60 && minutes < 60 ) {
          return `${minutes} minutes ago`
       } else if (minutes > 60 && hours < 24) {
          return `${hours} hours ago`
       } else if (hours > 24 && days < 30) {
          return `${days} days ago`
       } else if (days > 30 && months < 12) {
          return `${months} months ago`
       } else {
          return `${years} years ago`
       }
    }

  return (
    <>
    {!loading && data ? (
      <Col sm={12}>
        {data?.map((post, index) => (
                            <Card className=" card-block card-stretch card-height" key={index}>
                                <Card.Body>
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src={user01} alt=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">{post.profile.handle}</h5>
                                                        <p className="mb-0 text-primary">{calculateTimeElapsed(post.createdAt)}</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="bg-transparent">
                                                            <span className="material-symbols-outlined">
                                                                more_horiz
                                                            </span>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4 material-symbols-outlined">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className= "p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <i className="ri-user-unfollow-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Unfollow User</h6>
                                                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <i className="ri-notification-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Notifications</h6>
                                                                                <p className="mb-0">Turn on notifications for this post</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                          {!loading && post && post.metadata !== undefined ? (
                                             <p>{post.metadata.content}</p>
                                          ):(
                                            <p></p>
                                          )}
                                        </div>
                                        <div className="user-post">
                                        {!loading && post && post.metadata !== undefined ? (
                                             <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                             <div className="row-span-2 row-span-md-1">
                                                 <img src={post.metadata.image} alt="post1" className="img-fluid rounded w-100"/>
                                             </div>
                                             {/* <div className="row-span-1">
                                                 <img src={p1} alt="post2" className="img-fluid rounded w-100"/>
                                             </div>
                                             <div className="row-span-1 ">
                                                 <img src={p3} alt="post3" className="img-fluid rounded w-100"/>
                                             </div> */}
                                         </div>
                                          ):(
                                            <p></p>
                                          )}
                                            
                                        </div>
                                        <div className="comment-area mt-3">
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block position-relative d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="like-data">
                                                          <Like publication={post}/>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <ShareOffcanvas />
                                            </div>
                                        <hr/>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                        </Col>
    ):(
      <p>Loading..</p>
    )}
    </>
  )
};

export default Feed;
