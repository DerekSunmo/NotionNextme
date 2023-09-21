const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到我的小站', url: 'https://blog.xiaoayu.ren' },
    { title: '我是奶昔，励志成为一名产品经理', url: 'https://blog.xiaoayu.ren' },
    { title: '喜欢做具有挑战性的事情', url: 'https://blog.xiaoayu.ren' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享生活',
  HERO_TITLE_2: '与学习历程',
  HERO_TITLE_3: 'NAIXI/BLOG',
  HERO_TITLE_4: '小站回归',
  HERO_TITLE_5: '奶昔小站新版上线',
  HERO_TITLE_LINK: 'https://blog.xiaoayu.ren',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '推荐',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 爱好数分与商业',
    '🏃 脚踏实地行动派',
    '🏠 喜欢旅游与美食',
    '🧱 团队小组发动机'
  ],
  INFO_CARD_URL: 'https://github.com/yynaixi', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'Excel',
      img_1: '/images/heo/excel.png',
      color_1: '#989bf8',
      title_2: 'PPT',
      img_2: '/images/heo/ppt.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Stata',
      img_1: '/images/heo/stata.png',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'Word',
      img_1: '/images/heo/word.png',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'spss',
      img_2: '/images/heo/spss.png',
      color_2: '#1f1f1f'
    }
  ],

  SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '与我交流',
  SOCIAL_CARD_TITLE_2: '发送邮件与我交流',
  SOCIAL_CARD_TITLE_3: '点击发送邮件',
  SOCIAL_CARD_URL: 'mailto:2102008790@qq.com',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
