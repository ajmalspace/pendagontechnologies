import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../Data/blogData";

const BlogFilter = ({
  hideCurrentId = null,
  showFilters = true,
  limit = null,
  paddingClass = "px-6 md:px-12 lg:px-10 py-12",
}) => {
  const categories = ["Marketing", "Development", "Career", "Skills"];
  const filters = [
    { name: "Everything", count: blogData.length },
    ...categories.map((cat) => ({
      name: cat,
      count: blogData.filter((a) => a.category === cat).length,
    })),
  ];

  const [activeFilter, setActiveFilter] = useState("Everything");

  // Newest blog (last item added in blogData.js) shows first in the grid.
  const getNewestFirst = (data) => [...data].reverse();

  let filteredArticles = getNewestFirst(blogData).filter(
    (article) =>
      (!hideCurrentId || article.id !== hideCurrentId) &&
      (activeFilter === "Everything" || article.category === activeFilter),
  );

  if (limit) {
    filteredArticles = filteredArticles.slice(0, limit);
  }

  return (
    <div>
      <div
        className={`${paddingClass} max-w-7xl mx-auto font-space px-9 py-14`}
      >
        {/* Filter Section */}
        {showFilters && (
          <div className="flex flex-wrap gap-6 text-sm font-medium mb-10">
            <span className="uppercase text-black">Filter by topic:</span>
            {filters.map(({ name, count }) => (
              <span
                key={name}
                onClick={() => setActiveFilter(name)}
                className={`cursor-pointer uppercase tracking-wide transition-colors duration-200 ${
                  activeFilter === name
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {name}
                <sup className="ml-1 text-xs align-super text-gray-400">
                  {count}
                </sup>
              </span>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <Link
              to={`/blog/${article.id}`}
              key={article.id}
              className="group block w-full"
            >
              <div className="w-full h-[320px] overflow-hidden rounded-xl bg-white">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="my-4 space-y-1">
                <h3 className="text-[20px] font-medium leading- group-hover:underline pb-4">
                  {article.title}
                </h3>
                <p className="text-[16px] text-gray-500">
                  {article.date} · {article.time}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Show footer only when NOT limiting */}
      {!limit && (
        <div className="text-center pt-20 text-3xl font-semibold md:3xl">
          <p>Ready to take next step with us?</p>
        </div>
      )}
    </div>
  );
};

export default BlogFilter;
