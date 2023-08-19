import * as React from 'react';
import { ReactNode } from 'react';

type FormItemContextValue = {
  id: string;
};

type FormItemProviderProps = {
  children: ReactNode;
};

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export function FormItemProvider({ children }: FormItemProviderProps) {
  const id = React.useId();

  return <FormItemContext.Provider value={{ id }}>{children}</FormItemContext.Provider>;
}
