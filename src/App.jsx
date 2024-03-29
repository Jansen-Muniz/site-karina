const InfoTop = () => (
  <>
    <div className="left-text">
      <span>
        <span>Que bom ter você por aqui!&nbsp;</span>
        <span>&nbsp;|&nbsp;</span>
        <span>&nbsp;Já segue&nbsp;</span>
        <i className="fa-brands fa-instagram"></i>
      </span>
      <span>
        <a href="https://instagram.com/kljustforyou_?igshid=NzZlODBkYWE4Ng==">&nbsp;@kljustforyou_</a>
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
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-quantity">0</span>
          </a>
        </div>
      </form>
    </div>
  </>
)

const HeaderBottom = ({ children }) => <div className="container-header-bottom">{children}</div>
const HeaderInfoTop = ({ children }) => <div className="container-info-top">{children}</div>
const NavBar = () => {
  return (
    <ul>
      <li><a href="#">categorias</a></li>
      <li><a href="#">lançamento</a></li>
      <li><a href="#">presentes</a></li>
    </ul>
  )
}

const bannerItems = [
  {
    id: crypto.randomUUID(),
    imgUrl: 'img/entrega.webp',
    alt: 'ícone entrega',
    titleBanner: 'Entrega em todo Brasil',
    textBanner: 'Garanta agora o seu pedido'
  },
  {
    id: crypto.randomUUID(),
    imgUrl: 'img/parcelamento.webp',
    alt: 'ícone parcelamento',
    titleBanner: 'Parcele em até 10x',
    textBanner: 'Nos cartões de crédito'
  },
  {
    id: crypto.randomUUID(),
    imgUrl: 'img/site-seguro.webp',
    alt: 'ícone site seguro',
    titleBanner: 'Site 100% Seguro',
    textBanner: 'Seus dados protegidos!'
  },
  {
    id: crypto.randomUUID(),
    imgUrl: 'img/desconto.webp',
    alt: 'ícone desconto',
    titleBanner: 'Desconto na 1ª Compra',
    textBanner: 'Use o cupom X'
  }
]

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
    <nav>
      <NavBar />
    </nav>
    <main>
      <div className="banner-container">
        <ul>
          {bannerItems.map((item) => (
            <li key={item.id} className="banner-item">
              <div>
                <img src={item.imgUrl} alt={item.alt} />
              </div>
              <div className="text-container">
                <span className="tittle-banner">{item.titleBanner}</span>
                <span className="text-banner">{item.textBanner}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>

    <div className="whatsapp-container">
      <a href="https://api.whatsapp.com/send?phone=5511979814476" target="blank">
        <svg className="whatsapp" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 39 39">
          <path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path>
          <path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path>
        </svg>
      </a>
    </div>
  </>
)

export { App }
