import { MinusIcon } from '@/assets/icon/minus'
import { PlusIcon } from '@/assets/icon/plus'

interface InputNumberProps {
  increaseFn: () => void
  decreaseFn: () => void
  coffeeQuantity: number
}

export const InputNumber = ({
  increaseFn,
  decreaseFn,
  coffeeQuantity,
}: InputNumberProps) => {
  return (
    <div className="flex h-[2.375rem] w-[4.5rem] items-center justify-between rounded-md bg-base-button px-2">
      <button onClick={decreaseFn}>
        <MinusIcon className=" text-violet-default transition-colors hover:text-violet-strong" />
      </button>

      <p className="font-roboto text-base font-normal text-base-title">
        {coffeeQuantity}
      </p>

      <button onClick={increaseFn}>
        <PlusIcon className="text-violet-default transition-colors hover:text-violet-strong" />
      </button>
    </div>
  )
}
