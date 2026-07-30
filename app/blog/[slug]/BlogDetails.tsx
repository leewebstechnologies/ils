import Image from "next/image";
import "./blog-details.css";
import FloatingButton from "@/app/components/floatingButton/FloatingButton";

const BlogDetails = () => {
  return (
    <section className="blog-details pt-90 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <article className="blog-single">
              <Image
                src="/images/4.jpg"
                alt="Blog"
                width={1200}
                height={700}
                className="blog-image"
              />

              <div className="blog-body">
                <h1>Few Tips For Getting Better Results In Examination</h1>

                <ul className="blog-meta">
                  <li>
                    <i className="fa fa-calendar"></i>
                    <span>25 Dec 2018</span>
                  </li>

                  <li>
                    <i className="fa fa-user"></i>
                    <span>Mark Anthem</span>
                  </li>

                  <li>
                    <i className="fa fa-folder"></i>
                    <span>Education</span>
                  </li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus vero deserunt minima, numquam laboriosam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam adipisci unde, temporibus fugit dolore amet
                  exercitationem asperiores rerum molestiae officiis.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <FloatingButton />
    </section>
  );
};
export default BlogDetails;
