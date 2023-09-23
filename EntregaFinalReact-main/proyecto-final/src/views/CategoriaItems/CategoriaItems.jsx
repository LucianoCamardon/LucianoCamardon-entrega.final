import React, { useState, useEffect } from "react"
import "./CategoriaItems.css"
import CardItem from "../../components/cardItem/CardItem"

import { collection, query, getDocs, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CategoriaItems = () => {
    const [itemsData, setItemsData] = useState([])

    const { categoria } = useParams()

    useEffect(() => {
        const getItems = async () => {
            const q = query ( collection(db, "Productos"), where("category", "==", categoria))
            const docs = []
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setItemsData(docs)
        }
        getItems()
    }, [categoria])

    return (
        <div className="PositionContainer">
          {itemsData.map((data) => {
            return (
              <Link to={`/Detalle/${data.id}`} key={data.id} style={{textDecoration: "none"}}>
                <CardItem item={data} />
              </Link>
            )
          })}
        </div>
      );
}

export default CategoriaItems

