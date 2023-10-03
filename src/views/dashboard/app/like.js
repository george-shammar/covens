import React from 'react';
import CustomToggle from '../../../components/dropdowns';
import { Dropdown } from 'react-bootstrap'
import { ReactionTypes, useReaction } from '@lens-protocol/react-web';

import icon1 from '../../../assets/images/icon/01.png'

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
      <div className="like-data">
        <Dropdown>
          <Dropdown.Toggle  onClick={toggleReaction} disabled={isPending} as={CustomToggle} >
          {hasReactionType ? (
            <p></p>
          ) : (
            <img loading="lazy" src={icon1} className="img-fluid" alt=""/>
          )}
          </Dropdown.Toggle>
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