import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts:[],
    post:{},
    comments:[]

  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setPost(state, post) {
      state.post = post
    },
    setComments(state, comments) {
      state.comments = comments
    },

  },
  actions: {
    setPosts({commit}, posts) {
      commit("setPosts", posts);
    },
    setPost({commit}, id) {
      let post = this.state.posts[id-1]
      commit("setPost", post);
      // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      //  let post = res.data
      //  commit("setPost", post);
      // })
      commit("setComments", [])
      axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(res => {
        let comments = res.data
        commit("setComments",  comments);
      }).catch(err=> {
        console.log(err)
      })
          },
          addPost({commit}, post) {
           
            axios.post('https://jsonplaceholder.typicode.com/posts', post).then(res=> {
              let posts = Object.assign(this.state.posts)
              let newPost = res.data
              posts.push(newPost)
              commit("setPosts", posts);
            }).catch(err=> {
              console.log(err)
            })
            
          },
          editPost({commit}, data) {
            let key = data.key
            let post = data.post 
            let posts = Object.assign(this.state.posts)
            posts[key] = post
            axios.patch(`https://jsonplaceholder.typicode.com/posts/${key+1}`, post).catch(err=> {
              console.log(err)
            })
            commit("setPosts", posts);
          },
          deletePost({commit}, i) {
            let posts = Object.assign(this.state.posts)
            let post = posts[i]
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`).catch(err=> {
              console.log(err)
            })
         
            posts.splice(i, 1)
            commit("setPosts", posts);
        
          }

    
  },
  modules: {},
});
