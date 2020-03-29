export interface Investigation {
  id?: number;
  title: string;
  description: string;
  member_id: number;
  name?: string;
  position?: string,
  email?: string,
  phone?: string,
  cv_path?: string,
  image_path?: string,
}
