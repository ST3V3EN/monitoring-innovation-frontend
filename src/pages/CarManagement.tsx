import { useEffect, useState } from 'react';
import Form from '../components/CarManagement/Form';
import Table from '../components/CarManagement/Table';
import Footer from '../components/CarManagement/Footer';
import type { Car } from '../utils/car-helper.ts';
import '../styles/CarManagement.css';
import { getAllCars } from '../services/CarManagement';

function CarManagement() {
  const [mode, setMode] = useState<'default' | 'add' | 'edit' | 'delete'>('default');
  const [cars, setCars] = useState<Car[]>([]);
  const [currentCar, setCurrentCar] = useState<Car | null>(null);


  useEffect(() => {
    const fetchCars = async () => {
      try {
        let cars = await getAllCars();
        setCars(cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [])

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

export default CarManagement;