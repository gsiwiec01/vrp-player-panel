import { FormProvider } from 'react-hook-form';
import { FormFieldProvider } from '@/contexts/FormFieldProvider.tsx';

import { FormControl } from '@/components/ui/Form/FormControl.tsx';
import { FormDescription } from '@/components/ui/Form/FormDescription.tsx';
import { FormItem } from '@/components/ui/Form/FormItem.tsx';
import { FormLabel } from '@/components/ui/Form/FormLabel.tsx';
import { FormMessage } from '@/components/ui/Form/FormMessage.tsx';

export {
  FormProvider as Form,
  FormFieldProvider as FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
};
