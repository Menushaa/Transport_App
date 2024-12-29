export interface Vehicle {
    id: string;
    title: string;
    description: string;
    status: 'AVAILABLE' | 'IN-TRANSIT' | 'MAINTANANCE';
    imageUrl: string;
    type: string;
    capacity: number;
  }
  
  export interface UserData {
    email: string;
    password: string;
    username?: string;
  }