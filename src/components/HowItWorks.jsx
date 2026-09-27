const steps = [
  ['Mostre quem você é', 'Compartilhe seus interesses, o que você faz e o que gostaria de descobrir.'],
  ['Encontre afinidades', 'Conheça pessoas com ideias, experiências e objetivos que conversam com os seus.'],
  ['Comece uma conversa', 'Troque aprendizados, explore uma parceria ou dê o primeiro passo em um projeto.'],
];
export default function HowItWorks() {
  return <section className="how container" id="como-funciona" aria-labelledby="how-title"><div className="section-heading"><div><p className="eyebrow">SIMPLES COMO DAR UM OI</p><h2 id="how-title">Conectar é só o começo.</h2></div><p>A experiência que estamos construindo, em três passos.</p></div><ol className="steps">{steps.map(([title, description], index) => <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></section>;
}
