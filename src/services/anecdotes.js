import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

//获取全部anecdote
const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}
//创建新的anecdote
const create = async(content)=> {
  const object = {content, votes:0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

//投票请求
const vote = async(anecdote) => {
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
  return response.data
}


export default {getAll, create, vote}