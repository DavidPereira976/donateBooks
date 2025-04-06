import React from "react";
import S from "../LivrosDoados/livrosDoados.module.scss";
import Book1 from "../../../assets/DonateBook1.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function LivrosDoados() {

 const[livros, setLivros] = useState([]);

 const getLivros = async () => {
    const response = await axios.get("https://livros-api-python-flask-1.onrender.com/livros");
    setLivros(response.data);
 }

 useEffect(()=>{
  getLivros();
 },[]);


  return (
    <div>
      <section className={S.sectionDonate}>
        <div className={S.card}>
          <img src={Book1} alt="" />
          <p> O Protagonista</p>
          <p>Sussane Andrade</p>
          <p>Ficção</p>
        </div>
        {livros.map((item)=>(
          <article>
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
