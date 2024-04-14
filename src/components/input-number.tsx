import { MinusIcon } from '@/assets/icon/minus'
import { PlusIcon } from '@/assets/icon/plus'
import { useState } from 'react'

export const InputNumber = () => {
  const [value, _setValue] = useState(1)
  return (
    <div className="flex h-[2.375rem] w-[4.5rem] items-center justify-between rounded-md bg-base-button px-2">
      <button>
        <MinusIcon className=" text-violet-default transition-colors hover:text-violet-strong" />
      </button>

      <p className="font-roboto text-base font-normal text-base-title">
        {value}
      </p>

      <button>
        <PlusIcon className="text-violet-default transition-colors hover:text-violet-strong" />
      </button>
    </div>
  )
}
