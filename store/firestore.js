export const state = () => ({
  data: {
    shops: [],
    jeans: [],
    patterns: [],
    colors: []
  }
})

export const mutations = {
  SET_DATA(state, obj) {
    state.data[obj.key] = obj.data
  }
}

export const actions = {
  bindDB({ state, commit }) {
    for (const dataKey in state.data) {
      const dataRef = this.$fireStore.collection(String(dataKey))

      dataRef.onSnapshot(function(querySnapshot) {
        const dataObj = []
        querySnapshot.forEach(function(doc) {
          dataObj.push({ id: doc.id, data: doc.data() })
        })

        commit('SET_DATA', {
          key: dataKey,
          data: dataObj
        })
      })
    }
  },
  async push(context, obj) {
    await this.$fireStore
      .collection(obj.collection.toString())
      .doc(obj.child.toString())
      .set(obj.data)
      .then(function() {
        console.log('Document successfully written!')
      })
      .catch(function(error) {
        console.error('Error writing document: ', error)
      })
  },
  async remove(context, obj) {
    await this.$fireStore
      .collection(obj.collection.toString())
      .doc(obj.child.toString())
      .delete()
      .then(function() {
        console.log('Removed')
      })
      .catch(function(error) {
        console.error('Error :', error)
      })
  }
}

export const getters = {}
