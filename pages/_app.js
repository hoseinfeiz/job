import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import theme from '@/configs/theme'
import store from '@/configs/store'
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
