import reducer  from './reducer'
import { createStore } from 'redux'

const Store = createStore(reducer)

export default Store;