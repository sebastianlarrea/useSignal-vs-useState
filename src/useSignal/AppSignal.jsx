import { signal } from '@preact/signals-react'
import Main from './Main'
import NavBar from './NavBar'

const cart = signal([])

function AppSignal() {
    console.log('<AppSignal />')

    return (
        <>
            <Main cart={cart} />
            <NavBar cart={cart} />
        </>
    )
}

export default AppSignal
