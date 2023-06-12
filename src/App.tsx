import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import axios, { AxiosResponse } from "axios";


const url = "https://course-api.com/react-tours-project";

interface Tour {
  id: number;
  image: string;
  info: string;
  price: number;
  name: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<Tour[]>([]);

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };


  const fetchTours = async (): Promise<void> => {
    setLoading(true);

    try {
      const response: AxiosResponse<Tour[]> = await axios.get(url);
      const toursData: Tour[] = response.data;
      setTours(toursData);
      localStorage.setItem("tours", JSON.stringify(toursData));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
      setLoading(false);
    } else {
      fetchTours();
    }
  }, []);

  const handleRefresh = () => {
    localStorage.removeItem("tours");
    fetchTours();
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={handleRefresh}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
