import instance from '../http/index'

function ListContent() {
  return instance({
    url: 'recommend/appIndex?',
    method: 'get'
  })
}

// function comment() {
//   return instance({
//     url: 'teacher',
//     method: 'get'
//   })
// }

export default {
  ListContent
  // comment
}