import S from "../Inicio/inicio.module.scss";
import React from "react";
import imgcard1 from "../../../assets/imgcard1.png";
import imgcard2 from "../../../assets/imgcard2.png";
import imgcard3 from "../../../assets/imgcard3.png";
import imgcard4 from "../../../assets/imgcard4.png";

export default function inicio() {
  return (
    <div>
      <section className={S.firstSectionMain}>
        <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
      </section>
      <section className={S.secondSectionMain}>
        <h2>Por que devo doar?</h2>
        <div className={S.boxCard}>
          <div className={S.card}>
            <img src={imgcard1} alt="" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </div>
          <div className={S.card}>
            <img src={imgcard2} alt="" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo</p>
          </div>
          <div className={S.card}>
            <img src={imgcard3} alt="" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </div>
          <div className={S.card}>
            <img src={imgcard4} alt="" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
