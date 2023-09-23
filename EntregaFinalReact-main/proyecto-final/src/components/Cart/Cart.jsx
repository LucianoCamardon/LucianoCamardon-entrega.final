import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart ({showModal, toggle}) {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
        <h1 className="text-2xl font-bold">Carro</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-pink-600 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-pink-600"
            onClick={toggle}
          >
            Cerrar
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <p className="text-gray-600">{item.valor}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="mx-4 px-4 py-2 bg-pink-600 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-pink-600"
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="mx-4 px-4 py-2 bg-pink-600 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-pink-600"
                  onClick={() => {
                    removeFromCart(item)
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <button
            className="px-4 py-2 bg-pink-600 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-pink-600"
            onClick={() => {
              clearCart()
            }}
          >
            Limpiar Carro
          </button>
          <Link to={`/Pago`} className="my-4 px-4 py-2 bg-pink-600 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-pink-600">Ir a pagar</Link>
        </div>
          ) : (
            <h1 className="text-lg font-bold">El carro esta vacío</h1>
          )
        }
      </div>
    )
  )
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}