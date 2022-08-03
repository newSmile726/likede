import Layout from "@/layout"
//人员管理
export default{
    path:'/user',
    component: Layout,
    meta: { title:'人员管理',icon:'rygl' },
    children:[
        {
            path:'/user/index',
            component:()=> import('@/views/PersonnelManagement/Personnellist'),
            meta: { title:'人员列表'}
        },
        {
            path:'/user/user-task-stats',
            component:()=> import('@/views/PersonnelManagement/HumanEfficiencyStatistics'),
            meta: { title:'人效统计'}
        },
        {
            path:'/user/user-work',
            component:()=> import('@/views/PersonnelManagement/workload'),
            meta: { title:'工作量列表'}
        }
    ]
}