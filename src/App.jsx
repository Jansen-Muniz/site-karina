const InfoTop = () => (
  <div className="container-info-top">
    <div className="left-text">
      <span>
        <span>Que bom ter você por aqui! </span>
        <span>| </span>
        <span>Já segue </span>
        <svg id="topo-instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.561 13.564">
          <path id="Caminho_171" data-name="Caminho 171" d="M13.975,3.988a4.956,4.956,0,0,0-.315-1.646A3.475,3.475,0,0,0,11.675.358,4.969,4.969,0,0,0,10.03.042C9.3.008,9.073,0,7.232,0S5.16.008,4.436.04A4.958,4.958,0,0,0,2.791.355a3.309,3.309,0,0,0-1.2.784,3.339,3.339,0,0,0-.782,1.2A4.97,4.97,0,0,0,.491,3.985c-.034.726-.042.957-.042,2.8s.008,2.072.04,2.8A4.956,4.956,0,0,0,.8,11.224a3.474,3.474,0,0,0,1.985,1.985,4.97,4.97,0,0,0,1.646.315c.723.032.954.04,2.8.04s2.072-.008,2.8-.04a4.955,4.955,0,0,0,1.645-.315,3.469,3.469,0,0,0,1.985-1.985,4.973,4.973,0,0,0,.315-1.646c.032-.723.04-.954.04-2.8s0-2.072-.034-2.8ZM12.754,9.526a3.718,3.718,0,0,1-.233,1.259,2.25,2.25,0,0,1-1.288,1.288,3.731,3.731,0,0,1-1.259.233c-.715.032-.93.04-2.74.04s-2.027-.008-2.74-.04a3.716,3.716,0,0,1-1.259-.233,2.087,2.087,0,0,1-.779-.506,2.109,2.109,0,0,1-.506-.779,3.732,3.732,0,0,1-.233-1.259c-.032-.715-.04-.93-.04-2.74s.008-2.027.04-2.74A3.716,3.716,0,0,1,1.951,2.79a2.062,2.062,0,0,1,.509-.779,2.106,2.106,0,0,1,.779-.506A3.734,3.734,0,0,1,4.5,1.272c.715-.032.93-.04,2.74-.04s2.027.008,2.74.04a3.718,3.718,0,0,1,1.259.233,2.086,2.086,0,0,1,.779.506,2.108,2.108,0,0,1,.506.779,3.733,3.733,0,0,1,.233,1.259c.032.715.04.93.04,2.74s-.008,2.022-.04,2.737Zm0,0" transform="translate(-0.449 0)" fill="#fff"></path>
          <path id="Caminho_172" data-name="Caminho 172" d="M128.433,124.5a3.484,3.484,0,1,0,3.484,3.484A3.485,3.485,0,0,0,128.433,124.5Zm0,5.745a2.26,2.26,0,1,1,2.26-2.26A2.261,2.261,0,0,1,128.433,130.245Zm0,0" transform="translate(-121.65 -121.201)" fill="#fff"></path>
          <path id="Caminho_173" data-name="Caminho 173" d="M364.077,89.415a.813.813,0,1,1-.814-.813A.813.813,0,0,1,364.077,89.415Zm0,0" transform="translate(-352.858 -86.254)" fill="#fff"></path>
          <span>Já segue </span></svg>
      </span>
      <span>
        <a href="https://instagram.com/kljustforyou_?igshid=NzZlODBkYWE4Ng=="> @kljustforyou_</a>
      </span>
    </div>
    <div className="right-text">
      <a href="#">Quem somos</a>
      <a href="#">Contato</a>
      <a href="#">Meus pedidos</a>
    </div>
  </div>
)

const HeaderBottom = () => (
  <div className="container-header-bottom">
    <img src="img\LOGO-KL-JUST-FOR-YOU-WHITE.png" />
    <div className="search-container">
      <form>
        <input placeholder="O que deseja procurar?" />
      </form>
    </div>
  </div>
)

const HeaderInfoTop = () => (
  <div className="info-top">
    <InfoTop />
  </div>
)

const App = () => (
  <>
    <header>
      <HeaderInfoTop />
      <HeaderBottom />
    </header>
  </>
)

export { App }
