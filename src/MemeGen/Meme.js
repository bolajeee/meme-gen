import React from "react";
import memesData from "./memeData.js"

const Meme = () => {

    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
  
  const [meme, setMeme] = React.useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImage: "../CSOimages/profile.jpg"
  })
  
  const [allMemeImages, setallMemeImages] = React.useState(memesData)

  function getNewImage() {
    let memeInfo = allMemeImages.data.memes
    const index = Math.floor(Math.random() * memeInfo.length)
    
    return setMeme(meme => {
      return {
        ...meme,
        randomImage: memeInfo[index].url
      }
    })
  }
  
  return (
    <form className="form">
      <div className="form--box">
        <label className="form--toplabel">
          {meme.topText}
          <input
            type="text"
            className="form--input"
            placeholder="Shut up"
          ></input>
        </label>

        <label className="form--buttomlabel">
          {meme.bottomText}
          <input
            type="text"
            className="form--input"
            placeholder="And take my money"
          ></input>
        </label>
      </div>

      <button type="button" className="form--btn" onClick={getNewImage}>
        Get a new meme image 🖼
      </button>

      <img className="random-img" src={meme.randomImage} />
    </form>
  );
};

export default Meme;
