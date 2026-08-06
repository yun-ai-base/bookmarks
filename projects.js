// ============================================================
// 项目注册表 · 统一数据源（bookmarks 导航）
// ------------------------------------------------------------
// 规则：
//   1. 在线时以 GitHub API 实时仓库为准 —— 新项目推到 GitHub 后自动出现；
//   2. 本表用于「精修展示」：zh=中文名, desc=简介, icon=图标, cat=分类；
//      某字段缺省时自动回退到 GitHub 仓库的 description / 默认值；
//   3. 离线（API 不可用）时本表即为完整兜底列表。
// 新增项目：往下面数组加一行即可（或等每日巡检自动补全）。
// ============================================================
window.PROJECTS = [
  { name: 'population-report',     zh: '中国人口变局',           desc: '中国人口变局 — 多维数据综合分析报告',                icon: '📊', cat: 'data' },
  { name: 'zhihu-curated',         zh: '知乎精选：改变自己',     desc: '知乎回答精选 · 用什么方法能尽快改变自己？',          icon: '📖', cat: 'content' },
  { name: 'zhihu-wudao',           zh: '知乎精选：悟通道理',     desc: '知乎回答精选 · 最近你悟通了什么道理/现象？',          icon: '💡', cat: 'content' },
  { name: 'collection',            zh: '收藏管理系统',           desc: '个人内容收藏库 · AI 驱动的知识管理与检索',           icon: '📚', cat: 'content' },
  { name: 'research-frontiers',    zh: '科研前沿动态',           desc: '科学突破前沿 · 全球科研突破聚合与AI解读',             icon: '🔬', cat: 'content' },
  { name: 'project-atlas',         zh: '项目总览',               desc: '项目总览 · 所有项目统一入口',                        icon: '🗺️', cat: 'tool' },
  { name: 'bookmarks',             zh: '书签导航',               desc: '个人书签导航页（就是本页）',                          icon: '🔖', cat: 'tool' },
  { name: 'rss-reader',            zh: 'RSS 阅读器',             desc: 'RSS 阅读器 · 静态页面版',                            icon: '📡', cat: 'tool' },
  { name: 'hot-trending',          zh: '热门趋势',               desc: '热门趋势聚合 · 多平台热点追踪',                      icon: '🔥', cat: 'tool' },
  { name: 'vpn-guide',             zh: 'VPN 选购指南',           desc: '2026 VPN 选购指南 · 旗舰/平价/机场/免费对比',         icon: '🛡️', cat: 'tool' },
  { name: 'tool-collection',       zh: '实用工具集',             desc: '实用工具集 · 在线工具聚合导航',                       icon: '🧰', cat: 'tool' },
  { name: 'cognitive-biases-atlas', zh: '认知偏见图谱',          desc: '认知星图 · 21种思维谬误可视化交互图谱',               icon: '🧠', cat: 'tool' },
  { name: 'morris-quotes',         zh: 'Morris 语录集',          desc: 'Morris 语录集 · 100 条认知洞察与智慧点评',            icon: '✨', cat: 'content' },
  { name: 'ai-chat-room',          zh: 'AI 聊天室',              desc: 'AI 聊天室 · 多模型对话界面',                         icon: '💬', cat: 'ai' },
  { name: 'cosmic-discussion',     zh: '宇宙大爆炸对话',         desc: '宇宙大爆炸 · AI 终端深度对话可视化',                  icon: '🌌', cat: 'ai' },
  { name: 'being-towards-death',   zh: '向死而生',               desc: '向死而生 · AI 终端哲学对话可视化',                    icon: '🕯️', cat: 'ai' },
  { name: 'ocean-studio',          zh: '海洋工作室',             desc: '海洋工作室 · 创意交互实验空间',                       icon: '🌊', cat: 'ai' },
  { name: 'philomap',              zh: '哲学星球',               desc: '哲学星球 · 40位哲学家的交互式思想星图',               icon: '🌌', cat: 'content' },
  { name: 'teacher-trend',         zh: '教师招聘数据',           desc: '江苏省教师招聘数据可视化分析',                        icon: '📊', cat: 'data' },
  { name: 'writers-gallery',       zh: '百位作家画廊',           desc: '百位作家画廊 · 中外作家文学宇宙',                     icon: '📚', cat: 'content' },
  { name: 'psychscope',            zh: '心理学大师图谱',         desc: '心智探索 · 心理学大师知识图谱',                       icon: '🧠', cat: 'content' },
  { name: 'sciomap',               zh: '科学星图',               desc: '科学星图 · 科学大师知识图谱',                         icon: '🔬', cat: 'content' },
  { name: 'x-follow-nav',          zh: 'X 关注导航',             desc: 'X 关注分类导航 · 103个关注按主题分类',                 icon: '🐦', cat: 'content' },
  { name: 'twinverse',             zh: '孪生宇宙',               desc: '孪生宇宙 · 项目聚合门户，自动同步所有项目',           icon: '🧬', cat: 'tool' },
  { name: 'math-giants',           zh: '数学史上的巨人',         desc: '数学史上的二十位巨人 · 可视化传记',                   icon: '🔢', cat: 'content' },
  { name: 'honglou-mansion',       zh: '红楼梦大观园',           desc: '红楼梦大观园 · 3D人物关系与名场面可视化',             icon: '🏯', cat: 'content' },
  { name: 'ai-assistant-guide',    zh: 'AI 助手使用指南',        desc: 'AI 助手使用指南 · 提示词与最佳实践',                  icon: '🤖', cat: 'tool' },
  { name: 'chinese-hall-of-fame',  zh: '中国历史群星',           desc: '中国历史群星 · 三维可视化名人堂',                     icon: '🏛️', cat: 'content' },
  { name: 'naval-principles',      zh: '纳瓦尔的人生建议',       desc: '纳瓦尔的40则人生建议 · 跨学科深度拓展',               icon: '📜', cat: 'content' },
  { name: 'claude-code-features',  zh: 'Claude Code 功能手册',   desc: 'Claude Code 功能可视化手册 · 命令分类与场景速查',     icon: '📘', cat: 'tool' },
  { name: 'physics-panorama',      zh: '物理学全景图',           desc: '物理学全景图 · 五纪元三十一节点交互可视化',           icon: '📄', cat: 'content' },
  // ---- 以下仅在离线兜底/历史映射中出现过，简介自动回退 GitHub description ----
  { name: 'existence-probability', zh: '存在概率论',             icon: '📄', cat: 'tool' },
  { name: '180day-plan',           zh: '180天跃迁计划',          icon: '📄', cat: 'tool' },
  { name: 'book-gallery',          zh: '我的书库',               icon: '📚', cat: 'content' },
  { name: 'telegram-nav',          zh: 'Telegram 群组/频道导航', icon: '📡', cat: 'tool' },
  { name: 'poetry-glory-world',    zh: '中国诗词人荣耀世界',     icon: '📜', cat: 'content' },
  { name: 'chinese-colors',        zh: '中国传统色彩',           icon: '🎨', cat: 'content' },
  // ---- 2026-08-02 新增 ----
  { name: 'diary',                 zh: '剪影 · 灵感收藏站',      desc: '私人灵感收藏站 · 名句/奇思/杂思/美图随手记，Git 永久版本化', icon: '✨', cat: 'content' },
  // ---- 2026-08-04 自动巡检新增 ----
  { name: 'economics-map',         zh: '经济经纬',               desc: '经济经纬 · 思想交易所 — 49 位经济学大师的思想光谱与生活兑换', icon: '💹', cat: 'content' },
  // ---- 2026-08-06 自动巡检新增 ----
  { name: 'star-gazer',            zh: 'StarGazer 深空影像',     desc: 'StarGazer · 深空影像探索 — 304 张 NASA 真实影像画廊', icon: '🌌', cat: 'content' },
  { name: 'philosophy-atlas',      zh: '哲学思想图谱',           desc: '脉络 · 思想之河 — 人类哲学知识图谱：39学派/三视角/概念暗流', icon: '🧭', cat: 'content' },
];
