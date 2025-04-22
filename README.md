# Vite + React 简洁应用示例

这是一个使用 Vite 和 React 构建的简洁美观的单页应用示例，包含首页和两个可跳转的页面。

## 项目特点

- 🚀 基于 Vite 构建，启动和热更新速度极快
- 💅 简洁美观的 UI 设计，响应式布局适配不同设备
- 🧭 使用 react-router 实现页面路由
- 📱 包含三个示例页面：首页、关于我们、作品集
- 🎨 精心设计的 CSS 样式，包含现代化的视觉效果

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
├── public/               # 公共静态资源
├── src/                  # 源代码
│   ├── assets/           # 图片、字体等资源
│   ├── pages/            # 页面组件
│   │   ├── Home.jsx      # 首页
│   │   ├── About.jsx     # 关于页面
│   │   └── Portfolio.jsx # 作品集页面
│   ├── App.css           # 应用样式
│   ├── App.jsx           # 应用主组件
│   ├── index.css         # 全局样式
│   └── main.jsx          # 入口文件
├── index.html            # HTML 模板
└── vite.config.js        # Vite 配置
```

## 功能介绍

- **导航栏**：在所有页面顶部提供导航链接，方便在不同页面间切换。
- **首页**：展示应用的主要特点，并提供到其他页面的链接。
- **关于页面**：展示团队信息和使用的技术栈。
- **作品集页面**：展示项目案例，每个案例包含标题、描述和使用的技术。

## 自定义和扩展

- 修改 `src/App.css` 可以更改应用的样式。
- 在 `src/pages` 目录下添加新的 `.jsx` 文件可以创建新页面。
- 修改 `src/App.jsx` 中的路由配置可以设置新页面的访问路径。

## 技术栈

- [React](https://react.dev/) - 用户界面库
- [Vite](https://vitejs.dev/) - 前端构建工具
- [React Router](https://reactrouter.com/) - 路由管理
