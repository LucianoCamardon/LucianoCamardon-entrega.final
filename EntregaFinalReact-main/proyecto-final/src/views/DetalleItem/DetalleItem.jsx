import React, { useState, useEffect } from "react"
import "./DetalleItem.css"
import CardItemDetailed from "../../components/cardItemDetailed/CardItemDetailed/"

import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Cart from "../../components/Cart/Cart"

import { collection, query, getDocs, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

import { useParams } from "react-router-dom"

const DetalleItem = () => {
    const [itemData, setItemData] = useState([])

    const [showModal, setshowModal] = useState(false)
    const toggle = () => {
      setshowModal(!showModal);
    }
    const {CartItems} = useContext(CartContext)


    const { id } = useParams()

    useEffect(() => {
        const getItems = async () => {
            const q = query ( collection(db, "Productos"), where(documentId(), "==", id))
            const docs = []
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setItemData(docs)
        }
        getItems()
    }, [id])

    return (
        <div className="PositionContainer">
          <div>
            <button onClick={toggle} className='px-4 py-2 bg-gray-400 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Carro</button>
          </div>
          {itemData.map((data) => {
            return (
              <div  key={data.id}>
                <CardItemDetailed item={data} key={data.id} />
              </div>
            )
          })}
          <Cart showModal={showModal} toggle={toggle} />
        </div>
      );
}

export default DetalleItem