export interface STUDENTFORM {
  name: string;
  email: string;
  specialization: string;
  phone: string;
  studentID?: number | null;
}

export interface GreetingProps{
    name:string;
    isVip:boolean;
}



export interface ProductCardProps {
    title: string;
    price: number;
    inStock: boolean;
  }