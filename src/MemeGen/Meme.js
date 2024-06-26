import React from "react";
import memesData from "./memeData.js"
import "./styles.css"

const Meme = () => {
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "../CSOimages/profile.jpg"
  })
  
  const [allMemes, setallMemes] = React.useState([])

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
    .then(data => setallMemes(data.data.memes))
  },[])

  console.log(allMemes)
  

  function getNewImage() {

    const index = Math.floor(Math.random() * allMemes.length)
    
    return setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: allMemes[index].url
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
       
    
        <input
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            type="text"
            className="form--input" 
          ></input>

      
       
      <input
            placeholder="Bottom Text"
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
        <img className="meme--image" src={meme.randomImage}/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{ meme.bottomText}</h2>
        </div>
    </div>
  );
};

export default Meme;
