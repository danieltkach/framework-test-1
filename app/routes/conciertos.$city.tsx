// app/routes/concerts.$city.tsx

import { useLoaderData } from "react-router-dom";

// Define LoaderArgs type if not imported from a framework
type LoaderArgs = {
  params: {
    city?: string;
    [key: string]: string | undefined;
  };
};

// This loader runs BOTH on the server (SSR) and on the client (if using client‐side data fetching)
export async function loader({ params }: LoaderArgs) {
  const { city } = params;
  // You can fetch concerts by city from your DB here.
  const concerts = await fetchConcertsByCity(city!);
  return { concerts, city };
}

export default function ConcertsByCityRoute() {
  let { concerts, city } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Concerts in {city}</h1>
      <ul>
        {concerts.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

function fetchConcertsByCity(arg0: any) {
  return ([
    { name: 'Concert 1', id: 1 },
    { name: 'Concert 2', id: 2 },
  ]);
}

