function Menu(props) {
    const clickHandler =(e)=>{
      const name = e.target.value
      props.onSelectVideo(name)
    }
      return (
            <form onClick={clickHandler}>
                <input type="radio" name="src" value="fast"/> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
          );
  };
  
  export default Menu;