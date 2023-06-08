import React from "react"
import memesData from "../memesData.jsx"

export default function Meme() {
  function onClick() {
    let arr = memesData.data.memes;
    let rand = arr[Math.floor(Math.random()*(arr.length))]
    console.log(rand.url);
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button
          className="form--button"
          onClick={onClick}
        >
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  )
}
// for further explanation refer to w3school