import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { CharacterType } from '@/features/characters/constants/enums/CharacterType.ts';

export const CharacterCreationFormLegalStatus = () => {
  return (
    <Card className="col-span-1 xl:col-span-2">
      <CardHeader>
        <CardTitle>Status prawny</CardTitle>
        <CardDescription>
          Wybierz jeden z trzech poniżej opisanych statusów prawnych dla Twojej postaci. Pamiętaj,
          że ten wybór wpłynie na całą rozgrywkę i nie będziesz mógł tego później zmienić.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 mx-auto">
        <FormField
          name="characterType"
          render={({ field }) => (
            <FormItem>
              <FormControl className="flex justify-between gap-6">
                <RadioGroup
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  value={field.value.toString()}
                >
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl className="sr-only">
                        <RadioGroupItem value={CharacterType.LegalUsa.toString()} />
                      </FormControl>

                      <div className="h-full space-y-1 rounded-md border-2 border-muted hover:border-accent cursor-pointer bg-accent p-4 text-accent-foreground">
                        <p className="text-sm font-medium leading-none">Ubywatel USA</p>
                        <p className="text-sm text-muted-foreground">
                          Jako obywatel USA rozgyrwkę rozpoczynasz z befeitami startowymi w postaci:
                          dowodu osobistego, aktywnego telefonu komórkowego. Ponadto twoja postać
                          posiadasz wpis w bazie policji umożliwający identyfikację.
                        </p>
                      </div>
                    </FormLabel>
                  </FormItem>

                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl className="sr-only">
                        <RadioGroupItem value={CharacterType.LegalImmigrant.toString()} />
                      </FormControl>

                      <div className="h-full space-y-1 rounded-md border-2 border-muted hover:border-accent cursor-pointer bg-accent p-4 text-accent-foreground">
                        <p className="text-sm font-medium leading-none">Legalny imigrant</p>
                        <p className="text-sm text-muted-foreground">
                          Jako nielegalny imigrant rozgyrwkę rozpoczynasz z befeitami startowymi w
                          postaci: dowodu osobistego, aktywnego telefonu komórkowego. Ponadto twoja
                          postać posiadasz wpis w bazie policji umożliwający identyfikację.
                        </p>
                      </div>
                    </FormLabel>
                  </FormItem>

                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl className="sr-only">
                        <RadioGroupItem value={CharacterType.IllegalImmigrant.toString()} />
                      </FormControl>

                      <div className="h-full space-y-1 rounded-md border-2 border-muted hover:border-accent cursor-pointer bg-accent p-4 text-accent-foreground">
                        <p className="text-sm font-medium leading-none">Nielegalny imigrant</p>
                        <p className="text-sm text-muted-foreground">
                          Jako nielegalny imigrant jesteś pozbawiony wymienionych benefitów
                          startowych, zakupu auto lub mieszkania możesz dokonać jedynie z drugiej
                          ręki. Dodatkowo nie możesz podjąc pracy dorwyczej, a złapanie przez
                          policje może sktuować deportacją (blokadą postaci).
                        </p>
                      </div>
                    </FormLabel>
                  </FormItem>
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
