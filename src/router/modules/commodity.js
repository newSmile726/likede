import Layout from "@/layout"
//商品管理
export default{
    path:'/sku',
    component: Layout,
    meta: { title:'商品管理',icon:'spgl' },
    children:[
        {
            path:'/sku/sku-class',
            component:()=> import('@/views/CommodityManagement/CommodityType'),
            meta: { title:'商品类型' }
        },
        {
            path:'/sku/sku',
            component:()=> import('@/views/CommodityManagement/Commodity'),
            meta: { title:'商品管理'}
        }
    ]
}