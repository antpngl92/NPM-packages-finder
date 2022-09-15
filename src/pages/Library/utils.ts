type User = {
  username: string;
  email: string;
};

type Package = {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  publisher: User;
  maintainers: User[];
};

type Score = {
  final: number;
  popularity: number;
  maintenance: number;
};

export type TLibrary = {
  package: Package;
  score: Score;
  searchScore: number;
};
