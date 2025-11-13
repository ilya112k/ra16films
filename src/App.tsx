
import { Stars } from './components/stars.tsx';

function App() {
  const stars: number = 4;

  return (
    <>
      <Stars count={stars} />
    </>
  );
}

export default App;
