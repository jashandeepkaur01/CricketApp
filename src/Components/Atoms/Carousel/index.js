import { useEffect, useState } from "react";

function Carousel() {
  const images = [
    "https://techteek.com/wp-content/uploads/2020/10/Top-10-fantasy-cricket-apps-in-India.jpg",
    "https://lh6.googleusercontent.com/4Rs882sNEJMfp-ESu37wuFjVgWsp1QOkrceP0Ty1xCpnh3bX8RzdiL1hofl02nbmpPZi2VKIVMrbuUotUcaah_zJz7WTtGK67qCIt1ADxtUIK8anjzyfq-HcGuc6zGkjgjI4Y7V8",
    "https://media.istockphoto.com/id/991167330/vector/vector-abstract-illustration-of-batsman-playing-cricket-from-colored-liquid-splashes-and.jpg?s=612x612&w=0&k=20&c=gMsGMu-q5hcsgIrX_UkMnm5OmjPlwf4zWINF5T8BraM=",
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setActive((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
  }, []);

  const onNextClick = () => {
    setActive((curr) => {
      return curr === 2 ? 0 : curr + 1;
    });
  };
  const onPrevClick = () => {
    setActive((curr) => {
      return curr === 0 ? 2 : curr - 1;
    });
  };
  return (
    <div>
      <div className="main-carousel">
        <div className="d-flex justify-content-center m-5 ">
          <div className="m-5 w-75">
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
                {images?.map((item, index) => (
                  <div
                    className={`carousel-item ${active === index ? "active" : ""
                      }`}
                  >
                    <img
                      className="d-block w-100"
                      src={item}
                      alt="First slide"
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="javascript:void(0)"
                role="button"
                data-slide="prev"
                onClick={onPrevClick}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                className="carousel-control-next"
                href="javascript:void(0)"
                role="button"
                data-slide="next"
                onClick={onNextClick}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
