import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h2>Home Component</h2>
      <div className="homeOuter">
        <button type="button" className="btn btn-outline-dark btn-rd ">
          Prev
        </button>
      <div className="carouselOuter">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://techteek.com/wp-content/uploads/2020/10/Top-10-fantasy-cricket-apps-in-India.jpg"
                alt="First slide"
              />
            </div>
          </div>
        </div>
        </div>
        <button type="button" className="btn btn-outline-dark btn-rd">
          Next
        </button>
      </div>

      {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://techteek.com/wp-content/uploads/2020/10/Top-10-fantasy-cricket-apps-in-India.jpg" alt="First slide" />
    </div>
    <div className="carousel-item ">
      <img className="d-block w-100" src="https://indianyug.com/wp-content/uploads/2021/09/Five-Different-Ways-to-Create-a-Fantasy-Cricket-Team.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://lh6.googleusercontent.com/4Rs882sNEJMfp-ESu37wuFjVgWsp1QOkrceP0Ty1xCpnh3bX8RzdiL1hofl02nbmpPZi2VKIVMrbuUotUcaah_zJz7WTtGK67qCIt1ADxtUIK8anjzyfq-HcGuc6zGkjgjI4Y7V8" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
{/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://indianyug.com/wp-content/uploads/2021/09/Five-Different-Ways-to-Create-a-Fantasy-Cricket-Team.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://lh6.googleusercontent.com/4Rs882sNEJMfp-ESu37wuFjVgWsp1QOkrceP0Ty1xCpnh3bX8RzdiL1hofl02nbmpPZi2VKIVMrbuUotUcaah_zJz7WTtGK67qCIt1ADxtUIK8anjzyfq-HcGuc6zGkjgjI4Y7V8" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://indianyug.com/wp-content/uploads/2021/09/Five-Different-Ways-to-Create-a-Fantasy-Cricket-Team.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}

      {/* <div className="d-flex justify-content-center border border-dark w-100">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://lh6.googleusercontent.com/4Rs882sNEJMfp-ESu37wuFjVgWsp1QOkrceP0Ty1xCpnh3bX8RzdiL1hofl02nbmpPZi2VKIVMrbuUotUcaah_zJz7WTtGK67qCIt1ADxtUIK8anjzyfq-HcGuc6zGkjgjI4Y7V8"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://indianyug.com/wp-content/uploads/2021/09/Five-Different-Ways-to-Create-a-Fantasy-Cricket-Team.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://techteek.com/wp-content/uploads/2020/10/Top-10-fantasy-cricket-apps-in-India.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
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
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
