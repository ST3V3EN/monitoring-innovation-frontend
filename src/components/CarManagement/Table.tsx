import IconEditar from '../../assets/images/Icon_editar1.svg';
import IconDelete from '../../assets/images/Icon_eliminar1.svg';
import IconEditarG from '../../assets/images/Icon_editar.svg';
import IconDeleteG from '../../assets/images/Icon_eliminar.svg';

function Table({ mode, setMode }: { mode: string; setMode: (mode: any) => void }) {
    const handleEdit = () => {
      setMode('edit');
    };
  
    const handleDelete = () => {
      setMode('delete');
    };
  
    // Pruebita
    const rows = [
      { id: 1, marca: 'Chevrolet', sucursal: 'Medellín', aspirante: 'Juan Pérez' },
      { id: 2, marca: 'Renault', sucursal: 'Bogotá', aspirante: 'María Gómez' },
    ];
  
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
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.marca}</td>
                <td>{row.sucursal}</td>
                <td>
                  <div className="aspirante-cell">
                    <span>{row.aspirante}</span>
                    <div className="actions">
                      <button onClick={() => handleEdit()}>
                        <img 
                        src={mode === 'default' ? IconEditar : IconEditarG}
                        alt="Editar" />
                      </button>
                      <button onClick={() => handleDelete()}>
                        <img 
                        src={mode === 'default' ? IconDelete : IconDeleteG}
                        alt="Eliminar" />
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
