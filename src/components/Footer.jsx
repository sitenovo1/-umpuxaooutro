import Brand from './Brand.jsx';
export default function Footer({ onAction }) {
  return <><section className="final-cta container"><div><p className="eyebrow">O PRÓXIMO ELO PODE SURPREENDER</p><h2>Boas conexões.<br/>Novos começos.</h2><p>Encontre quem tem algo a trocar com você.</p></div><button className="button button-lime" onClick={() => onAction('signup')}>Vamos nos conectar <span aria-hidden="true">↗</span></button></section><footer className="container footer"><div><Brand/><p>Gente conecta gente.</p></div><nav aria-label="Navegação do rodapé"><a href="#conexoes">Conexões</a><a href="#como-funciona">Como funciona</a></nav><p className="copyright">© {new Date().getFullYear()} elo<br/>Um projeto em construção.</p></footer></>;
}
