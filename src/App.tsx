// Conventional props
function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  )
}

function App() {
  return (
    <div>
      <Heading title="TypeScript Training"></Heading>
    </div>
  );
}

export default App;
