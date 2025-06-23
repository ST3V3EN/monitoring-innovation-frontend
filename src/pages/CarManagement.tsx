import { useState } from 'react';
import Form from '../components/CarManagement/Form';
import Table from '../components/CarManagement/Table';
import Footer from '../components/CarManagement/Footer';
import '../styles/CarManagement.css'

function CarManagement() {
  const [mode, setMode] = useState<'default' | 'add' | 'edit' | 'delete'>('default');

  return (
    <section className='car-section'>
      <div className="grid-container">
        
        <Form mode={mode} setMode={setMode}/>
        <Table mode={mode} setMode={setMode}/>
        <Footer />
        
      </div>
    </section>
  );
}

export default CarManagement;
