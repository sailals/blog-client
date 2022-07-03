import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <>
      <section className="sidebar mt-5 sticky-lg-top">
        <div className="heading text-center mb-3 w-100">
          <span>Trending</span>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body text-black">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="heading text-center mb-3 mt-4">
          <span>Categories</span>
        </div>

        <span class="badge rounded-pill bg-danger">Life</span>
        <span class="badge rounded-pill bg-danger">Style</span>
        <span class="badge rounded-pill bg-danger">Cinema</span>

        <span class="badge rounded-pill bg-danger">Music</span>
        <span class="badge rounded-pill bg-danger">Sport</span>
        <span class="badge rounded-pill bg-danger">Tech</span>
      </section>
    </>
  );
}

export default Sidebar;
