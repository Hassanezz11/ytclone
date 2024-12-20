import React, { useState, useEffect } from 'react';
import { fetchVideos } from './YoutubeAPI';
import VideoList from './VideoList';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fetchedVideos = await fetchVideos(searchTerm);
    setVideos(fetchedVideos);
    setLoading(false);
  };

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      const fetchedVideos = await fetchVideos('React tutorials');
      setVideos(fetchedVideos);
      setLoading(false);
    };
    loadVideos();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>YouTube Explorer</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher des vidéos..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            {loading ? 'Chargement...' : 'Rechercher'}
          </button>
        </form>
      </header>
      <main className="main-content">
        <VideoList videos={videos} />
      </main>
    </div>
  );
};

export default App;