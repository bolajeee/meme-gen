import React from "react";
import memesData from "./memeData.js"
import "./styles.css"

const Meme = () => {
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "../CSOimages/profile.jpg"
  })
  
  const [allMemeImages, setallMemeImages] = React.useState(memesData)

  function getNewImage() {
    let memeInfo = allMemeImages.data.memes
    const index = Math.floor(Math.random() * memeInfo.length)
    
    return setallMemeImages(prevMeme => {
      return {
        ...prevMeme,
        randomImage: memeInfo[index].url
      }
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
    console.log(meme)
  }
  
  return (
    <div>
    
    <form className="form">
      <div className="form--box">
        <label htmlFor="topText" className="form--label">
          Top Text
        </label>
    
        <input
            id="topText"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            type="text"
            className="form--input" 
          ></input>

        <label htmlFor="bottomText" className="form--label">
          Bottom Text
        </label>
       
      <input
            id="bottomText"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            type="text"
            className="form--input"
          ></input>

        </div>
       <br></br>  
      <button type="button" className="form--btn" onClick={getNewImage}>
        Get a new meme image 🖼
      </button>

      
    </form>

      <div className="meme">
        <img className="meme--image" src={allMemeImages.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{ meme.bottomText}</h2>
        </div>
    </div>
  );
};

export default Meme;
