import BlogCard from "../components/BlogCard/BlogCard";
import FloatingButton from "../components/floatingButton/FloatingButton";
import "./blog.css";

const blogs = [
  {
    slug: "few-tips-for-getting-better-results",
    title: "Few tips for getting better results in examination",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "25 Dec 2018",
    category: "Education",
    excerpt:
      "Success in examinations is not just about studying harder—it is about studying smarter and maintaining good habits.",
  },

  {
    slug: "learning-strategies",
    title: "Learning strategies every student should know",
    image: "/images/4.jpg",
    author: "Mark Anthem",
    date: "28 Dec 2018",
    category: "Education",
    excerpt:
      "Every student has the potential to succeed, but achieving academic excellence requires more than just attending classes.",
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
