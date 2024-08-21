import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorBoundary from './components/ErrorBoundary'
import { EFallback } from './components/Errors'
import { Provider } from 'react-redux'
import store from './store'

import UserManager from './components/UserManager'
import './index.scss'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={<EFallback />}>
            <Provider store={store}>
                <UserManager />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
)