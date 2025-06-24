import { useEffect } from 'react';
import { getAllCars, getCarById, deleteCar } from '../../services/CarManagement';
import type { Car } from '../../services/CarManagement';

import IconEditar from '../../assets/images/Icon_editar1.svg';
import IconDelete from '../../assets/images/Icon_eliminar1.svg';
import IconEditarG from '../../assets/images/Icon_editar.svg';
import IconDeleteG from '../../assets/images/Icon_eliminar.svg';

function Table({
  mode,
  setMode,
  cars,
  setCars,
  setCurrentCar,
}: {
  mode: string;
  setMode: (mode: any) => void;
  cars: Car[];
  setCars: (cars: Car[]) => void;
  setCurrentCar: (car: Car | null) => void;
}) {
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllCars();
        setCars(data);
      } catch (error) {
        console.error('Error al cargar carros', error);
      }
    };

    fetchCars();
  }, [setCars]);

  const handleEdit = async (id: number) => {
    try {
      const car = await getCarById(id);
      setCurrentCar(car);
      setMode('edit');
    } catch (error) {
      console.error('Error al obtener carro', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCar(id);

      const updated = await getAllCars();
      setCars(updated);

      setMode('default');
    } catch (error) {
      console.error('Error al eliminar carro:', error);
    }
  };

  return (
    <div className="table-car">
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Sucursal</th>
            <th>Aspirante</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((row) => (
            <tr key={row.id}>
              <td>{row.marca}</td>
              <td>{row.sucursal}</td>
              <td>
                <div className="aspirante-cell">
                  <span>{row.aspirante}</span>
                  <div className="actions">
                    <button onClick={() => handleEdit(row.id)}>
                      <img src={mode === 'default' ? IconEditar : IconEditarG} alt="Editar" />
                    </button>
                    <button onClick={() => handleDelete(row.id)}>
                      <img src={mode === 'default' ? IconDelete : IconDeleteG} alt="Eliminar" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
