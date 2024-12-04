import Inicio from "../../components/Pages/Inicio/inicio";
import QueroDoar from "../../components/Pages/QueroDoar/queroDoar";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import S from "../Header/header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.firstSectionheader}>
          <img src={logo} alt="image-of-a-opened-book" />
          <h1>Livros vai na web</h1>
        </section>
        <nav>
          <ul className={S.secondSectionheader}>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/queroDoar">Quero Doar</Link>
            </li>

            <li>Quero Doar</li>
          </ul>
        </nav>
        <section className={S.boxInput}>
          <input type="text" placeholder="O que você procura?" />
          <button><img src={search} alt="search-icon" /></button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
