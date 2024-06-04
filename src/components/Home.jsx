import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://shaadhiweddings.com/wp-content/uploads/2023/02/Untitled-1-min-1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://cdn0.weddingwire.in/article/8734/original/1280/jpg/114378-weddingnama-umaid-bhawan-palace.jpeg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://edm.com/.image/ar_1.91,c_fill,cs_srgb,fl_progressive,g_xy_center,q_auto:good,w_1200,x_1956,y_1370/MTk2ODgyNDM4NDc4MTEyMDAz/ultramizedd2023_0324_182751-09558_ime.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="row g-3">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="card">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5dc609eb2792106489dcd718/1660503240545-2VKWGBMRYNTNYOYDMBNE/6580EFBB-A038-4B2F-A921-C8EC8FDCBA89.JPG"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body"></div>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h3>About Elegance Events</h3>
            <h1>Intimate Gatherings to Grand Celebrations</h1>
            <p>
              Elegance Events is a full-service event management company that
              specializes in weddings, corporate events, and social gatherings.
              We have over 10 years of experience in the event planning industry
              and have helped hundreds of clients create unforgettable events.
              We believe that every event is unique and deserves to be planned
              with care. We work with our clients to understand their vision for
              their event and then create a plan that meets their needs and
              budget. We are committed to providing our clients with the best
              possible event planning experience. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eos amet sed unde nulla quasi quo,
              consequatur excepturi perspiciatis quidem asperiores alias
              temporibus odio eligendi facilis maxime mollitia iure sit
              sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Odio explicabo atque quod ex unde illum veniam culpa ut
              soluta voluptas harum, vero quia dicta voluptatum laudantium,
              expedita delectus fugiat impedit.
            </p>
          </div>
        </div>
        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2>Our Services</h2>
          </div>
        </div>

        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
              <img
                src="https://www.grandweddings.co.in/wp-content/uploads/2020/01/Wedding-Event.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-text">Wedding</h2>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
              <img
                src="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/04/royal.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-text">Stage Decor</h2>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
              <img
                src="https://static.wixstatic.com/media/dc841e_50d5020488a44706a66d7ab9efa314d5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-text">Birthday</h2>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
              <img
                src="https://images.firstpost.com/uploads/2022/09/640363-2022-09-07T121323.195.jpg?im=Resize,width=720,aspect=fit,type=normal"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-text">Celebrity Management</h2>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
              <img
                src="https://t3.ftcdn.net/jpg/06/16/07/70/360_F_616077017_Jp4pLORx9f3TihEDLq0P9tX6mpXmk6iO.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-text">DJ</h2>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
              <img
                src="https://anglicancompass.com/wp-content/uploads/2019/03/lightstock_501267_full_user_43218209.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-text">Baptism</h2>
              </div>
            </div>
          </div>
          <div className="row g-3 text-center">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-text">To Know more about our <b>Services</b></h2>
                    <a className="btn btn-success" href="/service"> Click Here! </a>
                   
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
