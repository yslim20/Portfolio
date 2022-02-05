import AppProvider from '@/utils/provider';
import App from 'next/app';
import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>  
}

export default MyApp