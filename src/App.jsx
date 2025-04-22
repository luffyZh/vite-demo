import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'

// 导入页面组件
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="main-nav">
          <div className="logo">
            <Link to="/">Vite示例</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="/portfolio">作品集</Link></li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Vite示例应用 | 使用React和Vite构建</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
