import store from '../store';


export default function refresh(){
  store.setState({
    error : false,
    loading : false,
    companyName : null
  })
}
