import React, { useState } from "react";
import './EightBall.css';

/** An example of a component with state/props/children. */

function EightBall(props) {
  const [fortune, setFortune] = useState("Think of a Question.");
  const [color, setColor] = useState("black");

  const {fortunes} = props;

  function changeFortune(event) {
    const randNum = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randNum].msg);
    setColor(fortunes[randNum].color);
  }

  return (
    <div style={{backgroundColor:color}} className="eight-ball" onClick={changeFortune}>
        <b className="eight-ball-fortune">{fortune}</b>
    </div>
  );
}

EightBall.defaultProps = {
    fortunes : [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};

export default EightBall;