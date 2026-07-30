import Image from "next/image";
import "./blog-details.css";
import FloatingButton from "@/app/components/floatingButton/FloatingButton";

type BlogDetailsProps = {
  slug: string;
};

const blogs = [
  {
    slug: "few-tips-for-getting-better-results",
    title: "Few Tips For Getting Better Results In Examination",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "25 Dec 2018",
    category: "Education",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vero deserunt minima, numquam laboriosam.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci unde, temporibus fugit dolore amet exercitationem asperiores rerum molestiae officiis.",
    ],
  },
  {
    slug: "learning-strategies",
    title: "Learning Strategies Every Student Should Know",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "28 Dec 2018",
    category: "Education",
    content: [
      "Learning effectively requires consistency and practice.",
      "Create a timetable, revise regularly and solve past questions.",
    ],
  },
];

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="pt-90 pb-120">
        <div className="container">
          <h2>Blog not found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-details pt-90 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <article className="blog-single">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1200}
                height={700}
                className="blog-image"
                priority
              />

              <div className="blog-body">
                <h1>{blog.title}</h1>

                <ul className="blog-meta">
                  <li>
                    <i className="fa fa-calendar"></i>
                    <span>{blog.date}</span>
                  </li>

                  <li>
                    <i className="fa fa-user"></i>
                    <span>{blog.author}</span>
                  </li>

                  <li>
                    <i className="fa fa-folder"></i>
                    <span>{blog.category}</span>
                  </li>
                </ul>

                {blog.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>

      <FloatingButton />
    </section>
  );
}
