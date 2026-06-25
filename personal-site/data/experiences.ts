export interface WorkExperience {
  company: string
  industry: string
  position: string
  startDate: string
  endDate: string
}

export const experiences: WorkExperience[] = [
  {
    company: '北京东方融创科技有限公司',
    industry: '可视化 / 互联网',
    position: '前端开发工程师',
    startDate: '2024-01',
    endDate: '2024-05'
  },
  {
    company: '北京天学网教育科技股份有限公司',
    industry: '数字化教育 / 互联网',
    position: '前端开发工程师',
    startDate: '2021-10',
    endDate: '2024-01'
  },
  {
    company: '北京西太科技有限公司',
    industry: '可视化 / 互联网',
    position: '前端开发工程师',
    startDate: '2019-12',
    endDate: '2021-10'
  }
]
