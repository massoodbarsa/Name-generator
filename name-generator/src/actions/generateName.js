import store from '../store'
import generateName from '../generateName'


export default function  generateNameAction() {
  store.setState({
    loading:true
  })
  setTimeout(()=>{
    const name = generateName(store.state.form)
    store.setState({
      companyName: name,
      loading:false
    })
  },3000)

}
