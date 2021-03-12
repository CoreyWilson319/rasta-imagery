import React, { useState } from "react";

// import Messaging from './minorcomponents/Messaging'
import ImageBody from "./minorcomponents/ImageBody";
import SidebarLeft from "./minorcomponents/SidebarLeft";
import SidebarRight from "./minorcomponents/SidebarRight";
import BottomBar from "./minorcomponents/BottomBar";
function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    e.preventDefault()
  };
  const handleContent = (e) => {
    setContent(e.target.value);
    e.preventDefault()
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    e.preventDefault()
  };
  const handleName = (e) => {
    setName(e.target.value);
    e.preventDefault()
  };
  return (
    <div>
      <h1> RastaImagery </h1>
      <div className="container">
        <SidebarLeft />
        <ImageBody />
        <SidebarRight
          handleEmail={handleEmail}
          handleContent={handleContent}
          handleName={handleName}
          handlePhone={handlePhone}
          messageInfo={content}
          phoneInfo={phone}
          nameInfo={name}
          asdf={"asdf"}
          emailInfo={email}
        />
      </div>
      <BottomBar />
    </div>
  );
}

export default Home;
