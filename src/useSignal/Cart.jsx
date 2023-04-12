function Cart({ cart }) {
    console.log('<Cart />')

    return <div>{JSON.stringify(cart.value)}</div>
}

export default Cart
