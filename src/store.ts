import { reactive } from 'vue'

interface State {
  test: string
}

class Store {
  state: State

  constructor(initial: State) {
    this.state = reactive(initial)
  }
}

const store = new Store({
  test: 'test'
})
