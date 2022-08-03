import Layout from "@/layout"
//点位管理
export default{
    path:'/node',
    component: Layout,
    meta: { title:'点位管理',icon:'dwgl' },
    children:[
        {
            path:'/node/region',
            component:()=> import('@/views/PointManagement/region'),
            meta: { title:'区域管理'}
        },
        {
            path:'/node/node',
            component:()=> import('@/views/PointManagement/Pointposition'),
            meta: { title:'点位管理' }
        },
        {
            path:'/node/partner',
            component:()=> import('@/views/PointManagement/Partner'),
            meta: { title:'合作商管理' }
        }
    ]
}