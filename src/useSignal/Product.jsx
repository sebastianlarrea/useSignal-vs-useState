function Product({ cart }) {
    console.log('<Product />')

    return (
        <button
            onClick={() => {
                console.log('------------ Signals -----------')
                cart.value = [...cart.value, 'product']
            }}
        >
            Click me!
        </button>
    )
}

export default Product

