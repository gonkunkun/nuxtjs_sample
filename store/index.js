export const state = () => ({
    title: 'test'
})

export const mutations = {
    update_title(title) {
      state.title = title
    }
}