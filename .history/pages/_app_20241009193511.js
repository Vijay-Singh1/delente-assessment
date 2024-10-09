import { ThemeProvider } from '../contexts/theme';
import '../styles/global.css';
import Navbar from './navbar';

function MyApp({ Component, pageProps }) {
    return <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
    </ThemeProvider>;
}

export default MyApp;