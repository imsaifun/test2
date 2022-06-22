// import '../styles/globals.css';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  // const { session } = pageProps;

  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
