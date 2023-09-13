import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';
import { Button } from '@/components/ui/Button.tsx';
import { Eye, EyeOff } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/Table';
import { moneyFormatter } from '@/utils/formatters.ts';
import { Link } from 'react-router-dom';
import type { CharacterBasicData } from '@/features/characters/constants/types.ts';
import { Sex } from '@/constants/enums/Sex.ts';
import dayjs from 'dayjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleCharacterVisibility } from '@/features/characters/services/characterService.ts';
import { QueryKey } from '@/constants/enums/QueryKey.ts';
import { UserCharacterListResponseDto } from '@/features/characters/constants/dtos.ts';
import { AxiosResponse } from 'axios';

export const CharacterListItem = (data: CharacterBasicData) => {
  const fullName = `${data.name} ${data.surname}`;
  const initials = fullName
    .split(' ')
    .map((x) => x[0])
    .join('')
    .toUpperCase();
  const slag = fullName.toLowerCase().replace(' ', '-');

  const queryClient = useQueryClient();
  const hidingMutation = useMutation({
    mutationFn: toggleCharacterVisibility,
    onSuccess: async () => {
      await queryClient.refetchQueries<AxiosResponse<UserCharacterListResponseDto>>(
        [QueryKey.CharacterList],
        {
          refetchPage: (lastPage) => !!lastPage.data.data.find((x) => x.id === data.id),
        },
      );
    },
  });

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h4 className="leading-[1]">{fullName}</h4>
            <p className="text-xs text-muted-foreground leading-[1]">
              {data.blocked ? 'Postać zablokowana' : 'Postać aktywna'}
            </p>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger>
            <Button size="icon" variant="ghost" onClick={() => hidingMutation.mutate(data.id)}>
              {data.isHidden ? <EyeOff /> : <Eye />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {data.isHidden ? 'Wyłącz widoczność postaci' : 'Włącz widoczność postaci'}
          </TooltipContent>
        </Tooltip>
      </CardHeader>

      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Identyfikator:</TableCell>
              <TableCell className="text-right">{data.id}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Płeć:</TableCell>
              <TableCell className="text-right">
                {data.sex === Sex.Male ? 'Mężczyzna' : 'Kobieta'}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Gotówka w portfelu:</TableCell>
              <TableCell className="text-right">{moneyFormatter(data.money)}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Czas online:</TableCell>
              <TableCell className="text-right">
                {dayjs.duration(data.onlineTime, 'seconds').format('H[h] m[min]')}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter>
        <Button variant="ghost" className="w-full" asChild>
          <Link to={`/characters/${slag}`} state={{ id: data.id }}>
            Zobacz szczegóły
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
