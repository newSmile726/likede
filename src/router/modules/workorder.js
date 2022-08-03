import Layout from '@/layout'
//工单管理
export default {
  path: '/task',
  component: Layout,
  meta: { title: '工单管理', icon: 'gdgl' },
  children: [
    {
      path: '/task/business',
      component: () => import('@/views/WorkOrderManagement/OperationWorkOrder'),
      meta: { title: '运营工单' }
    },
    {
      path: '/task/operation',
      component: () =>
        import('@/views/WorkOrderManagement/OperationMaintenanceWorkOrder'),
      meta: { title: '运维工单' }
    }
  ]
}
