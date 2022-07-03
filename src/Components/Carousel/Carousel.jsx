import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselId"
        className="carousel slide text-center mt-5 "
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Second slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="2"
            aria-label="Third slide"
          ></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="img-fluid"
              src="https://cdn.mos.cms.futurecdn.net/mTYJLd6FLE7GkeiqyuvjBe.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="https://cdn.mos.cms.futurecdn.net/fRtpHuYh7KobsXsmn92ifj.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="https://foreignpolicy.com/wp-content/uploads/2020/08/ghost-of-Tsushima-island-videogame-Japan-1.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
