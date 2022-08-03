import Layout from '@/layout'
//对账统计
export default {
  path: '/reconciliation',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/ReconciliationStatistics'),
      meta: { title: '对账统计', icon: 'dztj' }
    }
  ]
}
