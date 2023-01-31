import React from "react";
import ReactDOM from "react-dom/client";

/* react-router */
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

/* redux */
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

/* react-query */
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
import "./index.css";
import store from "./store";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ScrollToTop from "components/commonUi/ScrollTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
const persistor = persistStore(store);

const queryClient = new QueryClient();

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<ScrollToTop />
					<GlobalStyle />
					<QueryClientProvider client={queryClient}>
						<ReactQueryDevtools initialIsOpen={false} />
						<App />
					</QueryClientProvider>
				</BrowserRouter>
			</ThemeProvider>
		</PersistGate>
	</Provider>
);
