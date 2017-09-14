import React from "react"
import ReactDOM from "react-dom"
import thunk from "redux-thunk"
import {AppContainer} from "react-hot-loader"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import App from "./App.jsx"
import rootReducer from "./reducers"

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
	<AppContainer>
		<Provider store={store}>
			<App/>
		</Provider>
	</AppContainer>,
	document.getElementById("todoapp")
)

if(module.hot) {
	module.hot.accept("./App",() => {
		const NextApp = require("./App").default
		ReactDOM.render(
			<AppContainer>
				<Provider store={store}>
					<NextApp/>
				</Provider>
			</AppContainer>
		)
	})
}
