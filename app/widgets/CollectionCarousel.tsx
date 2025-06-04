import {ComenchiImage} from '@comenchi/shop'
import type {Collection} from '@comenchi/shop-sdk'
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@comenchi/ui'
import {Link} from 'react-router'

interface CollectionCarouselProps {
  collections: Collection[]
  title: string
}

export function CollectionCarousel({
  collections,
  title,
}: CollectionCarouselProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {collections.map((collection) => (
            <CarouselItem
              key={collection.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 hover:scale-110 transition-all">
                    <Link
                      to={`/collection/${collection.id}`}
                      className="w-full"
                    >
                      <div className="relative h-64 w-full mb-4 overflow-hidden">
                        <ComenchiImage
                          asset={collection?.featuredAsset!}
                          className="rounded-md"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {collection.description}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
