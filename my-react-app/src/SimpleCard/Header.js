import React from 'react';

function Header(props){
  return (
    <>
      <h1>{props.username}</h1>
      <img src={props.profileImg}/>
    </>
  )
};

export default Header;