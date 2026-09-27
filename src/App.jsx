import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedProfiles from './components/FeaturedProfiles.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';
import DemoDialog from './components/DemoDialog.jsx';

export default function App() {
  const [action, setAction] = useState(null);
  const showAction = type => setAction({ type });
  const close = useCallback(() => setAction(null), []);
  return <div id="inicio"><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header onAction={showAction}/><main id="conteudo"><Hero onAction={showAction}/><FeaturedProfiles onConnect={name => setAction({ type: 'connect', name })}/><HowItWorks/><Footer onAction={showAction}/></main>{action && <DemoDialog action={action} onClose={close}/>}</div>;
}
