```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    // This effect runs every time count changes
    console.log('Count changed:', count);
    // If you have logic that needs to run asynchronously after count changes
    // you must handle clean up within this effect like so:
    const timer = setTimeout(() => {
        console.log('Async operation after count change complete');
    }, 5000);
    return () => clearTimeout(timer); // cleanup function
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```