import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input.tsx';
import { Button } from '@/components/ui/Button.tsx';
import { CircleSlash, Filter } from 'lucide-react';
import { Switch } from '@/components/ui/Switch.tsx';
import { Label } from '@/components/ui/Label.tsx';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCharacterList } from '@/features/characters/services/character.ts';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CharacterListItem } from '@/features/characters/components/CharacterListItem.tsx';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QueryKey } from '@/constants/enums/QueryKey.ts';
import { FormField } from '@/components/ui/Form';

const LIMIT = 12;

const filterSchema = z.object({
  searchPhrase: z.string().optional().default(''),
  includeBlockedCharacters: z.boolean().optional().default(true),
});

type FilterSchema = z.infer<typeof filterSchema>;

export const CharacterList = () => {
  const form = useForm<FilterSchema>({
    resolver: zodResolver(filterSchema),
    defaultValues: { searchPhrase: '', includeBlockedCharacters: true },
  });

  const { hasNextPage, fetchNextPage, data, refetch } = useInfiniteQuery({
    queryKey: [QueryKey.CharacterList],
    queryFn: async ({ pageParam = 1 }) =>
      getCharacterList({ ...form.getValues(), pageNumber: pageParam, pageSize: LIMIT }),
    getNextPageParam: (x, allPages) =>
      x.data.totalCount / LIMIT > allPages.length ? allPages.length : undefined,
  });

  const onSubmit = () => refetch();

  return (
    <>
      <Card className="flex-row space-y-0 items-center justify-end">
        <CardContent className="w-full">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-wrap sm:justify-end items-center gap-4 "
          >
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="includeBlockedCharacters"
                render={({ field: { onChange, value } }) => (
                  <Switch id="hidden-characters" onCheckedChange={onChange} checked={value} />
                )}
              />

              <Label htmlFor="hidden-characters">Pokaż zablokowane postacie</Label>
            </div>

            <Input
              {...form.register('searchPhrase')}
              className="flex-1 min-w-[200px] sm:max-w-[300px]"
              placeholder="Wyszukaj postać"
            />

            <Button className="grid-span-2 w-fit ml-auto sm:ml-0">
              <Filter className="w-4 h-4 mr-4" />
              Filtruj
            </Button>
          </form>
        </CardContent>
      </Card>

      {!data?.pages.length ? (
        <Alert>
          <CircleSlash className="h-4 w-4" />
          <AlertTitle>Nie znaleziono postaci!</AlertTitle>
          <AlertDescription>
            Prawdopodobnie nie stworzyłeś jeszcze żadnej postaci! Zrób to już teraz i rozpocznij
            swoją przygodę w świecie Vibe RolePlay!
          </AlertDescription>
        </Alert>
      ) : (
        <InfiniteScroll
          dataLength={data?.pages.length || 0}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={
            <p className="text-muted-foreground text-center w-full col-span-full">Ładowanie....</p>
          }
          endMessage={
            <p className="text-muted-foreground text-center w-full col-span-full">
              Nie masz więcej postaci do załadowania.
            </p>
          }
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
        >
          {data?.pages.map((x) => (
            <>
              {x.data.data.map((y) => (
                <CharacterListItem key={y.id} {...y} />
              ))}
            </>
          ))}
        </InfiniteScroll>
      )}
    </>
  );
};
