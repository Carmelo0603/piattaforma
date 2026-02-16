import React from "react";
import { Box, Globe, Layers, Layout, Zap, ShieldAlert, Cpu, Anchor, Share2, Beaker, Code, Terminal } from "lucide-react";

export const topics = [
  {
    id: "b1",
    category: "basics",
    title: "1. Fondamenti e Architettura",
    icon: <Box size={24} />,
    summary:
      "React utilizza un approccio dichiarativo e basato sui componenti. Invece di manipolare il DOM direttamente, descrivi lo stato che l'interfaccia deve avere.",
    points: [
      "Dichiarativo vs Imperativo: Descrivi il 'cosa', non il 'come'.",
      "JSX: Sintassi simile all'HTML ma con la potenza di JavaScript.",
      "Componenti: Blocchi costruttivi isolati e riutilizzabili (Funzionali vs Classi).",
    ],
    codeExample: `// Componente Funzionale Moderno
const Welcome = ({ name }) => {
  return (
    <div className="card">
      <h1>Ciao, {name}!</h1>
      <p>Benvenuto in React.</p>
    </div>
  );
};`,
    quiz: {
      question: "Quale delle seguenti affermazioni su JSX è vera?",
      options: [
        "È una stringa HTML pura.",
        "È zucchero sintattico per React.createElement.",
        "Deve essere compilato in CSS.",
        "Non supporta variabili JavaScript.",
      ],
      correct: 1,
    },
    exercise: "Crea un componente 'ProfileCard' che accetta props per nome, ruolo e immagine, e le visualizza in una card stilizzata.",
  },
  {
    id: "b2",
    category: "basics",
    title: "2. React & SPAs",
    icon: <Globe size={24} />,
    summary: "React abilita le Single Page Applications (SPA), dove il contenuto cambia dinamicamente senza ricaricare la pagina, grazie al Virtual DOM.",
    points: [
      "SPA vs MPA: Navigazione fluida vs Ricaricamento pagina.",
      "Virtual DOM: Una copia leggera del DOM per calcolare i cambiamenti efficientemente.",
      "Reconciliation: L'algoritmo che aggiorna solo ciò che è cambiato.",
    ],
    codeExample: `// Il Virtual DOM gestisce questo efficientemente
// Aggiorna solo il nodo del tempo, non l'intera pagina
function Clock() {
  const [time, setTime] = useState(new Date());
  
  // useEffect aggiorna lo stato ogni secondo
  // React riconcilia le differenze
  return <h2>Sono le: {time.toLocaleTimeString()}</h2>;
}`,
    quiz: {
      question: "A cosa serve la prop 'key' nelle liste in React?",
      options: [
        "A stilizzare l'elemento.",
        "A rendere l'elemento cliccabile.",
        "Ad aiutare React a identificare quali item sono cambiati.",
        "A passare dati al database.",
      ],
      correct: 2,
    },
    exercise:
      "Crea una lista di oggetti (es. To-Do list). Aggiungi un pulsante per rimuovere un elemento e osserva come React aggiorna la lista senza ricaricare la pagina.",
  },
  {
    id: "b3",
    category: "basics",
    title: "3. State & Props Management",
    icon: <Layers size={24} />,
    summary: "I dati fluiscono in modo unidirezionale (dall'alto in basso). Le Props sono immutabili, lo State è la memoria locale mutabile del componente.",
    points: [
      "Props: Dati passati dal genitore (Read-only).",
      "State: Dati gestiti internamente (useState).",
      "Unidirezionalità: I dati scendono, gli eventi salgono.",
    ],
    codeExample: `const Counter = () => {
  const [count, setCount] = useState(0); // Stato

  return (
    <div>
      <p>Conteggio: {count}</p>
      {/* L'evento scatena l'aggiornamento dello stato */}
      <button onClick={() => setCount(count + 1)}>
        Incrementa
      </button>
    </div>
  );
};`,
    quiz: {
      question: "Cosa succede quando chiami la funzione 'set' di uno useState?",
      options: [
        "La variabile cambia immediatamente.",
        "Il componente viene smontato.",
        "React pianifica un re-render del componente.",
        "Il DOM viene cancellato.",
      ],
      correct: 2,
    },
    exercise: "Crea un contatore che non può andare sotto lo zero. Se arriva a 10, mostra un messaggio speciale 'Hai vinto!'.",
  },
  {
    id: "b4",
    category: "basics",
    title: "4. Controlled Inputs & Forms",
    icon: <Layout size={24} />,
    summary: "In React, lo stato del componente deve essere l'unica fonte di verità. I form HTML vengono 'controllati' legando il loro value allo stato React.",
    points: [
      "Controlled Component: value={state} + onChange={setState}.",
      "Form Complessi: Uso di oggetti di stato unici o librerie come React Hook Form.",
      "Validazione: Possibile in tempo reale ad ogni keystroke.",
    ],
    codeExample: `const SimpleForm = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase()); // Trasforma mentre digiti
  };

  return <input value={text} onChange={handleChange} />;
};`,
    quiz: {
      question: "In un componente controllato, chi detiene la verità sul valore dell'input?",
      options: ["Il DOM del browser.", "Lo stato del componente React.", "Il database.", "Il file CSS."],
      correct: 1,
    },
    exercise: "Crea un form di login (email/password). Il bottone 'Login' deve essere disabilitato se la password è più corta di 6 caratteri.",
  },
  {
    id: "b5",
    category: "basics",
    title: "5. Data Fetching",
    icon: <Zap size={24} />,
    summary: "Il recupero dati avviene tipicamente dopo il primo render (useEffect) o tramite librerie moderne che gestiscono cache e stati di caricamento.",
    points: [
      "useEffect: Gestione classica (Fetch-on-render).",
      "Stati: Gestire sempre Loading, Success, Error.",
      "Moderno: SWR o TanStack Query per caching automatico.",
    ],
    codeExample: `const UserLoader = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('[https://api.example.com/user/1](https://api.example.com/user/1)')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []); // [] assicura che corra solo al mount

  if (loading) return <p>Caricamento...</p>;
  return <div>{user.name}</div>;
};`,
    quiz: {
      question: "Perché l'array delle dipendenze di useEffect è vuoto [] nell'esempio?",
      options: [
        "Perché non ci sono errori.",
        "Per far eseguire l'effetto ad ogni render.",
        "Per far eseguire l'effetto solo una volta al montaggio.",
        "Per disabilitare l'effetto.",
      ],
      correct: 2,
    },
    exercise: "Simula una chiamata API usando setTimeout. Mostra uno spinner di caricamento per 2 secondi, poi mostra una lista di nomi.",
  },
  {
    id: "b6",
    category: "basics",
    title: "6. Loaders & Error Handling",
    icon: <ShieldAlert size={24} />,
    summary: "Gestire gli errori previene il crash dell'intera app. I Loaders (React Router) migliorano la UX caricando i dati prima del rendering.",
    points: ["Error Boundaries: Componenti 'catch' per errori UI.", "Loaders: Pattern Fetch-then-Render.", "Suspense: Gestione dichiarativa dell'asincronia."],
    codeExample: `// Esempio concettuale di Error Boundary
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <h1>Ops, qualcosa si è rotto.</h1>;
    return this.props.children;
  }
}`,
    quiz: {
      question: "Cosa previene il 'White Screen of Death' in React?",
      options: ["useEffect", "Error Boundaries", "useState", "CSS Grid"],
      correct: 1,
    },
    exercise:
      "Crea un componente che lancia intenzionalmente un errore se cliccato, e avvolgilo in un Error Boundary per mostrare un messaggio gentile invece di crashare.",
  },
  {
    id: "a1",
    category: "advanced",
    title: "7. Advanced Concepts",
    icon: <Cpu size={24} />,
    summary: "Strumenti per superare i limiti del flusso dati standard: Context per dati globali, Portals per uscire dal DOM, Refs per accesso imperativo.",
    points: [
      "Context API: Evita il prop-drilling per temi/auth.",
      "Portals: Renderizzare modali fuori dalla gerarchia padre.",
      "Refs: Accedere al DOM reale o persistere valori senza re-render.",
    ],
    codeExample: `// Context Esempio
const ThemeContext = React.createContext('light');

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar /> 
  </ThemeContext.Provider>
);

const Toolbar = () => {
  const theme = useContext(ThemeContext);
  return <div>Tema attuale: {theme}</div>; // Legge "dark" senza props
};`,
    quiz: {
      question: "Quale hook useresti per mantenere un valore tra i render senza scatenare un aggiornamento visivo?",
      options: ["useState", "useEffect", "useRef", "useContext"],
      correct: 2,
    },
    exercise: "Crea un sistema di tema Dark/Light usando Context. Un bottone nella navbar deve cambiare il colore di sfondo di tutta l'app.",
  },
  {
    id: "a2",
    category: "advanced",
    title: "8. React Router",
    icon: <Anchor size={24} />,
    summary: "Gestione avanzata della navigazione nelle SPA: rotte annidate, parametri dinamici e protezione delle rotte.",
    points: [
      "Nested Routes: UI annidata basata sull'URL (Outlet).",
      "Dynamic Segments: /users/:id per catturare parametri.",
      "useNavigate: Navigazione programmatica (es. dopo login).",
    ],
    codeExample: `// Configurazione Router (Concettuale)
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="users/:userId" element={<UserProfile />} />
  </Route>
</Routes>

// Nel componente UserProfile
const { userId } = useParams();`,
    quiz: {
      question: "Quale componente di React Router renderizza il contenuto della rotta figlia?",
      options: ["<Link />", "<Outlet />", "<Navigate />", "<Route />"],
      correct: 1,
    },
    exercise: "Crea una mini-app con 2 pagine: 'Home' e 'Dettaglio'. Passa un ID nell'URL alla pagina dettaglio e visualizzalo a schermo.",
  },
  {
    id: "a3",
    category: "advanced",
    title: "9. State Lifting & Lifecycle",
    icon: <Share2 size={24} />,
    summary: "Gestire la condivisione di stato tra fratelli e comprendere il ciclo di sincronizzazione degli effetti.",
    points: [
      "Lifting State Up: Spostare lo stato al genitore comune.",
      "Sincronizzazione: useEffect come strumento di sync, non solo ciclo di vita.",
      "Cleanup: Importante per evitare memory leaks (clearInterval, unsubscribe).",
    ],
    codeExample: `// Genitore gestisce lo stato per i figli
const Parent = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <ToggleSwitch isActive={active} onToggle={setActive} />
      <StatusDisplay isActive={active} />
    </>
  );
};`,
    quiz: {
      question: "Se due componenti fratelli devono condividere lo stesso dato, cosa devi fare?",
      options: ["Duplicare lo stato in entrambi.", "Usare localStorage.", "Elevare lo stato (Lift State Up) al genitore.", "Non è possibile in React."],
      correct: 2,
    },
    exercise:
      "Crea due input numerici (Input A e Input B). Quando scrivi in uno, l'altro deve aggiornarsi automaticamente con il valore doppio (es. A=2 -> B=4).",
  },
  {
    id: "a4",
    category: "advanced",
    title: "10. React Testing",
    icon: <Beaker size={24} />,
    summary: "Testare il comportamento, non l'implementazione. React Testing Library (RTL) è lo standard.",
    points: [
      "Filosofia RTL: Testa come l'utente usa l'app.",
      "Queries: getByRole, getByText (accessibilità first).",
      "Mocking: Simulare chiamate API con MSW.",
    ],
    codeExample: `// Esempio di Test RTL
test('renderizza il messaggio di benvenuto', () => {
  render(<Welcome name="Mario" />);
  
  // Cerca il testo come farebbe un utente
  const message = screen.getByText(/ciao, mario/i);
  
  expect(message).toBeInTheDocument();
});`,
    quiz: {
      question: "Qual è la pratica consigliata da React Testing Library?",
      options: [
        "Testare i nomi delle classi CSS.",
        "Testare lo stato interno del componente.",
        "Testare interagendo con il DOM come farebbe un utente.",
        "Non scrivere test.",
      ],
      correct: 2,
    },
    exercise: "Scrivi (su carta o IDE) un test case per un bottone che, quando cliccato, cambia il testo da 'Off' a 'On'.",
  },
  {
    id: "a5",
    category: "advanced",
    title: "11. React Hooks",
    icon: <Code size={24} />,
    summary: "Potenti funzioni per riutilizzare la logica di stato. Custom Hooks e ottimizzazione.",
    points: [
      "Regole: Solo al top level, solo in funzioni React.",
      "useReducer: Per logica di stato complessa.",
      "Custom Hooks: Estrarre logica riutilizzabile (es. useFetch).",
    ],
    codeExample: `// Custom Hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}`,
    quiz: {
      question: "Quale hook serve per ottimizzare performance memorizzando il risultato di un calcolo?",
      options: ["useCallback", "useMemo", "useRef", "useState"],
      correct: 1,
    },
    exercise:
      "Crea un Custom Hook 'useToggle' che restituisce un valore booleano e una funzione per invertirlo, per semplificare la gestione di modali e menu.",
  },
  {
    id: "a6",
    category: "advanced",
    title: "12. React 19 & Futuro",
    icon: <Terminal size={24} />,
    summary: "Le nuove frontiere: compilazione automatica e componenti lato server.",
    points: [
      "React Compiler: Memoizzazione automatica (addio useMemo manuale).",
      "Server Components: Eseguire logica pesante sul server.",
      "Actions: Gestione form e mutazioni semplificata.",
    ],
    codeExample: `// React Server Component (Pseudo-codice)
async function ProductPage({ id }) {
  // Accesso diretto al DB sul server!
  const product = await db.products.findById(id);
  
  return <div>{product.title}</div>;
}`,
    quiz: {
      question: "Qual è il vantaggio principale dei React Server Components?",
      options: [
        "Aggiungono più JavaScript al bundle.",
        "Permettono accesso diretto al backend e riducono il JS client.",
        "Sostituiscono completamente i componenti client.",
        "Funzionano solo offline.",
      ],
      correct: 1,
    },
    exercise: "Leggi la documentazione ufficiale sulle 'Server Actions' e immagina come cambierebbe la gestione di un form di invio dati.",
  },
];
