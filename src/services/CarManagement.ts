import api from './AxiosConfig';

export interface Car {
  id: number;
  marca: string;
  sucursal: string;
  aspirante: string;
}

export interface CarCreate {
  marca: string;
  sucursal: string;
  aspirante: string;
}

export interface Car extends CarCreate {
    id: number;
}

export const getAllCars = async (): Promise<Car[]> => {
    const response = await api.get('/cars', {
      params: {
        skip: 0,
        limit: 10,
      },
    });
    return response.data;
  };

export const getCarById = async (id: number): Promise<Car> => {
  const response = await api.get(`/cars/${id}`);
  return response.data;
};

export const createCar = async (carData: CarCreate): Promise<Car> => {
    const response = await api.post('/cars', carData); 
    return response.data;
  };

export const updateCar = async (id: number, carData: CarCreate): Promise<Car> => {
  const response = await api.put(`/cars/${id}`, carData);
  return response.data;
};

export const deleteCar = async (id: number): Promise<Car> => {
  const response = await api.delete(`/cars/${id}`);
  return response.data;
};
