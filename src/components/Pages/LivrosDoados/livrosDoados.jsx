import React from "react";
import S from "../LivrosDoados/livrosDoados.module.scss";
import Book1 from "../../../assets/DonateBook1.png";

export default function LivrosDoados() {
  return (
    <div>
      <section className={S.sectionDonate}>
        <div className={S.card}>
          <img src={Book1} alt="" />
          <p> O Protagonista</p>
          <p>Sussane Andrade</p>
          <p>Ficção</p>
        </div>
      </section>
    </div>
  );
}
