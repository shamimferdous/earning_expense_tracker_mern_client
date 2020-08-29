import '../styles/globals.css'

//importing context-api
import AuthContext from '../context-api/AuthContext';

function MyApp({ Component, pageProps }) {
  return  <AuthContext> <Component {...pageProps} /> </AuthContext>
}

export default MyApp
