import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button.tsx';
import { cn } from '@/utils/shadcnUtils.ts';
import dayjs from 'dayjs';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { Calendar } from '@/components/ui/Calendar.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sex } from '@/constants/enums/Sex.ts';
import { useState } from 'react';
import { COUNTRIES } from '@/features/characters/constants/COUNTRIES.ts';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command.tsx';
import { ScrollArea } from '@/components/ui/ScrollArea';

export const CharacterCreationFromPersonalities = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card className="row-span-1 xl:row-span-2">
      <CardHeader>
        <CardTitle>Personalia</CardTitle>
        <CardDescription className="text-justify">
          Wybierając imię i nazwisko dla swojej postaci pamiętaj, że imiona i nazwiska: Polskie,
          znanych osób oraz przesadnie egzotyczne są zakazane i będą blokowane.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imię</FormLabel>

              <FormControl>
                <Input {...field} placeholder="John" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwisko</FormLabel>

              <FormControl>
                <Input {...field} placeholder="Doe" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Płeć</FormLabel>

              <FormControl>
                <Select
                  value={field.value.toString()}
                  onValueChange={(x) => field.onChange(parseInt(x))}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={Sex.Male.toString()}>Mężczyzna</SelectItem>
                    <SelectItem value={Sex.Female.toString()}>Kobieta</SelectItem>
                    <SelectItem value={Sex.Unknown.toString()}>Inna</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data urodzenia</FormLabel>

              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        'pl-3 font-normal w-full',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? dayjs(field.value).format('LL') : <>Wybierz datę</>}

                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                    initialFocus
                    captionLayout="dropdown-buttons"
                    fromYear={1920}
                    toYear={2023}
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="placeOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Miejsce urodzenia</FormLabel>

              <FormControl>
                <Input {...field} placeholder="Ditroit" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kraj pochodzenia</FormLabel>

              <FormControl>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="justify-between"
                    >
                      {field.value
                        ? COUNTRIES.find((x) => x.value.toLowerCase() === field.value.toLowerCase())
                            ?.label
                        : 'Wybierz kraj pochodzenia...'}

                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-[300px] h-[300px] p-0">
                    <Command>
                      <CommandInput placeholder="Wyszukaj kraj" />
                      <CommandEmpty>Nie znaleziono szukanego kraju....</CommandEmpty>
                      <CommandGroup>
                        <ScrollArea className="h-[250px]">
                          {COUNTRIES.map((x) => (
                            <CommandItem
                              key={`country-${x.code}`}
                              value={x.value}
                              onSelect={() => {
                                field.onChange(x === field.value ? '' : x.value);
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  field.value === x.value ? 'opacity-100' : 'opacity-0',
                                )}
                              />
                              {x.label}
                            </CommandItem>
                          ))}
                        </ScrollArea>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
