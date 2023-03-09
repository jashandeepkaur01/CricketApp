import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Home() {
  const images = [
    "https://techteek.com/wp-content/uploads/2020/10/Top-10-fantasy-cricket-apps-in-India.jpg",
    "https://lh6.googleusercontent.com/4Rs882sNEJMfp-ESu37wuFjVgWsp1QOkrceP0Ty1xCpnh3bX8RzdiL1hofl02nbmpPZi2VKIVMrbuUotUcaah_zJz7WTtGK67qCIt1ADxtUIK8anjzyfq-HcGuc6zGkjgjI4Y7V8",
    "https://indianyug.com/wp-content/uploads/2021/09/Five-Different-Ways-to-Create-a-Fantasy-Cricket-Team.jpg"
  ];
  const [active,setActive] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
        setActive((prev)=> prev === 2 ? 1 : prev + 1);
    },5000);
  },[])
  
  const onNextClick = () => {
    setActive(curr=>{
     return curr===2?0:curr+1;
    })
  }
  const onPrevClick = () => {
    setActive(curr=>{
     return curr===0?2:curr-1;
    })
  }

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center m-5 ">
        <div className="  m-4 w-75">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              {images?.map((item,index)=>
               <div className={`carousel-item ${active === index ? "active" : ""}`}>
                <img className="d-block w-100" src={item} alt="First slide" />
              </div>)}
              
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
              onClick={onPrevClick}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
              onClick={onNextClick}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;


