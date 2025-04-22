import React from 'react';
import { Link } from 'react-router';

function About() {
  return (
    <div className="page about-page">
      <h1>关于我们</h1>
      
      <section className="about-content">
        <div className="about-section">
          <h2>我们的故事</h2>
          <p>我们是一支充满激情的团队，致力于创造优质的网站和应用程序。我们相信简约而精美的设计能够带来最好的用户体验。</p>
        </div>
        
        <div className="about-section">
          <h2>我们的使命</h2>
          <p>我们的使命是通过创新的技术解决方案，帮助用户实现他们的数字梦想。我们坚持以用户为中心的设计理念，确保每一个产品都能满足用户的实际需求。</p>
        </div>
        
        <div className="about-section">
          <h2>技术栈</h2>
          <ul className="tech-list">
            <li>React</li>
            <li>Vite</li>
            <li>JavaScript</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
        </div>
      </section>
      
      <div className="navigation-links">
        <Link to="/" className="nav-link">返回首页</Link>
        <Link to="/portfolio" className="nav-link">查看作品集</Link>
      </div>
    </div>
  );
}

export default About;
