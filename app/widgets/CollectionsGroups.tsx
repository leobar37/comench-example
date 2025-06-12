import {defineProps, defineWidget, fields, getConfig} from '@comenchi/admin'
import {Collection} from '@comenchi/admin-sdk'
import {buttonVariants, ComenchiImage} from '@comenchi/ui'
import {ArrowRight} from 'lucide-react'
import {Link} from 'react-router'

type Props = {
  title: string
  description: string
  categories: Collection[]
}

function CategorySection({categories, title, description}: Props) {
  return (
    <section className="py-16 bg-gray-50 max-w-6xl mx-auto">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-[4/3]'
              }`}
            >
              {category.featuredAsset && (
                <ComenchiImage
                  asset={category.featuredAsset}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 w-full"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-white space-y-4">
                  <div>
                    <h3
                      className={`font-bold ${index === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}
                    >
                      {category.name}
                    </h3>
                    <p
                      className={`opacity-90 ${index === 0 ? 'text-lg' : 'text-base'}`}
                    >
                      {category.description}
                    </p>
                  </div>
                  <Link
                    to={getConfig().routesConfig.routes.toCollection(category)}
                    className={buttonVariants({
                      class: 'bg-white text-black hover:bg-gray-100 w-fit',
                    })}
                  >
                    Explore {category.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

getConfig().widgets.addWidgets(
  defineWidget({
    code: 'collections-groups',
    name: 'Grupo de collecciones',
    component: CategorySection,
    config: defineProps({
      title: fields.text(),
      description: fields.text(),
      categories: fields.collection({
        includeProducts: false,
        label: 'Collecciones',
        multi: true,
      }),
    }),
  }),
)
