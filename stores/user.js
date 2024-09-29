const u = JSON.parse(localStorage.getItem('user'))

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: u ? u : ''
  }),
  actions: {

  }
})