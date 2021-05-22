import moment from 'moment'

export interface Post {
  id: string
  title: string
  created: moment.Moment
}

export const today: Post = {
  id: '1',
  title: 'Today',
  created: moment()
}

export const thisWeek: Post = {
  id: '2',
  title: 'This Week',
  created: moment().subtract(2, 'days')
}

export const thisMonth: Post = {
  id: '3',
  title: 'This Month',
  created: moment().subtract(12, 'days')
}