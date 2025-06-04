import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@comenchi/ui'
import type {FC} from 'react'
import {ProductCard} from '@comenchi/shop'
import {Collection} from '@comenchi/shop-sdk'

type CollectionProductsWidgetProps = {
  collection: Collection
  title?: string
}

export const CollectionProductsWidget: FC<CollectionProductsWidgetProps> = ({
  collection,
  title,
}) => {
  if (!collection?.products?.length) {
    return null
  }

  return (
    <div className="overflow-hidden pb-5 px-2 max-w-6xl mx-auto mt-4">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <div className="flex justify-between">
          <h3 className="text-xl text-foreground font-semibold ml-3 mb-4 lg:text-3xl lg:ml-0 lg:mb-4">
            {title ?? collection.name}
          </h3>
          <div className="flex space-x-2">
            <CarouselPrevious asButton className="rounded-full" />
            <CarouselNext asButton className="rounded-full" />
          </div>
        </div>
        <CarouselContent>
          {(collection.products as any[]).map((product, id) => {
            return (
              <CarouselItem key={id} className="basis-[60%] md:basis-80">
                <ProductCard className="pl-1" product={product as any} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
