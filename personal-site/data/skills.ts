export interface SkillGroup {
  title: string
  description: string
  skills: string[]
}

export const skills: SkillGroup[] = [
  {
    title: '前端基础',
    description: '具备扎实的前端基础能力,熟悉现代 JavaScript、TypeScript 和浏览器渲染机制,关注页面性能、交互体验与代码质量。',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'ES6+',
      'TypeScript',
      '浏览器渲染机制',
      '前端网页性能优化'
    ]
  },
  {
    title: '框架与状态管理',
    description: '熟练使用 Vue 技术栈构建业务系统,有 Vue2、Vue3、微前端项目开发经验,能够根据业务场景设计合理的页面结构和状态管理方案。',
    skills: ['Vue2', 'Vue3', 'Vuex', 'Pinia', 'qiankun']
  },
  {
    title: '工程化与协作',
    description: '了解前端工程化、构建工具、版本控制和代码规范,具备组件测试、协作开发和代码评审经验。',
    skills: [
      'Webpack',
      'Vite',
      'npm',
      'Git',
      'SVN',
      'Jest',
      '代码规范',
      'Code Review'
    ]
  },
  {
    title: 'UI 与组件化',
    description: '对前端组件化有自己的理解,能够独立封装业务组件,参与组件库规范制定、组件开发和测试。',
    skills: [
      'Element Plus',
      'Vant',
      'Tailwind CSS',
      'up366UI',
      '自定义组件封装',
      '组件库开发'
    ]
  },
  {
    title: '数据可视化',
    description: '具备大屏、地图、图表、3D 模型等多类可视化项目经验,能够结合业务数据设计直观、可交互的可视化页面。',
    skills: [
      'ECharts',
      'GIS',
      'Leaflet',
      'Cesium',
      'Three.js',
      'Babylon.js',
      'Chart.js'
    ]
  },
  {
    title: '跨端与其他能力',
    description: '有微信小程序、IM 聊天、图片处理、OCR、混合应用等业务开发经验,对低代码平台和快速应用构建有一定理解。',
    skills: [
      '微信小程序',
      'IM',
      'OSS',
      'OCR',
      '混合应用',
      '低代码平台理解'
    ]
  }
]
