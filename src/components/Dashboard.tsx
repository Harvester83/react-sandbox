const Dashboard = () => {
  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid #646cff',
        borderRadius: '8px',
        marginTop: '16px',
      }}
    >
      <h2>Dashboard</h2>
      <p>This component was loaded lazily — it lives in a separate JS chunk.</p>
      <ul>
        <li>Chunk is fetched only on first click</li>
        <li>Subsequent renders use the cached module</li>
        <li>Vite splits it automatically via dynamic import</li>
      </ul>
    </div>
  );
};

export default Dashboard;
