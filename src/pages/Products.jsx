import Button from '../components/Button.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CTASection from '../components/CTASection.jsx'

const categories = [
  {
    index: '01',
    title: 'Desk & Workspace',
    description: 'Organizers, stands, holders and productivity accessories.',
  },
  {
    index: '02',
    title: 'Home & Lifestyle',
    description: 'Useful products designed to make everyday life easier.',
  },
  {
    index: '03',
    title: 'Custom Products',
    description: 'Personalized and made-to-order products.',
  },
  {
    index: '04',
    title: 'Hobby & Fun',
    description: 'Creative, functional and interesting 3D-printed objects.',
  },
]

const products = [
  {
    name: 'Modular Desk Organizer',
    description: 'Stackable trays that snap together to fit your desk layout.',
    price: '₹ 000',
    imagePath: '/images/product-01.jpg',
  },
  {
    name: 'Magnetic Cable Holder',
    description: 'Keeps charging cables in place and off your desk.',
    price: '₹ 000',
    imagePath: '/images/product-02.jpg',
  },
  {
    name: 'Phone Stand',
    description: 'Adjustable-angle stand for calls, videos and typing.',
    price: '₹ 000',
    imagePath: '/images/product-03.jpg',
  },
  {
    name: 'Key & Wallet Organizer',
    description: 'A compact tray that keeps everyday carry in one place.',
    price: '₹ 000',
    imagePath: '/images/product-04.jpg',
  },
  {
    name: 'Desk Mechanical Toy',
    description: 'A small kinetic fidget piece for your desk.',
    price: '₹ 000',
    imagePath: '/images/product-05.jpg',
  },
  {
    name: 'Custom Name Plate',
    description: 'Personalized name plate for desks or doors.',
    price: '₹ 000',
    imagePath: '/images/product-06.jpg',
  },
]

const features = [
  {
    title: 'Designed With Purpose',
    description: 'We focus on products that solve real problems.',
  },
  {
    title: 'Made On Demand',
    description: 'Less waste. More flexibility.',
  },
  {
    title: 'Customizable',
    description: 'Modify products according to your needs.',
  },
  {
    title: 'Locally Built',
    description: 'Designed and manufactured by BUILDERS 3D.',
  },
]

export default function Products() {
  return (
    <div className="animate-fadeUp">
      {/* HERO */}
      <section className="bp-grid relative overflow-hidden bg-black text-cream">
        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow mb-4">BUILDERS 3D</p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Designed to be useful.
              <br />
              <span className="text-orange">Built to be different.</span>
            </h1>
            <span className="build-line mt-6 w-20 animate-drawLine" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel">
              Discover thoughtfully designed 3D-printed products made for everyday life,
              workspaces, hobbies and more.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#featured-products" variant="primary">
                Explore Products
              </Button>
              <Button href="#custom-print" variant="outlineDark">
                Custom Order
              </Button>
            </div>
          </div>

          <div className="viewport-corners">
            <ImagePlaceholder
              label="ADD HERO / LIFESTYLE IMAGE"
              path="/images/products-hero.jpg"
              ratio="aspect-[4/3]"
              dark
            />
          </div>
        </div>
      </section>

      {/* WHAT WE MAKE */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="What We Make"
          title="Four categories. One workshop."
          description="Everything we print falls into one of these groups — each shaped by real use, not just what's easy to make."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <FeatureCard key={c.index} index={c.index} title={c.title} description={c.description} />
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured-products" className="border-y border-black/10 bg-black/[0.02] py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Products"
            title="A first look at what we make"
            description="Demo listings shown below — swap in your real products, photos and pricing. See the README for exactly where."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUILDERS 3D */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader eyebrow="Why Builders 3D" title="Built around how you'll actually use it" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

      {/* CUSTOM PRINT CTA */}
      <div id="custom-print">
        <CTASection
          eyebrow="Custom Print"
          title="Have an idea of your own?"
          description="Send us your design and we'll turn it into a physical product."
        >
          <Button href="mailto:hello@builders3d.in" variant="primary">
            Get a Custom Print
          </Button>
        </CTASection>
      </div>
    </div>
  )
}
