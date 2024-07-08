import React from 'react';
import {comments} from './commentData'
import PhoneNumber from './PhoneNumber';

function Body(props){
  return (
    <> 
      <p>Email: {props.email}</p>
      {/* <p>Phone: {props.phone}</p> */}
      <PhoneNumber  phone={props.phone}/>
      <p>{props.comment}</p>
    </>
  )
};

export default Body;