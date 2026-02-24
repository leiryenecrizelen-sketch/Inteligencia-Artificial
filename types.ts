
export interface Module {
  id: number;
  title: string;
  description: string;
  topics: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
