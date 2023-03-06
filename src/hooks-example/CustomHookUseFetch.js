import { useEffect, useState, useDebugValue } from "react";

export default function CustomHookUseFetch() {
  const [loading, response] = useFetch('https://api.github.com/users/alperensin');
  const example_useDebugValue_404 = useFetch('https://api.github.com/users/alperensin1');

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div style={{ padding: "24px", background: "#FFFFFF" }}>
      <h1>Custom Hook - useFetch</h1>
      {response.data.login && <h2>{response.data.login}</h2>}
      {response.data.name && <h2>{response.data.name}</h2>}
      {response.data.html_url && <img style={{ borderRadius: '100%', width: 200 }} src={`${response.data.html_url}.png`} alt={response.data.login} />}
    </div>
  );
}

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse({ data: json, status: resp.status });
    })();
  }, [url]);

  // Using useDebugValue inside the useFetch custom hook
  useDebugValue(response?.status, (message) => {
    // The function receives as a parameter the value previously passed as the first parameter to the useDebugValue hook and returns the value that will actually be displayed in the custom hook debug using React Developer Tools
    return `Status: ${message}`
  })

  return [loading, response];
}