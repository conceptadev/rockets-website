import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

function App() {
  return (
    <DocSearch
      appId="2R6I07Q0HG"
      apiKey="4489c6b7099ffc6fccea33de59f4d0e0"
      indexName="rockets"
    />
  );
}

export default App;