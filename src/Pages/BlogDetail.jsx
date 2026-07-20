import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import ContactForm from "../Components/ContactForm";
import BlogFilter from "../Components/BlogFilter";
import blogData from "../Data/blogData"; 

// ─── JSON-LD schema builder ───────────────────────────────────────────────────
const buildSchema = (blog) => {
  const publisher = {
    "@type": "Organization",
    name: "Pendagon Technologies",
    url: "https://pendagon.in/",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription || blog.p,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.author?.name || "Pendagon Team",
      url: blog.author?.url || "https://pendagon.in/",
    },
    publisher,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pendagon.in${blog.canonicalPath || `/blog/${blog.id}`}`,
    },
  };

  const schemas = [articleSchema];

  // FAQPage schema — only when faqItems are provided
  if (blog.faqItems && blog.faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  // BreadcrumbList schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pendagon.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://pendagon.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://pendagon.in${blog.canonicalPath || `/blog/${blog.id}`}`,
      },
    ],
  });

  return schemas;
};

// ─── Component ────────────────────────────────────────────────────────────────
const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <div>Blog not found</div>;

  const schemas = buildSchema(blog);
  const canonicalUrl = `https://pendagoninstitute.com${
    blog.canonicalPath || `/blog/${blog.id}`
  }`;

  return (
    <>
      {/* ── SEO meta tags ─────────────────────────────────────────────────── */}
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta name="description" content={blog.metaDescription || blog.p} />
        {blog.primaryKeyword && (
          <meta name="keywords" content={blog.primaryKeyword} />
        )}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.p}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={blog.date} />
        {blog.author && (
          <meta property="article:author" content={blog.author.name} />
        )}

        {/* JSON-LD structured data */}
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* ── Page content ──────────────────────────────────────────────────── */}
      <article className="max-w-6xl mx-auto px-2 pt-36 font-space">
        <h2 className="text-[40px] font-medium pr-10">{blog.title}</h2>
        {blog.p && (
          <p className="text-black text-[24px] mb-4 pr-35">{blog.p}</p>
        )}
        <p className="text-gray-500 text-sm mb-6 flex">
          {blog.date}&nbsp; &nbsp;{blog.time}
          {blog.author && (
            <>
              &nbsp; &nbsp;·&nbsp; &nbsp;
              {blog.author.url ? (
                <a
                  href={blog.author.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {blog.author.name}
                </a>
              ) : (
                <span>{blog.author.name}</span>
              )}
            </>
          )}
        </p>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-6"
        />

        <div className="max-w-6xl mx-auto pl-5 mt-10 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10">
          {/* Sidebar */}
          <aside className="col-span-1 space-y-4 text-[18px]">
            {blog.sidebar?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-gray-400 hover:text-black transition-colors duration-200"
              >
                {item.text}
              </a>
            ))}
          </aside>

          {/* Body */}
          <section className="text-[15px] leading-relaxed">
            {blog.content}
          </section>
        </div>

        {/* ── Author bio ────────────────────────────────────────────────── */}
        {blog.author && (
          <div className="mt-14 border-t border-gray-200 pt-8 flex gap-4 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">
                Written by
              </p>
              {blog.author.url ? (
                <a
                  href={blog.author.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-medium hover:underline"
                >
                  {blog.author.name}
                </a>
              ) : (
                <p className="text-[18px] font-medium">{blog.author.name}</p>
              )}
              {blog.author.role && (
                <p className="text-sm text-gray-500">{blog.author.role}</p>
              )}
              {blog.author.bio && (
                <p className="text-[14px] text-gray-600 mt-2 max-w-xl">
                  {blog.author.bio}
                </p>
              )}
            </div>
          </div>
        )}

        {/* ── More blogs ────────────────────────────────────────────────── */}
        <div className="max-w-8xl mt-20">
          <h2 className="text-[44px] font-semibold">More on Branding</h2>
          <BlogFilter
            hideCurrentId={blog.id}
            showFilters={false}
            limit={2}
            paddingClass="px-0 py-6"
          />
        </div>
      </article>

      <ContactForm />
    </>
  );
};

export default BlogDetail;
