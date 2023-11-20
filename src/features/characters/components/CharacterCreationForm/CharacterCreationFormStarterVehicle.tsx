import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { STARTER_VEHICLES } from '@/features/characters/constants/STARTER_VEHICLES.ts';
import { STARTER_VEHICLE_COLORS } from '@/features/characters/constants/STARTER_VEHICLE_COLORS.ts';

export const CharacterCreationFormStarterVehicle = () => {
  return (
    <Card className="col-span-1 xl:col-span-2">
      <CardHeader className="md:flex-row lg:flex-col xl:flex-row gap-2 justify-between">
        <CardTitle>Pojazd startowy</CardTitle>

        <FormField
          name="starterVehicleColor"
          render={({ field }) => (
            <FormItem className="!-mt-0.5 flex space-x-2 space-y-0 items-center">
              <FormLabel>Kolor pojazdu:</FormLabel>

              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value} className="flex">
                  {STARTER_VEHICLE_COLORS.map((x) => (
                    <FormItem key={`vehicle-color-${x}`}>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl className="sr-only">
                          <RadioGroupItem value={x} />
                        </FormControl>

                        <div
                          className="h-6 w-6 items-center rounded-md border-2 border-muted hover:border-accent cursor-pointer"
                          style={{ background: x }}
                        ></div>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <FormField
          name="starterVehicleId"
          render={({ field }) => (
            <FormItem>
              <FormControl className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6">
                <RadioGroup
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  value={field.value.toString()}
                >
                  {STARTER_VEHICLES.map((x) => (
                    <FormItem
                      key={`starter-vehicle-${x.id}`}
                      className="flex items-center space-x-2 space-y-0"
                    >
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl className="sr-only">
                          <RadioGroupItem value={x.id.toString()} />
                        </FormControl>

                        <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent cursor-pointer">
                          <img src={`https://cdn.v-rp.pl/vrp-vehicles/thumb-${x.model}.jpg`} />
                        </div>

                        <span className="block w-full p-2 text-center font-normal">{x.name}</span>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
