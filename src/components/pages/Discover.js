import React from "react";

function Discover() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyItems: "center"}}>
      <h1 style={{textAlign: "center"}}>Make New Friends</h1>
      <h2 style={{textAlign: "center"}}>Thumbs up on any pups you'd like to meet</h2>
      <img src="https://picsum.photos/300" style={{display: "block", width: "400px", margin: "0 auto"}}/>
      <div style={{margin: "10px auto"}}>
      <button type="submit" value="like" style={{width: "200px", margin: "5px"}}>Like</button>
      <button type="submit" value="dislike" style={{width: "200px", margin: "5px"}}>DisLike</button>
      <h3 style={{textAlign: "center"}}>X amount of pups like you as well</h3>
      </div>
    </div>
  );
}

export default Discover;
