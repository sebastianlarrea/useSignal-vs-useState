import Product from './Product'

function Main({ cart }) {
    console.log('<Main />')

    return <Product cart={cart} />
}

export default Main
