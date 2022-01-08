import React from "react";

import myPhoto from "./images/myPhoto.jpeg"

function App() {
  return (
    <div className="App">
      <header>
        <p>Sobre mim</p>
        <p>Serviços</p>
        <p>Portifólio</p>
        <p>Contato</p>
      </header>

      <main>
        <section id="slogan">
          <div>
            <h1>Antônio Fernandes</h1>
            <div className="profissions">
              <h2>Desenvolvedor Web</h2>
              <h2>Desenvolvedor Full-Stack</h2>
              <h2>Programador React</h2>
            </div>
          </div>
        </section>

        <section id="aboutMe">
          <div className="imgAndText">
            <img src={myPhoto} className="img"></img>
            <text className="text">
              Antônio Fernandes
              Programador e desenvolvedor há mais de 3 anos.
              Teve início na carreira de desenvolvimento em 
              2018, quando foi chamado para fazer um curso
              na UFS (Universidade Federal de Sergipe), a 
              partir daí começou com projetos externos das
              mais diversas formas: Websites, Aplicativos
              e Sistemas, adquirindo um vasto conhecimento
              nas diversas linguagens de programação e
              tecnologias hoje utilizadas no mercado.
              <br/><br/>
              Fundador da ideia <a href="https://site2it.com">Site2it</a>,
              aplicativo queconecta desenvolvedores a clientes, usando 
              tecnologias do mercado para atender da melhor
              maneira seus clientes, buscando desenvolvedores
              específicos para clientes específicos, 
              agendando e combinando valores.
              <br/><br/>
              Participou de varios projetos propostos pela UFS
              (anteriormente citada), empresas de educação,
              COD3R, Fundação Bradesco, Curso em Video e 
              alguns cursos na Udemy.
              <br/><br/>
              Continua amando desafios e ideias inovadoras, 
              atualmente divide seu tempo entre projetos pessoais
              e desenvolvimento de novas features de seus projetos.
              Com muita motivação, estuda e põe em prática, dia
              após dia todo o conhecimento que adquire, 
              administrando, também, o trajeto que suas ideias 
              e projetos tomam.
            </text>
          </div>
        </section>

        <section id="services">

        </section>

        <section id="portfolio">

        </section>

        <section id="contact">

        </section>


      </main>

    </div>
  );
}

export default App;
