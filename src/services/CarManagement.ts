import api from './AxiosConfig';
import type { Car } from '../utils/car-helper';

export const getAllCars = async (skip = 0, limit = 10): Promise<Car[]> => {
  try {
    const response = await api.get('/cars', {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw new Error('No se pudieron obtener los autos');
  }
};

export const getCarById = async (id: number): Promise<Car> => {
  try {
    const response = await api.get(`/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with id ${id}:`, error);
    throw new Error('No se pudo obtener el auto');
  }
};

export const createCar = async (carData: Car): Promise<Car> => {
  try {
    const response = await api.post('/cars', carData); 
    return response.data;
  } catch (error) {
    console.error('Error creating car:', error);
    throw new Error('No se pudo crear el auto');
  }
};

export const updateCar = async (id: number, carData: Car): Promise<Car> => {
  try {
    const response = await api.put(`/cars/${id}`, carData);
    return response.data;
  } catch (error) {
    console.error(`Error updating car with id ${id}`, error);
    throw new Error('No se pudo actualizar el auto');
  }
};

export const deleteCar = async (id: number): Promise<void> => {
  try {
    await api.delete(`/cars/${id}`);
  } catch (error) {
    console.error(`Error deleting car with id ${id}:`, error);
    throw new Error('No se pudo eliminar el auto');
  }
};