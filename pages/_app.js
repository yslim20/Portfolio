import AppProvider from '@/utils/provider';
import App from 'next/app';
import styles from '@/styles/globals.css';
import GlobalStyles from "@/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
    <GlobalStyles />
  </AppProvider>  
}

export default MyApp