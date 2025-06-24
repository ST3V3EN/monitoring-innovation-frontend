import { useState, useEffect } from 'react';
import { createCar, getAllCars, updateCar } from '../../services/CarManagement';
import type { Car } from '../../services/CarManagement';

import IconPlus from '../../assets/images/Icon_crear.svg';
import IconMarcaG from '../../assets/images/Icon_vehiculo.svg';
import IconSucursalG from '../../assets/images/Icon_puntoubicacion.svg';
import IconAspiranteG from '../../assets/images/Icon_persona.svg';
import IconMarca from '../../assets/images/Icon_vehiculo1.svg';
import IconSucursal from '../../assets/images/Icon_puntoubicacion1.svg';
import IconAspirante1 from '../../assets/images/Icon_persona1.svg';
import IconCancel from '../../assets/images/Icon_cancelar.svg';
import IconCheck from '../../assets/images/Icon_confirmar.svg';

function Form({
  mode,
  setMode,
  setCars,
  currentCar,
}: {
  mode: string;
  setMode: (mode: any) => void;
  setCars: (cars: Car[]) => void;
  currentCar: Car | null;
}) {
  const [marca, setMarca] = useState('');
  const [sucursal, setSucursal] = useState('');
  const [aspirante, setAspirante] = useState('');

  useEffect(() => {
    if (mode === 'edit' && currentCar) {
      setMarca(currentCar.marca);
      setSucursal(currentCar.sucursal);
      setAspirante(currentCar.aspirante);
    }
  }, [mode, currentCar]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === 'add') {
        await createCar({ marca, sucursal, aspirante });
      } else if (mode === 'edit' && currentCar) {
        await updateCar(currentCar.id, { marca, sucursal, aspirante });
      }

      // Limpieza
      setMarca('');
      setSucursal('');
      setAspirante('');
      setMode('default');

      // Actualizar tabla
      const updated = await getAllCars();
      setCars(updated);
    } catch (error) {
      console.error('Error al procesar el carro:', error);
    }
  };

  return (
    <div className={`form-car ${mode !== 'default' ? 'expanded' : 'default'}`}>
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          className="add-button"
          onClick={() => setMode('add')}
        >
          <img src={IconPlus} alt="Agregar" />
        </button>

        <div className="form-group">
          <img src={mode === 'default' ? IconMarcaG : IconMarca} alt="Marca" className="form-icon" />
          <input type="text" name="marca" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </div>

        <div className="form-group">
          <img src={mode === 'default' ? IconSucursalG : IconSucursal} alt="Sucursal" className="form-icon" />
          <input type="text" name="sucursal" placeholder="Sucursal" value={sucursal} onChange={(e) => setSucursal(e.target.value)} />
        </div>

        <div className="form-group">
          <img src={mode === 'default' ? IconAspiranteG : IconAspirante1} alt="Aspirante" className="form-icon" />
          <input type="text" name="aspirante" placeholder="Aspirante" value={aspirante} onChange={(e) => setAspirante(e.target.value)} />
        </div>

        {mode === 'add' && (
          <div className="form-buttons">
            <button className="form-cancel" type="button" onClick={() => setMode('default')}>Cancelar</button>
            <button className="form-create" type="submit">Crear</button>
          </div>
        )}

        {mode === 'edit' && (
          <div className="form-buttons">
            <button className="form-edit" type="button" onClick={() => setMode('default')}>
              <img src={IconCancel} />
            </button>
            <button className="form-edit" type="submit">
              <img src={IconCheck} />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
