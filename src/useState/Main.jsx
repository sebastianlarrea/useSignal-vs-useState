import Product from './Product'

function Main({ setCart }) {
    console.log('<Main />')

    return <Product setCart={setCart} />
}

export default Main
