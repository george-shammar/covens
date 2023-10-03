import React from 'react';
import { useComments } from '@lens-protocol/react-web';

const Comment = ({publicationId}) => {
  const { data, loading, hasMore, next} = useComments({ commentsOf: publicationId});

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