
interface _Investigation {
  name: string;
  description: string;
}

export interface Investigation {
  id?: string;
  researcher: string;
  position: string;
  researches: _Investigation[];
}
