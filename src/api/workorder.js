import request from '@/utils/request'
/**
 *  获取所有工单类型
 * @returns  promise
 */
export const GetAllJobTypesApi = () => {
  return request({
    url: '/task-service/taskType/list'
  })
}

/**
 *  获取所有数据 搜索接口
 * @returns  promise
 */
export const SearchAllJobTypesApi = () => {
    return request({
      url: '/task-service/task/search'
    })
  }