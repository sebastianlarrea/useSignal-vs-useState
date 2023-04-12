import Cart from './Cart'

function NavBar({ cart }) {
    console.log('<NavBar />')

    return <Cart cart={cart} />
}

export default NavBar
