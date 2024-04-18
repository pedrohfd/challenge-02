import { CartPin } from '@/assets/icon/cart-pin'
import { DollarIcon } from '@/assets/icon/dollar'
import { TrashIcon } from '@/assets/icon/trash'
import { Input } from '@/components/input'
import { InputNumber } from '@/components/input-number'
import { Toggle } from '@/components/toggle'
import { toast } from 'sonner'
import { useCartController } from './controller'
import { formatToCEP } from 'brazilian-values'

export const Cart = () => {
  const {
    cart,
    formatToCurrency,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveFromCart,
    cep,
    setCep,
    address,
    setAddress,
    handleBuyProducts,
  } = useCartController()

  return (
    <div className="flex h-header items-start justify-between bg-base-surface px-40">
      <section>
        <h2 className="font-baloo text-lg font-bold text-base-subtitle">
          Complete seu pedido
        </h2>

        <div className="mt-4 w-[40rem] rounded-md bg-base-card p-10">
          <span className="flex items-center gap-2">
            <CartPin />

            <p className="font-roboto text-base font-normal text-base-subtitle">
              Endereço de Entrega
            </p>
          </span>

          <p className="mb-8 ml-8 mt-1 font-roboto text-sm font-normal text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </p>

          <section className="flex flex-col gap-4">
            <Input
              placeholder="CEP"
              className="w-48"
              value={formatToCEP(cep)}
              onChange={(e) => setCep(e.target.value)}
            />

            <Input
              placeholder="Rua"
              className="w-full"
              value={address?.logradouro}
              onChange={(e) =>
                setAddress((prevState) => {
                  if (!prevState) return

                  return { ...prevState, logradouro: e.target.value }
                })
              }
            />

            <span className="flex items-center gap-3">
              <Input placeholder="Número" className="w-[12.5rem]" />

              <span className="flex w-full items-center justify-between border border-base-button bg-base-input pr-3">
                <Input placeholder="Complemento" className="w-full border-0" />

                <p className="font-roboto text-xs font-normal italic text-base-label">
                  Opcional
                </p>
              </span>
            </span>

            <span className="flex items-center gap-3">
              <Input
                placeholder="Bairro"
                className="w-[12.5rem]"
                value={address?.bairro}
                onChange={(e) =>
                  setAddress((prevState) => {
                    if (!prevState) return

                    return { ...prevState, bairro: e.target.value }
                  })
                }
              />

              <Input
                placeholder="Cidade"
                className="w-full"
                value={address?.localidade}
                onChange={(e) =>
                  setAddress((prevState) => {
                    if (!prevState) return

                    return { ...prevState, localidade: e.target.value }
                  })
                }
              />

              <Input
                placeholder="UF"
                className="w-[3.75rem]"
                value={address?.uf}
                onChange={(e) =>
                  setAddress((prevState) => {
                    if (!prevState) return

                    return { ...prevState, uf: e.target.value }
                  })
                }
              />
            </span>
          </section>
        </div>

        <div className="mt-4 w-[40rem] rounded-md bg-base-card p-10">
          <span className="flex items-center gap-2">
            <DollarIcon />

            <p className="font-roboto text-base font-normal text-base-subtitle">
              Pagamento
            </p>
          </span>

          <p className="mb-8 ml-[1.85rem] mt-1 font-roboto text-sm font-normal text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <Toggle />
        </div>
      </section>

      <section>
        <h2 className="font-baloo text-lg font-bold text-base-subtitle">
          Cafés selecionados
        </h2>

        <div className="mt-4 flex w-[28rem] flex-col gap-6 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-base-card p-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-start border-b border-base-button pb-6"
            >
              <img
                src={item.image[0]}
                alt="foto café"
                className="mr-5 size-16"
              />

              <span className="flex flex-col gap-2">
                <p className="font-roboto text-base font-normal text-base-subtitle">
                  {item.name}
                </p>

                <span className="flex items-center gap-2">
                  <InputNumber
                    coffeeQuantity={item.quantity}
                    increaseFn={() => handleIncreaseQuantity(item.id)}
                    decreaseFn={() =>
                      handleDecreaseQuantity(item.id, item.quantity)
                    }
                  />

                  <button
                    onClick={() =>
                      toast('Deseja remover o item do carrinho?', {
                        action: {
                          label: 'Confirmar',
                          onClick: () => handleRemoveFromCart(item.id),
                        },
                        actionButtonStyle: {
                          backgroundColor: '#F43f5e',
                          fontFamily: 'Roboto',
                          fontWeight: 'bold',
                        },
                        cancel: {
                          label: 'Cancelar',
                          onClick: () => {
                            toast.dismiss()
                          },
                        },
                        cancelButtonStyle: {
                          backgroundColor: 'transparent',
                          color: '#F43f5e',
                          fontFamily: 'Roboto',
                          fontWeight: 'bold',
                        },
                      })
                    }
                    className="group flex h-[2.375rem] items-center justify-center gap-1 rounded-md bg-base-button px-2 font-roboto text-xs font-normal uppercase text-base-text transition-colors hover:bg-base-hover hover:text-base-subtitle"
                  >
                    <TrashIcon className="size-4 text-violet-default transition-colors group-hover:text-violet-strong" />
                    Remover
                  </button>
                </span>
              </span>

              <p className="ml-auto font-roboto text-base font-bold text-base-text">
                {formatToCurrency(item.amount * item.quantity)}
              </p>
            </div>
          ))}

          <section className="flex flex-col gap-3">
            <span className="flex items-center justify-between">
              <p className="font-roboto text-sm font-normal text-base-text">
                Total de itens
              </p>

              <p className="font-roboto text-base font-normal text-base-text">
                {formatToCurrency(
                  cart.reduce(
                    (acc, item) => acc + item.amount * item.quantity,
                    0,
                  ),
                )}
              </p>
            </span>

            <span className="flex items-center justify-between">
              <p className="font-roboto text-sm font-normal text-base-text">
                Entrega
              </p>

              <p className="font-roboto text-base font-normal text-base-text">
                {formatToCurrency(3.5)}
              </p>
            </span>

            <span className="flex items-center justify-between">
              <p className="font-roboto text-xl font-bold text-base-subtitle">
                Total
              </p>

              <p className="font-roboto text-xl font-bold text-base-subtitle">
                {formatToCurrency(
                  cart.reduce(
                    (acc, item) => acc + item.amount * item.quantity,
                    0,
                  ) + 3.5,
                )}
              </p>
            </span>
          </section>

          <button
            onClick={handleBuyProducts}
            className="flex h-[2.875rem] w-full items-center justify-center rounded-md bg-yellow-default px-2 py-3 font-roboto text-sm font-bold uppercase text-base-white transition-colors hover:bg-yellow-strong"
          >
            confirmar pedido
          </button>
        </div>
      </section>
    </div>
  )
}
