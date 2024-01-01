import React from "react";

const Meme = () => {
  return (
    <form className="form">
      <div className="form--box">
        <label className="form--toplabel">
          Top text
          <input
            type="text"
            className="form--input"
            placeholder="Shut up"
          ></input>
        </label>

        <label className="form--buttomlabel">
          Buttom Text
          <input
            type="text"
            className="form--input"
            placeholder="And take my money"
          ></input>
        </label>
      </div>

      <button type="button" className="form--btn">
        Get a new meme image 🖼
      </button>
    </form>
  );
};

export default Meme;
