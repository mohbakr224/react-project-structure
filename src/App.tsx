import { AppProvider } from './components/providers/AppProvider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import './App.css'

const folders = ['components/', 'hooks/', 'api/', 'types/', 'store/', 'pages/', 'constants/', 'i18n/', 'assets/', 'schemas/', 'utils/']
const componentGroups = ['ui/', 'layout/', 'providers/', 'skeleton/', 'common/']

function App() {
  return <AppProvider><Navbar /><Home /><section className="structure" id="folders"><div className="section-heading"><div><p className="eyebrow">THE PROJECT MAP</p><h2>Everything has<br /><span>a place.</span></h2></div><p>Organized by responsibility, so your team can find what it needs and keep moving.</p></div><div className="folder-grid" id="examples"><article className="folder-card folder-card--featured"><span className="folder-icon">⌘</span><h3>components/</h3><p>Reusable pieces that make up the interface.</p><div className="tags">{componentGroups.map((group) => <code key={group}>{group}</code>)}</div><small>Button · Navbar · EmptyState</small></article>{folders.filter((folder) => folder !== 'components/').map((folder, i) => <article className="folder-card" key={folder}><span className="folder-number">0{i + 2}</span><h3>{folder}</h3><p>{({ 'hooks/': 'Reusable stateful logic.', 'api/': 'Data requests and service clients.', 'types/': 'Shared TypeScript definitions.', 'store/': 'Application state management.', 'pages/': 'Route-level screens.', 'constants/': 'Values used throughout the app.', 'i18n/': 'Translations and locale setup.', 'assets/': 'Images, icons, and fonts.', 'schemas/': 'Data validation rules.', 'utils/': 'Small, reusable helper functions.' } as Record<string, string>)[folder]}</p></article>)}</div></section><Footer /></AppProvider>
}
export default App
