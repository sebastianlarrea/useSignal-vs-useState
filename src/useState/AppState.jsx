import { useState } from 'react'
import Main from './Main'
import NavBar from './NavBar'

function AppState() {
    console.log('<AppSignal />')

    const [cart, setCart] = useState([])

    return (
        <>
            <Main setCart={setCart} />
            <NavBar cart={cart} />
        </>
    )
}

export default AppState
