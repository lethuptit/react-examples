import React from 'react';
import Body from './Body'
import Header from './Header'
import './styles.css'
function Card(props)
{
  return (
  <>
    <Header 
     profileImg ={props.commentObject.profileImg}
    username={props.commentObject.username}/>
    <Body 
      email={props.commentObject.email} 
      phone={props.commentObject.phone} 
     comment ={props.commentObject.comment} 
    />
  </>);
}

export default Card;