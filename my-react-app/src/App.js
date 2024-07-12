import React from 'react';

// import {comments} from './SimpleCard/commentData'
import Card from './SimpleCard/Card'
import QuizNavBar from './NavBar/QuizNavBar';
import { questions } from "./NavBar/dataModel";
import GroceryCart from "./GroceryCart/GroceryCart";
import EditProfile from './Profile/EditProfile';
import AppFunction from './AddNewTask/Container/AppFunction';
import State from './State';
import GuineaPigsContainer from './GuineaPigsContainer/GuineaPigsContainer';
import VideoPlay from './VideoPlay/VideoPlay';

function App(){
  // const card = comments.map(c=> <Card commentObject={c}/>);

  return (
    <>
      {/* {card} */}

      {/* <div style={{border:'1px solid blue'}}>
        Test QuizNavBar
        <QuizNavBar questions={questions} />
      </div> */}

      {/* Grocery Cart */}
      {/* <GroceryCart />; */}

      {/* Add new profile */}
      {/* <EditProfile /> */}
      
      {/* Add New task */}
      {/* <AppFunction /> */}


      {/* State props */}
      {/* <State/> */}


      {/* GuineaPigs Container */}
      {/* <GuineaPigsContainer /> */}

      {/* Video Play */}
      <VideoPlay />
    </>
  )
}

export default App;