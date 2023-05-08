import Date from './pages/Date';
import Work from './pages/Work';

function App() {
  return (
    <div
      className='App'
      style={{
        margin: '60px',
      }}
    >
      <Date />
      <hr
        style={{
          marginTop: '60px',
          marginBottom: '60px',
        }}
      />
      <Work />
    </div>
  );
}

export default App;
