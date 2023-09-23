import React, { useState, useEffect } from "react"

import CardItem from "../CardItem/CardItem/"
import "./ListItems.css"

import { collection, query, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

import { Link } from "react-router-dom"

const CardList = () => {
    const [itemsData, setItemsData] = useState([]);
  
    useEffect(() => {
      const getItems = async () => {
        const q = query(collection(db, "Productos"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItemsData(docs);
      };
      getItems();
    }, []);
  
    return (
      <>
          <div className="ItemsListContainer">
            {itemsData.map((data) => {
              return (
                <Link to={`/Detalle/${data.id}`} key={data.id} style={{textDecoration: "none"}}>
                <CardItem item={data} />
                </Link>
              );
            })}
          </div>
      </>
    );
  };
  
  export default CardList;