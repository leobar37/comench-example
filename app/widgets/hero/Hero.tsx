import {Button} from '@comenchi/ui'
import {ArrowRight} from 'lucide-react'
import {ComenchiImage} from '@comenchi/ui'
import {defineProps, defineWidget, fields, getConfig} from '@comenchi/admin'
import {Asset, Collection} from '@comenchi/admin-sdk'

type Props = {
  titleOne: string
  titleTwo: string
  paragraph: string
  collection: Collection
  buttonText: string
  image: Asset
}

export function HeroSection(props: Props) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white max-w-6xl mx-auto">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                {props.titleOne}
                <span className="block text-primary">{props.titleTwo}</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground max-w-md">
                {props.paragraph}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg"
              >
                {props.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-gray-300"
              >
                {props?.collection?.name}
              </Button>
            </div>
          </div>
          <div className="relative">
            <ComenchiImage
              asset={props.image}
              className="object-cover rounded-xl"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

getConfig().widgets.addWidgets(
  defineWidget({
    code: 'simple-hero',
    name: 'Simple Hero',
    component: HeroSection,
    config: defineProps({
      titleOne: fields.text(),
      titleTwo: fields.text(),
      paragraph: fields.text({
        textArea: true,
      }),
      collection: fields.collection({
        includeProducts: false,
        label: 'Collección',
        multi: false,
      }),
      buttonText: fields.text(),
      image: fields.image({
        label: 'Imagen',
      }),
    }),
  }),
)
