import React from "react";
import "./Code.css";

const Code = () => {
  return (
    <div>
      <div id="mainimages">
        {/* <img src="./pics/1.jpg" class="demopics" alt="pic">
        <!-- <img src="./pics/2.jpg" class="demopics" alt="pic"> -->
        <img src="./pics/3.jpg" class="demopics" alt="pic"> */}
      </div>
      <div id="quotes">
        <h2 className="quoteh2">
          “As time goes by the memories of sitting on the edge of a bed and
          reading <br /> aloud with your kid are going to be very meaningful in
          your own mental <br /> scrapbook.” – Gary Ross (American actor)
          <br /> <br />
          “We start reading a book in the same way we slip into a cold bed. We
          only start enjoying it after <br /> we ’ve created the right
          atmosphere.” Pierre Reverdy (French poet) <br /> <br /> <br />
          “Give me a bed and a book and I am happy.” Logan Pearsall Smith
          (English author) <br />
          “The most luxurious item is a beautiful bed and beautiful, <br />{" "}
          simple sheets.” Andre Leon Talley (American editor)
        </h2>
      </div>
      <footer className="footer">
        <h1> Thanks for Visitng Our Website</h1> <br />
        <h3>For More Queries </h3> <br />
        <a className="footera" href="mailto:sherazshabbir0300@gmail.com">
          {" "}
          Contact us on Gmail
        </a>{" "}
        <br />
        <p>http://www.istockfurniture.com</p>
      </footer>
    </div>
  );
};

export default Code;
