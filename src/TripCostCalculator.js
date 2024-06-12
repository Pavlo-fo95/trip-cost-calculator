import React, { useState } from 'react';
import './App.css';

function TripCostCalculator() {
  const [distance, setDistance] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [tripCost, setTripCost] = useState(null);

  const calculateCost = () => {
    const cost = (distance / 100) * fuelConsumption * fuelPrice;
    setTripCost(cost);
  };

  return (
    <div className="calculator">
      <h1>Стоимость поездки</h1>
      <div className="input-group">
        <label>Расстояние</label>
        <div className="input-wrapper">
          <input 
            type="number" 
            value={distance} 
            onChange={(e) => setDistance(e.target.value)} 
            placeholder="км" 
          />
          <span>км</span>
        </div>
      </div>
      <div className="input-group">
        <label>Расход топлива</label>
        <div className="input-wrapper">
          <input 
            type="number" 
            value={fuelConsumption} 
            onChange={(e) => setFuelConsumption(e.target.value)} 
            placeholder="л/100 км" 
          />
          <span>л/100 км</span>
        </div>
      </div>
      <div className="input-group">
        <label>Цена топлива</label>
        <div className="input-wrapper">
          <input 
            type="number" 
            value={fuelPrice} 
            onChange={(e) => setFuelPrice(e.target.value)} 
            placeholder="грн/литр" 
          />
          <span>грн/литр</span>
        </div>
      </div>
      <div className="button-group">
        <button onClick={calculateCost}>Рассчитать</button>
      </div>
      {tripCost !== null && (
        <div className="result">
          <h2>Стоимость поездки: {tripCost.toFixed(2)} грн</h2>
        </div>
      )}
    </div>
  );
}

export default TripCostCalculator;