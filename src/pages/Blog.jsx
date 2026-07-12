/* ============================================
   LegalPro - Blog Page
   ============================================ */
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendar, FaClock, FaUser, FaArrowRight, FaSearch } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';
import './Page.css';

/* Blog card component */
const BlogCard = ({ post, index, isInView }) => (
  <motion.article
    className={`blog-card ${post.featured ? 'blog-card-featured' : ''}`}
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    aria-label={`Blog post: ${post.title}`}
  >
    {/* Placeholder image */}
    <div className="blog-card-image">
      <div className="blog-image-placeholder">
        <span className="blog-image-icon">⚖</span>
      </div>
      <span className="blog-category">{post.category}</span>
      {post.featured && <span className="blog-featured-badge">Featured</span>}
    </div>

    <div className="blog-card-body">
      <div className="blog-meta">
        <span className="blog-meta-item">
          <FaCalendar />
          {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
        <span className="blog-meta-item">
          <FaClock />
          {post.readTime}
        </span>
        <span className="blog-meta-item">
          <FaUser />
          {post.author}
        </span>
      </div>

      <h2 className="blog-card-title">{post.title}</h2>
      <p className="blog-card-excerpt">{post.excerpt}</p>

      <button className="blog-read-more">
        Read More <FaArrowRight />
      </button>
    </div>
  </motion.article>
);

const BlogPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  /* Unique categories */
  const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];

  /* Filter posts */
  const filtered = blogPosts.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg"></div>
        <div className="container">
          <motion.span
            className="page-hero-label"
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
          >
            Legal Insights
          </motion.span>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Legal Blog & Articles
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Stay informed with expert insights, legal updates, and practical guidance.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section section" ref={ref}>
        <div className="container">

          {/* Filters Row */}
          <div className="blog-filters">
            {/* Search */}
            <div className="blog-search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                className="blog-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog posts"
              />
            </div>

            {/* Category Pills */}
            <div className="blog-categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill ${activeCategory === cat ? 'category-pill-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {filtered.length > 0 ? (
            <div className="blog-grid">
              {filtered.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} isInView={isInView} />
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <span>No articles found. Try a different search or category.</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
