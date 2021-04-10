import React, { useState } from "react";
import "../components/Input.css";
import emojidictionary from "../components/emojidict.js";

export default function Input() {
  const [user, setUser] = useState("");
  var dbEmoji = Object.keys(emojidictionary);
  function inputHandler(event) {
    var InputValue = event.target.value;
    var meaning = emojidictionary[InputValue];
    setUser(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojidictionary[emoji];
    setUser(meaning);
  }
  return (
    <div>
      <h1>EMOJIPEDIA</h1>
      <input className="InputArea" onChange={inputHandler}></input>
      <h2>{user}</h2>
      <div className="EmojiDiv">
        {dbEmoji.map((emoji, index) => {
          return (
            <span className="Emoji" onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
