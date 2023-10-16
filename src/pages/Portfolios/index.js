import React from 'react';
import Style from './Portfolio.module.css'
import FotoPerfil from '../../components/FotoPerfil/perfil.png'
function Portfolio() {
  return (
    <div>
      <nav class={`${Style.fundo} navbar navbar-expand-lg`}>
        <ul class="navbar-nav m-auto ">
        <li class={Style.li_topico}>
            <a class={`${Style.topico}`} href="#wihord">Hi Word!</a>
          </li>
          <li class={Style.li_topico}>
            <a class={`${Style.topico}`} href="#">Sobre mim</a>
          </li>
          <li class={Style.li_topico}>
            <a class={`${Style.topico}`} href="#">Conhecimentos</a>
          </li>
          <li class={Style.li_topico}>
            <a class={`${Style.topico}`} href="#">Projetos</a>
          </li>
          <li class={Style.li_topico}>
            <a class={`${Style.topico}`} href="#">Redes Sociais</a>
          </li>
        </ul>
      </nav>

      <header className={Style.fundo_hiword}>
        <div>
          <img src={FotoPerfil} className={Style.imagem}/>
        </div>
        <div className='mt-5'>
          <h3>Hi Word, im Julialwett ;)</h3>
          <p>Site em construção...</p>
        </div>
      </header>
    </div>
  );
}

export default Portfolio;
