/* eslint-disable*/
import { useExplorePublications } from '@lens-protocol/react-web';
import React from "react";
import { Link } from 'react-router-dom';
import { Col, Dropdown } from 'react-bootstrap';
import Card from '../../../components/Card';
import ShareOffcanvas from '../../../components/share-offcanvas';
import Like from './like';


import user01 from '../../../assets/images/user/01.jpg';

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
              <Link to={`/dashboard/app/${post.id}`}>
                            <Card className=" card-block card-stretch card-height" key={index}>
                                <Card.Body>
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                {post.profile.picture != null && post.profile.picture.original && post.profile.picture.original.url ? (
                                                    <img className="rounded-circle img-fluid" style={{ width: 60 }} src={post.profile.picture.original.url} alt=""/>
                                                ):(
                                                    <img className="rounded-circle img-fluid" src={user01} alt=""/>
                                                )}
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
                        </Link>
                        ))}
                        </Col>
    ):(
      <p>Loading..</p>
    )}
     {hasMore && <p>Loading more...</p>}
    </>
  )
};

export default Feed;
/* eslint-enable*/
