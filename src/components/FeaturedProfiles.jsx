import Avatar from './Avatar.jsx';
import { profiles } from '../data/profiles.js';

function ProfileCard({ profile, onConnect }) {
  return <article className="profile-card"><div className="profile-top"><Avatar profile={profile} lazy /><span className="profile-arrow" aria-hidden="true">↗</span></div><h3>{profile.name}</h3><p className="profile-role">{profile.role}</p><p className="location">{profile.city}</p><p className="profile-bio">{profile.bio}</p><ul className="tags" aria-label="Interesses">{profile.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><div className="profile-bottom"><p>{profile.goal}</p><button className="connect-button" onClick={() => onConnect(profile.name)} aria-label={`Conectar com ${profile.name}`}>Conectar <span aria-hidden="true">+</span></button></div></article>;
}

export default function FeaturedProfiles({ onConnect }) {
  return <section className="featured" id="conexoes" aria-labelledby="profiles-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">ENCONTROS QUE ABREM CAMINHOS</p><h2 id="profiles-title">Pessoas para conhecer.<br/>Ideias para compartilhar.</h2></div><p>Um novo olhar pode estar a uma conversa de distância. Explore o tipo de conexão que queremos criar.</p></div><div className="profile-grid">{profiles.map(profile => <ProfileCard key={profile.id} profile={profile} onConnect={onConnect}/>)}</div><p className="demo-note">Perfis fictícios para demonstrar a experiência do elo.</p></div></section>;
}

