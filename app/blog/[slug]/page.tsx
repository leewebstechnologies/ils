"use client";

import { blogData } from "@/app/data";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./blogDetail.css";

const BlogDetail = () => {
  const route = usePathname();

  const item = blogData.find(
    (i) => i.slug === route.split("/").pop()
  );

  if (!item) {
    return (
      <div className="notFound">
        <h2>Blog post not found.</h2>

        <Link href="/blog" className="backLink">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="main">
      <article className="article">
        <header className="header">
          <Link href="/blog" className="backLink">
            ← Back to Blog
          </Link>

          <h1 className="title">{item.title}</h1>
        </header>

        {item.image && (
          <figure className="imageContainer">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className="image"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </figure>
        )}

        <div className="contentWrapper">
          {item.content &&
            item.content.split("\n\n").map((para, index) => (
              <p key={index} className="paragraph">
                {para.trim()}
              </p>
            ))}
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
