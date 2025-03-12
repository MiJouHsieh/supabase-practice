import { Nav } from "/src/components/layouts/Nav";
import { Footer } from "/src/components/layouts/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "/src/supabaseClient";

export function SinglePost() {
  let { id } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    const getBlog = async () => {
      try {
        let { data, error, status } = await supabase
          .from("blog")
          .select("*")
          .eq("id", id);

        if (error && status !== 406) {
          console.log("error", error);
          throw error;
        }
        setData(data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBlog();
  }, [id]);

  return (
    <>
      <Nav />
      <header
        className="masthead"
        style={{ backgroundImage: `url('assets/img/home-bg.jpg')` }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <img
                  src={data ? data.image : ""}
                  alt="image"
                  style={{ width: "-webkit-fill-available" }}
                />
                <h1>{data ? data.title : ""}</h1>
                <h2 className="subheading">{data ? data.description : ""}</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {data ? data.content : ""}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
