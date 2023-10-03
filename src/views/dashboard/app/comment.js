import React from 'react';
import { useComments } from '@lens-protocol/react-web';

const Comment = ({publication}) => {
  const { data, loading, hasMore, next} = useComments({ commentsOf: publication.id});

  if (loading) {
    console.log("loading")
  } else if (data.length == 0) {
    console.log("no comments")
  } else {
    data.map((item, i) => (
      console.log(item)
    ))
  }
 

  return (
    <div>

    </div>
  );

};

export default Comment;