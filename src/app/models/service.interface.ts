export interface Service {
  id?: number;
  name: string;
  description: string;
  category: {
    id: number;
    name: string;
  }
}
