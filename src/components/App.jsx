import React, { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello");
//   var buttonStyle = { backgroundColor: null };
//   var [buttonColor, setButtonColor] = useState(buttonStyle);

//   function handleClick() {
//     console.log("clicked");
//     setHeadingText("Submitted");
//   }

//   function goInside() {
//     buttonColor = { backgroundColor: "black" };
//     setButtonColor(buttonColor);
//     console.log("black");
//   }

//   function leave() {
//     buttonColor = { backgroundColor: null };
//     setButtonColor(buttonColor);
//     console.log("null");
//   }
//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={buttonColor}
//         className="bttn"
//         onClick={handleClick}
//         onMouseOver={goInside}
//         onMouseOut={leave}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// Another solution (from angela)

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setButtonColor] = useState(false);

  function handleClick() {
    console.log("clicked");
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setButtonColor(true);
    console.log("black");
  }

  function handleMouseOut() {
    setButtonColor(false);
    console.log("null");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        className="bttn"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
