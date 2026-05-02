import { lazy, Suspense, useState } from 'react';
import useClickOutside from './hooks/useClickOutside';
import useToggle from './hooks/useToggle';

const Dashboard = lazy(() => import('./components/Dashboard'));

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, toggleVisible] = useToggle(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <button onClick={toggleVisible}>Toggle</button>
      <button onClick={() => setShowDashboard((s) => !s)}>
        {showDashboard ? 'Hide Dashboard' : 'Load Dashboard'}
      </button>

      {isOpen && (
        <div
          ref={ref}
          style={{ border: '1px solid black', padding: '20px', backgroundColor: 'white' }}
        >
          <h2>Modal</h2>
          <p>Click outside this modal to close it.</p>
        </div>
      )}

      {isVisible && (
        <div>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      )}

      {showDashboard && (
        <Suspense fallback={<p>Loading...</p>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
};

export default App;
