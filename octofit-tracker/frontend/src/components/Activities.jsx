import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

export default function Activities() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(getApiUrl('activities'));
        const payload = await response.json();
        const data = Array.isArray(payload) ? payload : payload.data ?? [];
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p className="text-muted">Loading activities…</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2 className="h4 mb-3">Activities</h2>
      <div className="list-group">
        {items.map((item) => (
          <div className="list-group-item" key={item._id || item.type}>
            <strong>{item.type}</strong>
            <div className="text-muted small">{item.durationMinutes} mins</div>
            <div className="small">Distance: {item.distanceKm} km</div>
          </div>
        ))}
      </div>
    </div>
  );
}
