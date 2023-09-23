import React, { useContext, useState } from "react"

import "./Pago.css"
import MessageSuccess from '../../components/MessageSucces/MessageSucces'

import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

import { TextField, Button } from "@mui/material"

const styles = {
  containerShop: {
    textAlign: "center",
    padding: 20,
  },
}

const initialState = {
  Ciudad: "",
  Direccion: "",
  CodigoPostal: "",
}

const Pago = () => {
  const [values, setValues] = useState(initialState)
  const [purchaseID, setPurchaseID] = useState("")

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const docRef = await addDoc(collection(db, "Clientes"), {
      values,
    });
    setPurchaseID(docRef.id)
    setValues(initialState)
  };

  return (
    <div className="pageContainer" style={{ marginTop: "40px" }}>
      <form
        className="formContainer"
        style={styles.containerShop}
        onSubmit={onSubmit}
      >
        <TextField
          placeholder="Ciudad"
          style={{ margin: 10, width: 400 }}
          name="Ciudad"
          value={values.Ciudad}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Dirección"
          style={{ margin: 10, width: 400 }}
          name="Direccion"
          value={values.Direccion}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Codigo Postal"
          style={{ margin: 10, width: 400 }}
          name="CodigoPostal"
          value={values.CodigoPostal}
          onChange={handleOnChange}
        />
        <Button variant="contained" className="encargar" type="submit">
          Encargar
        </Button>
      </form>

      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default Pago
