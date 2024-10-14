import { PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

export type Action = () => void

type Props = {
  Icon: React.ComponentType
  action: Action
} & ButtonProps

const Action = ({ action, Icon, ...props }: Props) => <Button variant='outline' onClick={action} {...props}><Icon /></Button>

const Root = ({ children, tooltip }: PropsWithChildren<{ tooltip: string }>) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
}

const ActionButton = {
  Root: Root,
  Action: Action,
};

export { ActionButton };
