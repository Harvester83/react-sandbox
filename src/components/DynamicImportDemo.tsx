import { useState } from 'react';

type Result = { sum: number; avg: number; max: number; min: number };

const data = [4, 8, 15, 16, 23, 42];

const DynamicImportDemo = () => {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLoad = async () => {
    setLoading(true);
    const { analyze } = await import('../utils/heavyCalc')
    setResult(analyze(data));
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '24px' }}>
      <h3>Dynamic Import (no lazy)</h3>
      <p>
        <code>heavyCalc.ts</code> lives in a separate chunk — fetched only on click.
      </p>
      <button onClick={handleLoad} disabled={loading}>
        {loading ? 'Loading chunk...' : 'Run analyze()'}
      </button>

      {result && (
        <pre style={{ marginTop: '12px' }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
};

export default DynamicImportDemo;
