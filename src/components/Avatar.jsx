import { useState } from 'react';

// Fotos ilustrativas fornecidas por https://randomuser.me/.
// As iniciais continuam disponíveis caso o serviço de imagens fique indisponível.
export default function Avatar({ profile, lazy = false }) {
  const [failed, setFailed] = useState(false);
  return <span className={`avatar ${profile.color}`} aria-hidden="true">
    {failed ? profile.initials : <img src={profile.photo} alt="" width="64" height="64" loading={lazy ? 'lazy' : 'eager'} decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} />}
  </span>;
}
