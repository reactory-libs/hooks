# 🚀 React Hooks Library

A collection of custom React hooks designed to simplify and enhance your React applications. Each hook is documented with its purpose and usage examples.

La documentation est disponible [en français](docs/Readme.fr.md).

## 🔧 Installation

```bash
npm install @reactory/hooks
```

or

```bash
yarn add @reactory/hooks
```

## 📖 Available Hooks

### 1. `useControlledInput`
Manages controlled inputs with a convenient API.

#### Example:
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
Provides counter logic with optional min and max constraints.

#### Example:
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
Debounces a value over a specified delay.

#### Example:
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
Attaches an event listener to an element.

#### Example:
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
Fetches data from a given URL.

#### Example:
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
Handles file drag-and-drop events.

#### Example:
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
Observes an element's intersection with the viewport.

#### Example:
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
Manages state with localStorage.

#### Example:
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
Tracks the previous value of a state or prop.

#### Example:
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
Handles promises with state management.

#### Example:
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
Manages state with sessionStorage.

#### Example:
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
Executes a callback after a delay.

#### Example:
```tsx
import { useTimeout } from '@reactory/hooks';

function TimeoutComponent() {
  useTimeout(() => console.log('Timeout!'), 1000);

  return <p>Check the console after 1 second.</p>;
}
```

---

### 13. `useToggle`
Toggles a boolean value.

#### Example:
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
Tracks the window's scroll position.

#### Example:
```tsx
import { useWindowScroll } from '@reactory/hooks';

function ScrollComponent() {
  const [x, y] = useWindowScroll();

  return <p>Scroll Position: {x}, {y}</p>;
}
```

---

### 15. `useWindowSize`
Tracks the window's size.

#### Example:
```tsx
import { useWindowSize } from '@reactory/hooks';

function WindowSizeComponent() {
  const [width, height] = useWindowSize();

  return <p>Window Size: {width} x {height}</p>;
}
```

---

## 🌍 Contributing
We welcome contributions! Feel free to open an issue or submit a pull request.

## 📜 License
This project is licensed under the MIT License.