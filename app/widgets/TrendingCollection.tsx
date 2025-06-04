import {Product} from '@comenchi/admin-sdk'
import {ComenchiImage} from '@comenchi/shop'
import {
  Asset,
  type CollectionWithProducts,
  getProductMapper,
} from '@comenchi/shop-sdk'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@comenchi/ui'
import {ArrowRight} from 'lucide-react'

type Props = {
  collection: CollectionWithProducts
  title: string
  image: Asset
}

export default function TrendingProductsWidget({
  collection,
  title,
  image,
}: Props) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {((collection?.products as Product[]) ?? []).map((product) => {
            const mapper = getProductMapper(product)
            return (
              <Card
                key={product.id}
                className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <ComenchiImage
                      asset={mapper.mainAsset}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {mapper.pricesApi.price}
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full">
                    View Product
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
