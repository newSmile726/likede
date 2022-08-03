import Layout from "@/layout"
//订单管理
export default{
    path:'/order',
    component: Layout,
    children:[
        {
            path:'',
            component:()=> import('@/views/OrderManagement'),
            meta: { title:'订单管理',icon:'ddgl' }
        }
    ]
}