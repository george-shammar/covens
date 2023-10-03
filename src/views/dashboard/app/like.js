import React,{useEffect, useState} from 'react';
import CustomToggle from '../../../components/dropdowns';
import {Row, Col, Container, Dropdown, Nav, Tab, OverlayTrigger, Tooltip, Button, Modal } from 'react-bootstrap'
import { ReactionTypes, useReaction } from '@lens-protocol/react-web';

import icon1 from '../../../assets/images/icon/01.png'
import icon2 from '../../../assets/images/icon/02.png'
import icon3 from '../../../assets/images/icon/03.png'
import icon4 from '../../../assets/images/icon/04.png'
import icon5 from '../../../assets/images/icon/05.png'
import icon6 from '../../../assets/images/icon/06.png'
import icon7 from '../../../assets/images/icon/07.png'

const Like =({id, publication}) => {

  const { addReaction, removeReaction, hasReaction, isPending, error } = useReaction({
    profileId: id,
  });

  const reactionType = ReactionTypes.Upvote;

  const hasReactionType = hasReaction({
    reactionType,
    publication,
  });

  const toggleReaction = async () => {
    if (hasReactionType) {
      await removeReaction({
        reactionType,
        publication,
      });
    } else {
      await addReaction({
        reactionType,
        publication,
      });
    }
  };

  return (
    <div className="d-flex align-items-center">
      {error && <p>{error.message}</p>}

      {/* <button onClick={toggleReaction} disabled={isPending}>
        {hasReactionType ? `Remove ${reactionType}` : `Add ${reactionType}`}
      </button> */}
      <div className="like-data">
        <Dropdown>
          <Dropdown.Toggle  as={CustomToggle} >
            <img loading="lazy" src={icon1} className="img-fluid" alt=""/>
          </Dropdown.Toggle>
          <Dropdown.Menu className=" py-2">
            <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img loading="lazy" src={icon1} className="img-fluid me-2" alt=""/></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img loading="lazy" src={icon2} className="img-fluid me-2" alt=""/></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img loading="lazy" src={icon3} className="img-fluid me-2" alt=""/></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img loading="lazy" src={icon4} className="img-fluid me-2" alt=""/></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img loading="lazy" src={icon5} className="img-fluid me-2" alt=""/></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img loading="lazy" src={icon6} className="img-fluid me-2" alt=""/></OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img loading="lazy" src={icon7} className="img-fluid me-2" alt=""/></OverlayTrigger>
          </Dropdown.Menu>
        </Dropdown>
      </div>
         <div className="total-like-block ms-2 me-3">
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                140 Likes
              </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                  <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                  <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                  <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                  <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                  <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                  <Dropdown.Item  to="#">Other</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
          </div>

          <div className="total-comment-block">
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                56 comments
              </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                <Dropdown.Item  to="#">Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
    </div>
  );
};

export default Like;