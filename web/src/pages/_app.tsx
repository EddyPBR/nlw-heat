import { GlobalStyle } from "@styles/global";
import { theme } from "@styles/theme";
import type { AppProps } from "next/app";
import { AuthProvider } from "@contexts/authContext";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
			<GlobalStyle />
		</ThemeProvider>
	);
}
export default MyApp;
