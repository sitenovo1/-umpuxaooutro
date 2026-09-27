import { useEffect, useRef } from 'react';

export default function DemoDialog({ action, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    if (action && !dialog.open) dialog.showModal();
    return () => { if (dialog.open) dialog.close(); previous?.focus(); };
  }, [action]);
  const title = action?.type === 'login' ? 'Seu espaço vem aí.' : action?.type === 'connect' ? `Uma conversa com ${action.name}?` : 'Seu próximo elo está chegando.';
  return <dialog ref={ref} className="demo-dialog" aria-labelledby="dialog-title" aria-describedby="dialog-description" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}><div className="dialog-body"><span className="eyebrow">ESTAMOS NO PRIMEIRO PASSO</span><h2 id="dialog-title">{title}</h2><p id="dialog-description">{action?.type === 'connect' ? 'Este perfil é fictício e nenhuma solicitação foi enviada. As conexões estarão disponíveis em uma próxima etapa.' : 'Esta é uma demonstração do elo. O cadastro e o acesso à conta ainda não estão disponíveis. Por enquanto, você pode explorar a proposta e os perfis de exemplo.'}</p><button autoFocus className="button button-dark" onClick={onClose}>Continuar explorando <span aria-hidden="true">↗</span></button></div></dialog>;
}
