const InfoTop = () => (
  <>
    <div className="left-text">
      <span>
        <span>Que bom ter você por aqui! </span>
        <span> | </span>
        <span> Já segue </span>
        <i class="fa-brands fa-instagram"></i>
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
  </>
)

const HeaderBottomContent = () => (
  <>
    <img src="img\LOGO-KL-JUST-FOR-YOU-WHITE.png" />
    <div className="search-container">
      <form>
        <div className="input-wrapper">
          <input placeholder="O que deseja procurar?" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="login-content">
          <div className="icon-login">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div>
            <div className="text-content-login">
              <div>
                <span>Olá, visitante!</span>
              </div>
            </div>
            <div className="text-login">
              <a href="#">Entre</a>
              <span>ou</span>
              <a href="#">Cadastre-se</a>
            </div>
          </div>
        </div>
        <div className="cart">
          <a className="cart-link">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="cart-quantity">0</span>
          </a>
        </div>
      </form>
    </div>
  </>
)

const HeaderBottom = ({ children }) => <div className="container-header-bottom">{children}</div>
const HeaderInfoTop = ({ children }) => <div className="container-info-top">{children}</div>

const App = () => (
  <>
    <header>
      <HeaderInfoTop>
        <InfoTop />
      </HeaderInfoTop>
      <HeaderBottom>
        <HeaderBottomContent />
      </HeaderBottom>
    </header>
  </>
)

export { App }
