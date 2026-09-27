import Brand from './Brand.jsx';

export default function Header({ onAction }) {
  return <header className="header"><div className="container header-inner">
    <Brand />
    <nav aria-label="Navegação principal"><a href="#conexoes">Explore conexões</a><a href="#como-funciona">Como funciona</a></nav>
    <div className="header-actions"><button className="button text-button" onClick={() => onAction('login')}>Entrar</button><button className="button button-dark" onClick={() => onAction('signup')}>Criar conta <span aria-hidden="true">↗</span></button></div>
  </div></header>;
}
