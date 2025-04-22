import React from 'react';
import { Link } from 'react-router';

function Portfolio() {
  // 模拟作品数据
  const projects = [
    {
      id: 1,
      title: "企业门户网站",
      description: "为某科技公司设计的响应式企业官网，包含产品展示、新闻动态等功能。",
      tech: "React, Node.js, MongoDB"
    },
    {
      id: 2,
      title: "电商购物平台",
      description: "功能完善的电子商务平台，支持商品浏览、购物车、订单管理等功能。",
      tech: "React, Redux, Express, MySQL"
    },
    {
      id: 3,
      title: "社交媒体应用",
      description: "类似微博的社交媒体应用，用户可以发布内容、关注好友、私信聊天。",
      tech: "React, Firebase, GraphQL"
    },
    {
      id: 4,
      title: "在线教育系统",
      description: "支持在线课程学习、作业提交、师生互动的教育平台。",
      tech: "React, TypeScript, Next.js"
    }
  ];

  return (
    <div className="page portfolio-page">
      <h1>我们的作品集</h1>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              <strong>技术栈:</strong> {project.tech}
            </div>
          </div>
        ))}
      </div>
      
      <div className="navigation-links">
        <Link to="/" className="nav-link">返回首页</Link>
        <Link to="/about" className="nav-link">关于我们</Link>
      </div>
    </div>
  );
}

export default Portfolio;
