// import blogImg from "../../images/4.jpg";
import BlogCard from "../components/BlogCard/BlogCard";
import FloatingButton from "../components/floatingButton/FloatingButton";
import "./blog.css";

const blogs = [
  {
    slug: "few-tips-for-get-better-results",
    title: "Few tips for getting better results in examination",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "25 Dec 2018",
    category: "Education",
    excerpt:
      "Lorem ipsum gravida nibh vel velit auctor aliquet sollicitudin...",
  },

  {
    slug: "learning-strategies",
    title: "Learning strategies every student should know",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "28 Dec 2018",
    category: "Education",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

const Blog = () => {
  return (
    <section id="blog-page" className="pt-90 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <FloatingButton />
    </section>
  );
};
export default Blog;
