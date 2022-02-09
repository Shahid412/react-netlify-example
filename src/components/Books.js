import React from "react";

const Book = (props) => {
    const {img, title, author} = props
  
    // Referene Function
    const clickHandler =()=>{
      alert('Hi, This is onClick() Example !')
    }
    // More Complex Function Example
    const complexExample =(author)=>{
      console.log(author)
    }
    const eventObjectExample =(e)=>{
      console.log(e)
      console.log(e.target)
    }
    return(
      <article className='book' onMouseOver={()=>{
        console.log(title)
      }}>
        <img src={img} alt ='' />
        <h1 onClick={()=> {console.log(title)}}>{title}</h1> {/*Inline Function */}
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>
          Reference Button Example
        </button>
        <br />
        <button type='button' onClick={complexExample(author)} > {/* this 'complexExample()' is automatically invoked on page laod */}
          More Complex Example
        </button>
        <br />
        <button type='button' onClick={()=>complexExample(author)}> {/* setup a callback if you want to invoke 'complexExample()' on button click */}
          More Complex Example With Callback
        </button>
        <br />
        <button type='button' onClick={eventObjectExample}> {/* setup a callback if you want to invoke 'complexExample()' on button click */}
          Event Object Example
        </button>
        <br />
      </article>
    );
  };
  
// can have only 'one' default export 
export default Book