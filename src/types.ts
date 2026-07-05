export interface Product {
  id: string;
  name: string;
  description: string;
  category: "DIY" | "Corporativo" | "Decoração" | "Acessórios" | "Eventos" | "Brindes" | "Presentes";
  material: string;
  price: number;
  imagePlaceholder: string;
  features: string[];
}

export interface LaserConfig {
  speed: number; // mm/s
  power: number; // %
  material: "acrylic" | "mdf" | "leather" | "aluminum";
  textToEngrave: string;
  selectedShape: "star" | "circle" | "gear" | "text" | "monk";
}

export interface VectorFile {
  name: string;
  size: number;
  status: "idle" | "parsing" | "ready" | "error";
  pathCount?: number;
  totalLengthCm?: number;
  estPrice?: number;
  estTimeSeconds?: number;
}
