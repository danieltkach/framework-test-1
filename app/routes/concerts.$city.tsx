import { useParams, Link } from "react-router";

export default function ConcertsByCity() {
  let { city } = useParams();
  // `city` is whatever was in the URL after `/concerts/`
  return (
    <div>
      <h1>Concerts in {city}</h1>
      {/* e.g. a fetch against `/api/concerts?city=${city}` */}
      <Link to="/concerts/trending">See Trending Concerts</Link>
    </div>
  );
}
