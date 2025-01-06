# 🚀 Bibliothèque React Hooks

Une collection de hooks React personnalisés conçus pour simplifier et améliorer vos applications React. Chaque hook est documenté avec son objectif et des exemples d'utilisation.

## 🔧 Installation

```bash
npm install @reactory/hooks
```

ou

```bash
yarn add @reactory/hooks
```

## 📖 Hooks Disponibles

### 1. `useControlledInput`
Gère les champs de saisie contrôlés avec une API pratique.

#### Exemple:
```tsx
import { useControlledInput } from '@reactory/hooks';

function ControlledInputComponent() {
  const [value, setValue, inputProps] = useControlledInput('');

  return (
    <input {...inputProps} />
  );
}
```

---

### 2. `useCounter`
Fournit une logique de compteur avec des contraintes min et max optionnelles.

#### Exemple:
```tsx
import { useCounter } from '@reactory/hooks';

function CounterComponent() {
  const { value, increment, decrement, add, remove } = useCounter(0, { min: 0, max: 10 });

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

---

### 3. `useDebounce`
Effectue un debounce sur une valeur pendant un délai spécifié.

#### Exemple:
```tsx
import { useDebounce } from '@reactory/hooks';

function DebouncedSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

---

### 4. `useEventListener`
Attache un écouteur d'événements à un élément.

#### Exemple:
```tsx
import { useEventListener } from '@reactory/hooks';

function KeyPressListener() {
  useEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
  });

  return <div>Press any key and check the console.</div>;
}
```

---

### 5. `useFetch`
Récupère des données depuis une URL donnée.

#### Exemple:
```tsx
import { useFetch } from '@reactory/hooks';

function FetchDataComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{JSON.stringify(data)}</div>;
}
```

---

### 6. `useFileDrop`
Gère les événements de glisser-déposer de fichiers.

#### Exemple:
```tsx
import { useFileDrop } from '@reactory/hooks';

function FileDropComponent() {
  const { dragging, eventHandlers } = useFileDrop((files) => {
    console.log('Dropped files:', files);
  });

  return (
    <div {...eventHandlers} style={{ border: dragging ? '2px dashed blue' : '2px dashed gray' }}>
      Drag and drop files here.
    </div>
  );
}
```

---

### 7. `useIntersectionObserver`
Observe l'intersection d'un élément avec la vue.

#### Exemple:
```tsx
import { useIntersectionObserver } from '@reactory/hooks';

function IntersectionComponent() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div ref={ref}>{isVisible ? 'Visible' : 'Not Visible'}</div>
  );
}
```

---

### 8. `useLocalStorage`
Gère l'état avec localStorage.

#### Exemple:
```tsx
import { useLocalStorage } from '@reactory/hooks';

function LocalStorageComponent() {
  const [value, setValue] = useLocalStorage('key', 'default');

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
```

---

### 9. `usePrevious`
Suivi de la valeur précédente d'un état ou d'une prop.

#### Exemple:
```tsx
import { usePrevious } from '@reactory/hooks';

function PreviousValueComponent({ value }) {
  const prevValue = usePrevious(value);

  return (
    <div>
      <p>Current: {value}</p>
      <p>Previous: {prevValue}</p>
    </div>
  );
}
```

---

### 10. `usePromise`
Gère les promesses avec gestion d'état.

#### Exemple:
```tsx
import { usePromise } from '@reactory/hooks';

function PromiseComponent() {
  const { data, loading, error } = usePromise(() => fetch('https://api.example.com/data').then(res => res.json()));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{JSON.stringify(data)}</div>;
}
```

---

### 11. `useSessionStorage`
Gère l'état avec sessionStorage.

#### Exemple:
```tsx
import { useSessionStorage } from '@reactory/hooks';

function SessionStorageComponent() {
  const [value, setValue] = useSessionStorage('key', 'default');

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
```

---

### 12. `useTimeout`
Exécute un callback après un délai.

#### Exemple:
```tsx
import { useTimeout } from '@reactory/hooks';

function TimeoutComponent() {
  useTimeout(() => console.log('Timeout!'), 1000);

  return <p>Check the console after 1 second.</p>;
}
```

---

### 13. `useToggle`
Bascule une valeur booléenne.

#### Exemple:
```tsx
import { useToggle } from '@reactory/hooks';

function ToggleComponent() {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <p>{value ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

---

### 14. `useWindowScroll`
Suivi de la position du défilement de la fenêtre.

#### Exemple:
```tsx
import { useWindowScroll } from '@reactory/hooks';

function ScrollComponent() {
  const [x, y] = useWindowScroll();

  return <p>Scroll Position: {x}, {y}</p>;
}
```

---

### 15. `useWindowSize`
Suivi de la taille de la fenêtre.

#### Exemple:
```tsx
import { useWindowSize } from '@reactory/hooks';

function WindowSizeComponent() {
  const [width, height] = useWindowSize();

  return <p>Window Size: {width} x {height}</p>;
}
```

---

## 🌍 Contributing
Nous accueillons les contributions ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## 📜 License
Ce projet est sous licence MIT.