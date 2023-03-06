import { useEffect, useState } from "react";

export default function CustomHookUseFetch() {
  const [loading, response] = useFetch('https://api.github.com/users/alperensin');

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div style={{ padding: "24px", background: "#FFFFFF" }}>
      <h1>Custom Hook - useFetch</h1>
      {response.login && <h2>{response.login}</h2>}
      {response.name && <h2>{response.name}</h2>}
      {response.html_url && <img style={{ borderRadius: '100%', width: 200 }} src={`${response.html_url}.png`} alt={response.login} />}
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
      setResponse(json);
    })();
  }, [url]);

  return [loading, response];
}