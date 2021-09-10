import '../styles/globals.css'
import Layout from '../comps/Layout'
import { layout } from 'platform'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
