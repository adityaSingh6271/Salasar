// app/blogs/[slug]/page.jsx
import { notFound } from "next/navigation";
import { detailedBlogData } from "../blogs";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  // Find the blog post by slug
  const blog = detailedBlogData.find((post) => post.slug === slug);

  if (!blog) return notFound();

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <article className="max-w-3xl mx-auto py-12 px-4 mt-18">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        {/* Author + Date */}
        <div className="text-sm text-gray-600 mb-6 flex items-center gap-2">
          <Image
            src={blog.author.avatar}
            alt={blog.author.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <span>{blog.author.name}</span> • <span>{blog.publishedAt}</span> •{" "}
          <span>{blog.readTime}</span>
        </div>

        {/* Cover Image */}
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full rounded-lg mb-8"
        />

        {/* Sections */}
        <div className="prose max-w-none">
          {blog.sections.map((section, index) => {
            if (section.type === "heading")
              return (
                <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                  {section.content}
                </h2>
              );
            if (section.type === "paragraph")
              return (
                <p key={index} className="mb-4 leading-relaxed">
                  {section.content}
                </p>
              );
            if (section.type === "image")
              return (
                <Image
                  key={index}
                  src={section.src}
                  alt={section.alt}
                  width={800}
                  height={400}
                  className="rounded-lg my-6 w-full"
                />
              );
            if (section.type === "blockquote")
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700"
                >
                  {section.content}
                </blockquote>
              );
          })}
        </div>

        {/* Related posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Related posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {blog.relatedPosts.map((post) => (
              <div key={post.slug} className="border rounded-lg p-4">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="rounded mb-4 w-full"
                />
                <h4 className="text-lg font-bold mb-2">{post.title}</h4>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
