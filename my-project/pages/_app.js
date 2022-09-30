import '../styles/globals.css'
import { store, wrapper } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />

}

export default wrapper.withRedux(MyApp);
