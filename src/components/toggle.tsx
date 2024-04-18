import { CreditIcon } from '@/assets/icon/credit'
import { DebitIcon } from '@/assets/icon/debit'
import { MoneyIcon } from '@/assets/icon/money'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { Dispatch, SetStateAction } from 'react'

interface ToggleProps {
  selectPaymentType: Dispatch<SetStateAction<string>>
}

export const Toggle = ({ selectPaymentType }: ToggleProps) => {
  return (
    <ToggleGroupPrimitive.Root
      type="single"
      className="flex items-center gap-3"
      onValueChange={selectPaymentType}
    >
      <ToggleGroupPrimitive.Item
        value="credit"
        className="flex items-center gap-3 rounded-md border border-base-button bg-base-button p-4 font-roboto text-xs font-normal uppercase text-base-text transition-colors hover:bg-base-hover data-[state=on]:border-violet-default data-[state=on]:bg-violet-weak"
      >
        <CreditIcon className="size-4" />
        Cartão de crédito
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item
        value="debit"
        className="flex items-center gap-3 rounded-md border border-base-button bg-base-button p-4 font-roboto text-xs font-normal uppercase text-base-text transition-colors hover:bg-base-hover data-[state=on]:border-violet-default data-[state=on]:bg-violet-weak"
      >
        <DebitIcon className="size-4" />
        Cartão de débito
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item
        value="money"
        className="flex items-center gap-3 rounded-md border border-base-button bg-base-button p-4 font-roboto text-xs font-normal uppercase text-base-text transition-colors hover:bg-base-hover data-[state=on]:border-violet-default data-[state=on]:bg-violet-weak"
      >
        <MoneyIcon className="size-4" />
        Dinheiro
      </ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  )
}
