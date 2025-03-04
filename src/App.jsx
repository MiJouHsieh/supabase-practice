import { Nav } from "/src/components/layouts/Nav";
import { Footer } from "/src/components/layouts/Footer";
  import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient(
    "https://ajafksdeulckwiaqtzuj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqYWZrc2RldWxja3dpYXF0enVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1ODY2MjcsImV4cCI6MjA1NjE2MjYyN30.EA9JjEL8padkav3yQNV0RzlpMpnpvHXD8UzkOAs5Dvw "
  );

function App() {
  return (
    <div>
      <Nav />
      {/*  Page Header */}
      <header
        className="masthead"
        style={{ backgroundImage: `url('assets/img/home-bg.jpg')` }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*  Main Content */}
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* <!-- Post preview--> */}
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on September 24, 2023
              </p>
            </div>
            {/* <!-- Divider--> */}
            <hr className="my-4" />
            {/* <!-- Post preview--> */}
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">{`I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.`}</h2>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on September 18, 2023
              </p>
            </div>
            {/* <!-- Divider--> */}
            <hr className="my-4" />
            {/* <!-- Post preview--> */}
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  Science has not yet mastered prophecy
                </h2>
                <h3 className="post-subtitle">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on August 24, 2023
              </p>
            </div>
            {/* <!-- Divider--> */}
            <hr className="my-4" />
            {/* <!-- Post preview--> */}
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on July 8, 2023
              </p>
            </div>
            {/* <!-- Divider--> */}
            <hr className="my-4" />
            {/* <!-- Pager--> */}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
