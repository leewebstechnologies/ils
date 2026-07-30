import Link from "next/link";
import Image from "next/image";
import "./blogCard.css";

type Blog = {
  slug: string;
  title: string;
  image: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
};

type BlogCardProps = {
  blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article className="single-blog mt-30">
      <div className="blog-thumb">
        <Image src={blog.image} alt={blog.title} width={750} height={450} />
      </div>

      <div className="blog-content">
        <h4>
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h4>

        <ul className="blog-meta">
          <li>{blog.author}</li>
          <li>{blog.date}</li>
          <li>{blog.category}</li>
        </ul>

        <p>{blog.excerpt}</p>

        <Link href={`/blog/${blog.slug}`} className="main-btn">
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
