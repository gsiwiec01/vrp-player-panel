import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input.tsx';

export const CharacterCreationFormBackground = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rodzice</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <FormField
          name="fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imię ojca</FormLabel>

              <FormControl>
                <Input {...field} placeholder="John" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="motherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imię matki</FormLabel>

              <FormControl>
                <Input {...field} placeholder="Jane" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
