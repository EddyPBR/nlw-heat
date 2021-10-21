import { GlobalStyle } from "@styles/global";
import { theme } from "@styles/theme";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { toasterOptions } from "@styles/toaster";
import { AuthProvider } from "@contexts/AuthContext";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Toaster position="top-right" toastOptions={toasterOptions} />
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ThemeProvider>
	);
}
export default MyApp;
