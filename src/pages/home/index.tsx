import { BoxIcon } from '@/assets/icon/box'
import { CartIcon } from '@/assets/icon/cart'
import { MugIcon } from '@/assets/icon/mug'
import { TimerIcon } from '@/assets/icon/timer'
import BackgroundImage from '@/assets/image/background.svg'
import HomeIllustration from '@/assets/image/home-illustration.svg'
import { useHomeController } from './controller'
import { ProductCard } from '@/components/product-card'

export function Home() {
  const { coffees } = useHomeController()

  return (
    <div className="bg-base-surface pb-36">
      <section
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        className="flex h-[34rem] w-full justify-between bg-cover bg-center bg-no-repeat px-40 py-24"
      >
        <div>
          <h1 className="w-[38rem] font-baloo text-5xl font-extrabold leading-tight text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4 w-[38rem] font-roboto text-xl font-normal text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora
          </p>

          <section className="mt-16 grid grid-cols-2 gap-5">
            <section className="flex items-center gap-3">
              <span className="flex items-center justify-center rounded-full bg-yellow-strong p-2 text-base-surface">
                <CartIcon className="size-4" />
              </span>

              <p className="font-roboto text-base font-normal text-base-text">
                Compra simples e segura
              </p>
            </section>

            <section className="flex items-center gap-3">
              <span className="flex items-center justify-center rounded-full bg-base-text p-2 text-base-surface">
                <BoxIcon className="size-4" />
              </span>

              <p className="font-roboto text-base font-normal text-base-text">
                Embalagem mantém o café intacto
              </p>
            </section>

            <section className="flex items-center gap-3">
              <span className="flex items-center justify-center rounded-full bg-yellow-default p-2 text-base-surface">
                <TimerIcon className="size-4" />
              </span>

              <p className="font-roboto text-base font-normal text-base-text">
                Entrega rápida e rastreada
              </p>
            </section>

            <section className="flex items-center gap-3">
              <span className="flex items-center justify-center rounded-full bg-violet-default p-2 text-base-surface">
                <MugIcon className="size-4" />
              </span>

              <p className="font-roboto text-base font-normal text-base-text">
                O café chega fresquinho até você
              </p>
            </section>
          </section>
        </div>

        <img src={HomeIllustration} alt="copo de café" />
      </section>

      <section className="px-40">
        <h1 className="mb-14 font-baloo text-[2rem] font-extrabold text-base-subtitle">
          Nossos cafés
        </h1>

        <div className="grid grid-cols-4 gap-8">
          {coffees.map((coffee) => (
            <ProductCard key={coffee.name} {...coffee} />
          ))}
        </div>
      </section>
    </div>
  )
}
