import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import paw from '../assets/dog-paw.png';

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      });
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Используем Google Places API для поиска зоомагазинов рядом
      const googleAPIKey = 'AIzaSyCn2ndeHkGiOjNO-TaIgWGUjBgL1NyilHw'; // Вставь сюда свой API ключ
      const radius = 5000; // Радиус поиска в метрах
      const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation[0]},${userLocation[1]}&radius=${radius}&type=store&keyword=pet&key=${googleAPIKey}`;

      fetch(placesUrl)
        .then(response => response.json())
        .then(data => {
          if (data.results && data.results.length > 0) {
            setStores(data.results);
          } else {
            setError('Зоомагазины не найдены в этом районе');
          }
        })
        .catch(error => {
          console.error('Ошибка при загрузке данных:', error);
          setError('Ошибка при загрузке данных');
        });
    }
  }, [userLocation]);

  return (
    <div className="map-container" id="map">
      <h1 className="map-title">Ближайшие зоомагазины</h1>
      <div className="map-wrapper">
        {userLocation ? (
          <MapContainer center={userLocation} zoom={13} className="map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {stores.map((store, index) =>
              store.geometry && store.geometry.location ? (
                <Marker
                  key={index}
                  position={[store.geometry.location.lat, store.geometry.location.lng]}
                  icon={new L.Icon({ iconUrl: paw, iconSize: [32, 32] })}
                >
                  <Popup>
                    <strong>{store.name}</strong><br />
                    {store.vicinity ? store.vicinity : 'Адрес не указан'}
                  </Popup>
                </Marker>
              ) : null
            )}
          </MapContainer>
        ) : (
          <p>Загрузка карты...</p>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default MapComponent;
