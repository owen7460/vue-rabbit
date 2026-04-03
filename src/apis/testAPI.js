import httpInstance from '@/utils/http'

export function getCategory() {
  return httpInstance({
    url: 'home/category/head',
  })
}

// export async function getCategory() {
//   const res = await httpInstance.get('home/category/head')
//   return res
// }
