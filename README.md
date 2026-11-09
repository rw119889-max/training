# 训练与营养助手（training-nutrition-mvp）

移动端优先的个人训练与营养辅助 Web 应用：快速查动作要领、找一餐简单高蛋白的选择、随手翻训练与营养知识。

## 功能

- **首页**：动作速查、推荐快速餐、推荐知识
- **动作库**：按动作名称 / 目标肌群搜索，查看动作要点与常见错误
- **食谱库**：快手高蛋白食谱，食材清单与制作步骤
- **知识库**：训练原则 / 营养基础 / 恢复 / 常见误区，支持分类筛选与全文搜索
- **我的**：本机收藏（localStorage，不上传服务器）
- **PWA**：可添加到手机主屏幕，生产环境提供离线兜底页

## 技术栈

- Next.js 16（App Router + Turbopack）
- React 19
- Tailwind CSS 4
- TypeScript（strict）

## 本地开发

需要 Node.js >= 20.9。

```bash
npm install
npm run dev
```

打开 http://localhost:3000。

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产构建 |
| `npm run start` | 启动生产服务（需先 build） |
| `npm run lint` | ESLint 检查 |
| `npm run typecheck` | TypeScript 类型检查 |

## 目录结构

```
src/
  app/                  # 页面路由（App Router）
    exercises/          # 动作库列表与详情
    recipes/            # 食谱库列表与详情
    knowledge/          # 知识库列表与详情
    profile/            # 我的（本机收藏）
    loading.tsx         # 全局加载骨架
    error.tsx           # 错误边界
    not-found.tsx       # 404 页面
    manifest.ts         # PWA manifest
  components/           # 通用组件与各列表的客户端搜索组件
  data/                 # 动作 / 食谱 / 知识数据（TypeScript 数组）
public/
  sw.js                 # Service Worker（仅生产环境注册）
  icons/                # PWA 图标
```

## 维护数据

动作、食谱、知识内容都在 `src/data/` 下的 TypeScript 数组里，修改后开发服务器会自动热更新。新增条目时保持 `id` 唯一且稳定，详情页链接依赖它。

## 部署

可部署到 Vercel 或任意支持 Node.js 的环境：

```bash
npm run build
npm run start
```

离线缓存（`public/sw.js`）只在生产环境注册；每次发布若要强制刷新缓存，修改 `sw.js` 里的 `CACHE_VERSION`。
