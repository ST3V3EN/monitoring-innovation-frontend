import { useEffect, useState } from 'react';
import { getAllCars, getCarById, deleteCar } from '../../services/CarManagement';
import type { Car } from '../../utils/car-helper.ts';
import swal from 'sweetalert';

import IconEditar from '@assets/Icon_editar1.svg';
import IconDelete from '@assets/Icon_eliminar1.svg';
import IconEditarG from '@assets/Icon_editar.svg';
import IconDeleteG from '@assets/Icon_eliminar.svg';

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
  const [activeId, setActiveId] = useState<number | null>(null);

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

  const handleEdit = async (id: number | undefined) => {
    if (id === undefined) return;
    try {
      const car = await getCarById(id);
      setCurrentCar(car);
      setMode('edit');
      setActiveId(id);
    } catch (error) {
      console.error('Error al obtener carro', error);
    }
  };

  const handleDelete = async (id: number | undefined) => {
    if (id === undefined) return;
    try {
      await deleteCar(id);

      swal({
        title: 'Éxito',
        text: 'El carro ha sido eliminado correctamente.',
        icon: 'success',
        buttons: {
          confirm: {
            className: 'swal-button-blue',
          },
        },
      });

      const updated = await getAllCars();
      setCars(updated);
      setMode('default');
      setActiveId(null);
    } catch (error) {
      console.error('Error al eliminar carro:', error);
    }
  };

  useEffect(() => {
    if (mode === 'default') {
      setActiveId(null);
    }
  }, [mode]);

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
          {cars.map((row) => {
            const isActive = row.id === activeId;
            const shouldFade = mode !== 'default' && !isActive;
            const showColorIcons = mode !== 'default';

            return (
              <tr key={row.id}>
                <td>{row.marca}</td>
                <td>{row.sucursal}</td>
                <td>
                  <div className="aspirante-cell">
                    <span>{row.aspirante}</span>
                    <div className="actions">
                      <button onClick={() => handleEdit(row.id)}>
                        <img
                          className={`fade-img ${shouldFade ? 'fade-inactive' : ''}`}
                          src={showColorIcons ? IconEditarG : IconEditar}
                          alt="Editar"
                        />
                      </button>
                      <button onClick={() => handleDelete(row.id)}>
                        <img
                          className={`fade-img ${shouldFade ? 'fade-inactive' : ''}`}
                          src={showColorIcons ? IconDeleteG : IconDelete}
                          alt="Eliminar"
                        />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
