import Button from '../components/Button.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import {
  IconLayers,
  IconWrench,
  IconGear,
  IconBox,
  IconStack,
  IconTarget,
} from '../components/icons.jsx'

const solutions = [
  {
    icon: <IconLayers />,
    title: 'Prototyping',
    description: 'Rapidly test designs before committing to expensive manufacturing.',
  },
  {
    icon: <IconWrench />,
    title: 'Jigs & Fixtures',
    description: 'Custom tools and production aids designed for your workflow.',
  },
  {
    icon: <IconGear />,
    title: 'Replacement Parts',
    description: 'Rapidly produce low-volume or hard-to-source plastic components.',
  },
  {
    icon: <IconBox />,
    title: 'Functional Components',
    description: 'Custom parts for machines, equipment and industrial applications.',
  },
  {
    icon: <IconStack />,
    title: 'Production Aids',
    description: 'Improve assembly, handling and manufacturing processes.',
  },
  {
    icon: <IconTarget />,
    title: 'Small-Batch Manufacturing',
    description: 'Produce low-volume components without expensive tooling.',
  },
]

const process = [
  {
    index: '01',
    title: 'Send Your Requirement',
    description: 'Share your CAD file, drawing, dimensions or even a physical part.',
  },
  {
    index: '02',
    title: 'Design & Engineering',
    description: 'We optimize the part for 3D printing and discuss material/application requirements.',
  },
  {
    index: '03',
    title: 'Prototype & Print',
    description: 'The component is manufactured using the appropriate printing process and material.',
  },
  {
    index: '04',
    title: 'Test & Deliver',
    description: 'Review, iterate and receive the finished component.',
  },
]

const industries = [
  'Automotive',
  'Bicycle & Components',
  'Machinery',
  'Agriculture',
  'Textile Machinery',
  'Robotics',
  'Electronics',
  'General Manufacturing',
]

export default function Industrial() {
  return (
    <div className="animate-fadeUp bg-black text-cream">
      {/* HERO */}
      <section className="bp-grid-dark relative overflow-hidden border-b border-gray-line">
        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow mb-4">Industrial</p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              3D Printing
              <br />
              For Industry
            </h1>
            <span className="build-line mt-6 w-20 animate-drawLine" />
            <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-steel">
              Reduce lead times. Prototype faster. Build smarter.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-steel/80">
              From functional prototypes to jigs, fixtures and replacement components,
              BUILDERS 3D helps manufacturers turn digital designs into physical solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#enquiry" variant="primary">
                Request a Quote
              </Button>
              <Button href="mailto:hello@builders3d.in" variant="outlineDark">
                Talk to Us
              </Button>
            </div>
          </div>

          <div className="viewport-corners">
            <ImagePlaceholder
              label="ADD INDUSTRIAL IMAGE"
              path="/images/industrial-01.jpg"
              ratio="aspect-[4/3]"
              dark
            />
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Our Industrial Solutions"
          title="Manufacturing support, on demand"
          dark
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-gray-line bg-black-soft py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How We Help Factories"
            title="A straightforward path from request to part"
            dark
          />
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.index} className="relative">
                <span className="font-mono text-3xl font-semibold text-orange/40">
                  {step.index}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{step.description}</p>
                {i < process.length - 1 && (
                  <span className="absolute right-[-20px] top-2 hidden h-px w-10 bg-gray-line md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Industries We Can Serve"
          title="Potential applications across industries such as..."
          description="We're building toward these sectors — this isn't a client list, it's where our process fits well."
          dark
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind}
              className="rounded-md border border-gray-line px-5 py-6 text-center transition-colors hover:border-orange/50"
            >
              <span className="font-mono text-sm text-steel">{ind}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="bp-grid-dark border-t border-gray-line py-20">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Industrial Enquiry"
            title="Have a part in mind?"
            description="Send us your requirement and let's see if we can build it."
            dark
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#enquiry-form" variant="primary">
              Get a Quote
            </Button>
            <Button href="mailto:hello@builders3d.in" variant="outlineDark">
              Send CAD File
            </Button>
          </div>

          <div id="enquiry-form" className="mt-12 rounded-lg border border-gray-line bg-black-soft p-6 sm:p-10">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}
