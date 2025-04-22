import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div className="page home-page">
      <header className="hero">
        <h1>欢迎来到我的网站</h1>
        <p>这是一个使用Vite和React构建的简洁应用</p>
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h2>精美设计</h2>
          <p>简洁直观的用户界面，优雅的视觉体验</p>
        </div>
        <div className="feature-card">
          <h2>快速响应</h2>
          <p>基于Vite构建，提供极速的开发和加载体验</p>
        </div>
        <div className="feature-card">
          <h2>React驱动</h2>
          <p>使用最新的React技术栈，组件化开发</p>
        </div>
      </section>
      
      <div className="navigation-links">
        <Link to="/about" className="nav-link">关于我们</Link>
        <Link to="/portfolio" className="nav-link">作品集</Link>
      </div>
    </div>
  );
}

export default Home;
