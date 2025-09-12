import { notFound } from "next/navigation";
import { detailedBlogData } from "../blogs";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = detailedBlogData[params.slug];
   
  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Author + Date */}
      <div className="text-sm text-gray-600 mb-6 flex items-center gap-2">
        <img
          src={blog.author.avatar}
          alt={blog.author.name}
          className="w-8 h-8 rounded-full"
        />
        <span>{blog.author.name}</span> • <span>{blog.publishedAt}</span> •{" "}
        <span>{blog.readTime}</span>
      </div>

      {/* Cover Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full rounded-lg mb-8"
      />

      {/* Sections */}
      <div className="prose">
        {blog.sections.map((section, index) => {
          if (section.type === "heading")
            return <h2 key={index}>{section.content}</h2>;
          if (section.type === "paragraph")
            return <p key={index}>{section.content}</p>;
          if (section.type === "image")
            return (
              <img
                key={index}
                src={section.src}
                alt={section.alt}
                className="rounded-lg my-6"
              />
            );
          if (section.type === "blockquote")
            return <blockquote key={index}>{section.content}</blockquote>;
        })}
      </div>

      {/* Related posts */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">Related posts</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {blog.relatedPosts.map((post) => (
            <div key={post.slug} className="border rounded-lg p-4">
              <img
                src={post.coverImage}
                alt={post.title}
                className="rounded mb-4"
              />
              <h4 className="text-lg font-bold">{post.title}</h4>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
