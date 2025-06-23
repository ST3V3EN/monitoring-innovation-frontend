import IconPlus from '../../assets/images/Icon_crear.svg';
import IconMarcaG from '../../assets/images/Icon_vehiculo.svg';
import IconSucursalG from '../../assets/images/Icon_puntoubicacion.svg';
import IconAspiranteG from '../../assets/images/Icon_persona.svg';
import IconMarca from '../../assets/images/Icon_vehiculo1.svg';
import IconSucursal from '../../assets/images/Icon_puntoubicacion1.svg';
import IconAspirante1 from '../../assets/images/Icon_persona1.svg';
import IconCancel from '../../assets/images/Icon_cancelar.svg';
import IconCheck from '../../assets/images/Icon_confirmar.svg';

function Form({ mode, setMode }: { mode: string; setMode: (mode: any) => void }) {

    return (
      <div className={`form-car ${mode !== 'default' ? 'expanded' : 'default'}`}>
        <form>
            <button
                type="button"
                className="add-button"
                onClick={() => setMode('add')}
                >
                <img src={IconPlus} alt="Agregar" />
            </button>
  
          <div className="form-group">
            <img
              src={mode === 'default' ? IconMarcaG : IconMarca}
              alt="Marca"
              className="form-icon"
            />
            <input type="text" name="marca" placeholder="Marca" />
          </div>
  
          <div className="form-group">
            <img
              src={mode === 'default' ? IconSucursalG : IconSucursal}
              alt="Sucursal"
              className="form-icon"
            />
            <input type="text" name="sucursal" placeholder="Sucursal" />
          </div>
  
          <div className="form-group">
            <img
              src={mode === 'default' ? IconAspiranteG : IconAspirante1}
              alt="Aspirante"
              className="form-icon"
            />
            <input type="text" name="aspirante" placeholder="Aspirante" />
          </div>
  
          {mode === 'add' && (
            <div className="form-buttons">
              <button className="form-cancel" type="button" onClick={() => setMode('default')}>
                Cancelar
              </button>
              <button className="form-create" type="submit">
                Crear
              </button>
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
  