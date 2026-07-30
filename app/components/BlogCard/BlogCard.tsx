import Link from "next/link";
import Image from "next/image";
import "./blogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <article className="single-blog mt-30">
      <div className="blog-thumb">
        <Image src={blog.image} alt={blog.title} width={800} height={500} />
      </div>

      <div className="blog-content">
        <Link href={`/blog/${blog.slug}`}>
          <h3>{blog.title}</h3>
        </Link>

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
            <i className="fa fa-tags"></i>
            <span>{blog.category}</span>
          </li>
        </ul>

        <p>{blog.excerpt}</p>

        <Link href={`/blog/${blog.slug}`} className="read-more">
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
