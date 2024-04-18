import { cn } from '@/lib/utils'

export const Input = ({
  className,
  ...rest
}: React.ComponentProps<'input'>) => {
  return (
    <input
      type="text"
      className={cn(
        'h-11 rounded-[0.25rem] border border-base-button bg-base-input px-3 font-roboto text-sm font-normal text-base-text outline-none placeholder:text-base-label',
        className,
      )}
      {...rest}
    />
  )
}
