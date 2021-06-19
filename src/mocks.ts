import moment from 'moment'

export interface Post {
  id: string
  title: string
  created: moment.Moment
  html?: string
  markdown?: string
  authorId: string
}

// 2020-01-01
export const today: Post = {
  id: '1',
  title: 'Today',
  created: moment().subtract(1, 'second'),
  authorId: '1'
}

export const thisWeek: Post = {
  id: '2',
  title: 'This Week',
  created: moment().subtract(2, 'days'),
  authorId: '1'
}

export const thisMonth: Post = {
  id: '3',
  title: 'This Month',
  created: moment().subtract(12, 'days'),
  authorId: '1'
}