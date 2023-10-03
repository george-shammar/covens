import React,{useEffect, useState} from 'react';
import CustomToggle from '../../../components/dropdowns';
import { Dropdown } from 'react-bootstrap';
import { ReactionTypes, usePublication, useReaction } from '@lens-protocol/react-web';

const Like =() => {
  const { addReaction, removeReaction, hasReaction, isPending, error } = useReaction({
    profileId: id,
  });


  return (
    <div>
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