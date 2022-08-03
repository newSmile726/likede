import Layout from "@/layout"
//设备管理
export default{
    path:'/vm',
    component: Layout,
    meta: { title:'设备管理',icon:'sbgl' },
    children:[
        {
            path:'/vm/index',
            component:()=> import('@/views/deviceManagement/equipment'),
            meta: { title:'设备管理'}
        },
        {
            path:'/vm/status',
            component:()=> import('@/views/deviceManagement/EquipmentStatus'),
            meta: { title:'设备状态'}
        },
        {
            path:'/vm/type',
            component:()=> import('@/views/deviceManagement/EquipmentType'),
            meta: { title:'设备类型管理'}
        }
    ]
}