import React from "react";
import Styles from "./card.module.css";

const Card = ({ getEmoji }) => {
  const emojiList = [
    "💗",
    "😍",
    "😄",
    "🌷",
    "🍄",
    "🍁",
    "👩‍🎓",
    "🌸",
    "🌼",
    "💛",
    "✩",
    "✻",
    "✿",
    "❀",
    "❤︎",
    "❥",
    "☀︎",
    "☁︎",
    "☂︎",
    "🙏",
    "☻",
  ];

  return (
    <div className={Styles.card}>
      {emojiList.map((item, idx) => (
        <div
          key={idx}
          style={{ cursor: "pointer" }}
          onClick={(e) => getEmoji(e)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Card;
