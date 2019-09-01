const initState = {
  posts: [
   {id: '1', title: "lorem ipsum1", body: 'tu aakhri ha gham'},
   {id: '2', title: "lorem ipsum2", body: 'tu aakhri ha gham'},
   {id: '3', title: "lorem ipsum3", body: 'tu aakhri ha gham'} 
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;