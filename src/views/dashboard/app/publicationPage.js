import React, { useState, useEffect} from 'react';
import Card from '../../../components/Card'
import Comment from './comment';
import { useComments } from '@lens-protocol/react-web';
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Container, Dropdown } from 'react-bootstrap';
import ShareOffcanvas from '../../../components/share-offcanvas';
import Like from './like';
import { useProfile, usePublication, Profile } from "@lens-protocol/react-web";
import user01 from '../../../assets/images/user/01.jpg'
import user02 from '../../../assets/images/user/02.jpg'
import user03 from '../../../assets/images/user/03.jpg'


const PublicationPage = () => {
  const { publicationId } = useParams();
  const [coms, setComments] = useState();
  // const { profile } = useProfile({ profileId});

  const { data: comments, hasMore, next } = useComments({ commentsOf: publicationId });
  const { data: publication, loading } = usePublication({
    publicationId: publicationId,
  });

  useEffect(() => {
      if (comments) {
        console.log(comments)
        setComments(comments)
      }
 }, []);

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

 console.log(coms)

    return (
        <>
            <div id='content-page' className='content-page'>

           <Container>
                <Row>
                    <Col lg="12">
                    <Card.Body>
                                          
                                          <div className="post-item">
                                             <div className="user-post-data pb-3">
                                                <div className="d-flex justify-content-between">
                                                   <div className="me-3">
                                                      {/* {profile.picture ? (
                                                            <img loading="lazy" className="rounded-circle  avatar-60" src={profile.picture.original.url} alt={profile.handle}/>
                                                      ) : (
                                                         <img loading="lazy" className="rounded-circle  avatar-60" src={user01} alt={profile.handle}/>
                                                      )} */}
                                                      
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between flex-wrap">
                                                         <div>
                                                            {/* <h5 className="mb-0 d-inline-block">{profile.handle}</h5> */}

                                                            {!loading && publication.metadata ? (
                                                               <>
                                                                  <p className="ms-1 mb-0 d-inline-block">{publication.metadata.locale}</p>
                                                                  <p className="mb-0">{calculateTimeElapsed(publication.createdAt)}</p>
                                                                  <p>{publication.metadata.content}</p>
                                                               </>
                                                            ) : (
                                                               <>
                                                                  <p className="ms-1 mb-0 d-inline-block">earth</p>
                                                                  {!loading && publication.createdAt ? (
                                                                    <p className="mb-0">{calculateTimeElapsed(publication.createdAt)}</p>
                                                                  ) : (<p></p>)}
                                                                  
                                                               </>
                                                            )}
                                                         </div>
                                                        
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                               <span className="material-symbols-outlined">
                                                                  more_horiz
                                                               </span>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
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
                                             <div className="user-post">
                                                <Link to="#">
                                                   {!loading && publication.metadata?.media[0]?.original &&
                                                      ["image/jpeg", "image/png"].includes(
                                                      publication.metadata?.media[0]?.original.mimeType
                                                      ) && (
                                                      <img loading="lazy" src={publication.metadata.media[0].original.url} alt="post" className="img-fluid w-100" />
                                                      )}
                                                </Link>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                     
                                                   </div>
                                                <ShareOffcanvas />
                                                </div>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link to="#" className="material-symbols-outlined me-3 link">insert_link</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">sentiment_satisfied</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">photo_camera</Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                         
                                       </Card.Body>



                                       <hr/>
                                       {!loading && coms ? (
                                          <div>
                                            {coms.map((com, index) => (
                                              <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">{com.metadata.content}</p>
                                                            {com.metadata.image ? (
                                                                <img loading="lazy" src={com.metadata.image} alt="post" className="img-fluid w-100" />
                                                            ) : (
                                                              <p></p>
                                                            )}
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span>{calculateTimeElapsed(com.createdAt)}</span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                            ))}
                                          </div>
                                       ) : (
                                        <p>No comments...</p>
                                       )}
                                                
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default PublicationPage