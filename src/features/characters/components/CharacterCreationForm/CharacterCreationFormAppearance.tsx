import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { EYE_COLORS } from '@/features/characters/constants/EYE_COLORS.ts';

export const CharacterCreationFormAppearance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wygląd</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <FormField
          name="weight"
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Waga (kg)</FormLabel>

              <FormControl>
                <Input
                  type="number"
                  placeholder="70"
                  onChange={(e) => onChange(parseInt(e.target.value))}
                  {...rest}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="height"
          render={({ field: { onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Wzrost (cm)</FormLabel>

              <FormControl>
                <Input
                  type="number"
                  placeholder="180"
                  onChange={(e) => onChange(parseInt(e.target.value))}
                  {...rest}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="eyeColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kolor oczu</FormLabel>

              <FormControl>
                <Select
                  value={field.value.toString()}
                  onValueChange={(x) => field.onChange(parseInt(x))}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {EYE_COLORS.map((x) => (
                      <SelectItem key={`eye-color-${x.name}`} value={x.name}>
                        {x.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
