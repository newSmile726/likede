import Layout from "@/layout"
//策略管理
export default{
    path:'/policy',
    component: Layout,
    children:[
        {
            path:'',
            component:()=> import('@/views/PolicyManagement'),
            meta: { title:'策略管理',icon:'clgl' }
        }
    ]
}