import { useEffect, useState } from 'react';
import { StonkData } from './dataSchema';

function HomePage() {
  
    const [data, setData] = useState<StonkData[]>([]);

  const apiAddress = "https://665621609f970b3b36c4625e.mockapi.io/users"

  
  useEffect(() => {
    fetch(apiAddress)
     .then((response) => response.json())
     .then((data) => setData(data));
  }, []);

  return (
    <div>
    </div>
  );
}

export default HomePage;
