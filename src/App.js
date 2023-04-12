import AppSignal from './useSignal/AppSignal'
import AppState from './useState/AppState'

function App() {
    return (
        <>
            <h1>AppState</h1>
            <AppState />
            <h1>AppSignals</h1>
            <AppSignal />
        </>
    )
}

export default App
