import { useState } from 'react';
import Form from '../components/CarManagement/Form';
import Table from '../components/CarManagement/Table';
import Footer from '../components/CarManagement/Footer';
import type { Car } from '../services/CarManagement';
import '../styles/CarManagement.css';

function CarManagement() {
  const [mode, setMode] = useState<'default' | 'add' | 'edit' | 'delete'>('default');
  const [cars, setCars] = useState<Car[]>([]);
  const [currentCar, setCurrentCar] = useState<Car | null>(null);

  return (
    <section className='car-section'>
      <div className="grid-container">
        <Form mode={mode} setMode={setMode} setCars={setCars} currentCar={currentCar} />
        <Table mode={mode} setMode={setMode} cars={cars} setCars={setCars} setCurrentCar={setCurrentCar} />
        <Footer />
      </div>
    </section>
  );
}

export default CarManagement;
