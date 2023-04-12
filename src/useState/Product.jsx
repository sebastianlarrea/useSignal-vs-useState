function Product({ setCart }) {
    console.log('<Product />')

    return (
        <button
            onClick={() => {
                console.log('------------ State -----------')
                setCart(prevCart => [...prevCart, 'product'])
            }}
        >
            Click me!
        </button>
    )
}

export default Product
