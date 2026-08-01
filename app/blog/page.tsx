import Image from "next/image";
import { blogData } from "../data";
import BlogCard from "../components/blogCard/BlogCard";
import "./blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <section className="heroSection">
        <Image
          src="/images/blog/blog-1.jpg"
          alt="Our Blog Banner"
          fill
          priority
          className="heroImage"
        />
        <div className="heroContent">
          <h1 className="heroTitle">Insights & Innovations</h1>
          <p className="heroSubtitle">
            Discover our latest educational insights, school news, learning
            resources, and inspiring ideas to help students thrive academically
            and beyond.
          </p>
        </div>
      </section>
      <main className="mainContent">
        <div className="grid">
          {blogData.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Blog;
