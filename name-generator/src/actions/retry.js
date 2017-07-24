import store from '../store'
import generateName from '../generateName'


export default function retry() {
  store.setState({
    loading:true
  })
  setTimeout(()=>{
    const name = generateName(store.state.form)
    store.setState({
      companyName: name,
      loading:false
    })
  },1000)

}
