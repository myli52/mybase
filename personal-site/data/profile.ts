export interface Profile {
  name: string
  title: string
  location: string
  email: string
  education: {
    school: string
    major: string
    degree: string
  }
  summary: string
  languages: string[]
}

export const profile: Profile = {
  name: '李明洋',
  title: 'Web 前端工程师',
  location: '合肥',
  email: 'lmya@163.com',
  education: {
    school: '华北水利水电大学',
    major: '计算机科学与技术',
    degree: '学士学位'
  },
  summary: '专注前端工程化与数据可视化,擅长 Vue 全家桶、TypeScript、ECharts、GIS、Three.js 等技术栈,具备组件库、微前端、可视化大屏等复杂系统开发经验。',
  languages: ['大学英语六级（CET-6）', '普通话二级甲']
}
