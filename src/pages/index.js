import React, { Fragment } from "react"
import App from "./App"
import store from "./store"
import { Provider } from "react-redux"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </Fragment>
  )
}

export default IndexPage;