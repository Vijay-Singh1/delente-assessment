import '../styles/global.css';
import Navbar from './navbar';
import { ThemeProvider } from './theme';

function MyApp({ Component, pageProps }) {
    return <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
    </ThemeProvider>;
}

export default MyApp;