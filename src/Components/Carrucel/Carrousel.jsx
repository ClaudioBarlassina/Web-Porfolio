import React from "react";
import imagen1 from "../../img/img1.jpg";
import imagen2 from "../../img/img2.jpg";
import imagen3 from "../../img/img3.jpg";
import imagen4 from "../../img/img4.jpg";
import "../Carrucel/Carrousel.css";

function Carrousel() {
  return (
    <div className="carrousel">
      <div className="list">
        <div className="item"></div>
        <img src={imagen1} alt="" />
        <div className="content">
          <div className="author">Lundev</div>
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">ANIMAL</div>
          <div className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, qui ipsam? Rem, obcaecati aut illo nostrum enim porro
            quidem, excepturi suscipit unde ad non dolores nulla adipisci ea
            aliquam. Cupiditate eveniet cum fugit, ipsa labore ipsum totam in
            facere nostrum accusantium similique nesciunt illum dignissimos
            obcaecati magnam quam quibusdam corrupti repudiandae tempore. Dolor
            ducimus impedit vero.
          </div>
          <div className="bottons">
            <button >SEE MORE</button>
            <button className="custom-button">SUBCRIBE</button>
          </div>
        </div>
        <div className="item"></div>
        <img src={imagen2} alt="" />
        <div className="content">
          <div className="author">Lundev</div>
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">ANIMAL</div>
          <div className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, qui ipsam? Rem, obcaecati aut illo nostrum enim porro
            quidem, excepturi suscipit unde ad non dolores nulla adipisci ea
            aliquam. Cupiditate eveniet cum fugit, ipsa labore ipsum totam in
            facere nostrum accusantium similique nesciunt illum dignissimos
            obcaecati magnam quam quibusdam corrupti repudiandae tempore. Dolor
            ducimus impedit vero.
          </div>
          <div className="bottons">
            <button>SEE MORE</button>
            <button>SUBCRIBE</button>
          </div>
        </div>
        <div className="item"></div>
        <img src={imagen3} alt="" />
        <div className="content">
          <div className="author">Lundev</div>
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">ANIMAL</div>
          <div className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, qui ipsam? Rem, obcaecati aut illo nostrum enim porro
            quidem, excepturi suscipit unde ad non dolores nulla adipisci ea
            aliquam. Cupiditate eveniet cum fugit, ipsa labore ipsum totam in
            facere nostrum accusantium similique nesciunt illum dignissimos
            obcaecati magnam quam quibusdam corrupti repudiandae tempore. Dolor
            ducimus impedit vero.
          </div>
          <div className="bottons">
            <button>SEE MORE</button>
            <button>SUBCRIBE</button>
          </div>
        </div>
        <div className="item"></div>
        <img src={imagen4} alt="" />
        <div className="content">
          <div className="author">Lundev</div>
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">ANIMAL</div>
          <div className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, qui ipsam? Rem, obcaecati aut illo nostrum enim porro
            quidem, excepturi suscipit unde ad non dolores nulla adipisci ea
            aliquam. Cupiditate eveniet cum fugit, ipsa labore ipsum totam in
            facere nostrum accusantium similique nesciunt illum dignissimos
            obcaecati magnam quam quibusdam corrupti repudiandae tempore. Dolor
            ducimus impedit vero.
          </div>
          <div className="bottons">
            <button>SEE MORE</button>
            <button>SUBCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
