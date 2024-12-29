import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialState: T) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<T>>({});

  const handleChange = (name: keyof T, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<T> = {};
    Object.keys(values).forEach(key => {
      if (!values[key]) {
        newErrors[key as keyof T] = 'This field is required' as any;
      }
      if (key === 'email' && !/\S+@\S+\.\S+/.test(values[key])) {
        newErrors[key as keyof T] = 'Invalid email format' as any;
      }
      if (key === 'password' && values[key].length < 6) {
        newErrors[key as keyof T] = 'Password must be at least 6 characters' as any;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, errors, handleChange, validate };
};