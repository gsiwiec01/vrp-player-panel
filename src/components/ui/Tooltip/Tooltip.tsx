import { Provider, Root } from '@radix-ui/react-tooltip';
import type {
  TooltipProps as PrimitiveTooltipProps,
  TooltipProviderProps,
} from '@radix-ui/react-tooltip';

type TooltipProps = TooltipProviderProps & PrimitiveTooltipProps;

export const Tooltip = ({
  delayDuration,
  skipDelayDuration,
  disableHoverableContent,
  ...rootParams
}: TooltipProps) => (
  <Provider
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
    disableHoverableContent={disableHoverableContent}
  >
    <Root {...rootParams} />
  </Provider>
);
