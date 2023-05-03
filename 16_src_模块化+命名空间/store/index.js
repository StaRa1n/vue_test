//该文件用于创建Vuex中最核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)

const countOptions = {
  namespaced: true,
  actions:{
    addOdd(context, value){
      //判断是否为奇数
      if (context.state.sum % 2) {
        console.log('action中的addOdd被调用了', context, value);
        context.commit('ADDODD', value)
      }else{
        console.log('当前值不为奇数');
      }
    },
    addWait(context, value){
      console.log('action中的addWait被调用了', context, value);
      setTimeout(() => {
        context.commit('ADDWAIT', value)
      }, 500);
    },
  },
  mutations: {
      ADD(state,value){
        console.log('mutations里的ADD被调用了',state.sum, value);
        state.sum += value
      },
      MINUS(state,value){
        console.log('mutations里的MINUS被调用了',state.sum, value);
        state.sum -= value
      },
      ADDODD(state,value){
        console.log('mutations里的ADDODD被调用了',state.sum, value);
        state.sum += value
      },
      ADDWAIT(state,value){
        console.log('mutations里的ADDWAIT被调用了',state.sum, value);
        state.sum += value
      },
  },
  state: {
    sum: 0,
    school: '江财',
    majoy: '软件工程',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}

const personOptions = {
  namespaced: true,

  actions:{},
  mutations: {
    addPerson(state,value) {
      state.persons.push({id: state.persons.length, name: value})
    }
  },
  state: {
    persons: [
      {id: '001', name: '张三'},
      {id: '002', name: '李四'}
    ]
  },
  getters: {}
}

//创建并导出store
export default new Vuex.Store({
    modules: {
      countAbout: countOptions,
      personAbout: personOptions
    }
})


