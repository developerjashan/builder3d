import Button from '../components/Button.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTASection from '../components/CTASection.jsx'

const builds = [
  {
    title: 'Engineering Projects',
    description: 'Custom components and working models for academic projects.',
  },
  {
    title: 'Drones & UAVs',
    description: 'Custom mounts, brackets, enclosures and structural components.',
  },
  {
    title: 'Robotics',
    description: 'Mechanical components, housings, joints and prototypes.',
  },
  {
    title: 'RC & Aeromodeling',
    description: 'Custom parts and functional components for RC projects.',
  },
  {
    title: 'Final Year Projects',
    description: 'Prototype parts, models and custom mechanical components.',
  },
  {
    title: 'Competition Teams',
    description: 'Rapid prototyping for college competitions and engineering teams.',
  },
]

const flow = ['Idea', 'CAD / Drawing', 'Design Review', '3D Print', 'Test', 'Final Part']

const gallery = [
  {
    name: 'UAV Payload Mount',
    description: 'A demo listing — swap in your project photo and details.',
    category: 'Drones',
    imagePath: '/images/project-01.jpg',
  },
  {
    name: 'Robotic Arm Component',
    description: 'A demo listing — swap in your project photo and details.',
    category: 'Robotics',
    imagePath: '/images/project-02.jpg',
  },
  {
    name: 'RC Aircraft Part',
    description: 'A demo listing — swap in your project photo and details.',
    category: 'RC / Aero',
    imagePath: '/images/project-03.jpg',
  },
  {
    name: 'Mechanical Prototype',
    description: 'A demo listing — swap in your project photo and details.',
    category: 'Prototype',
    imagePath: '/images/project-04.jpg',
  },
  {
    name: 'Engineering Model',
    description: 'A demo listing — swap in your project photo and details.',
    category: 'Academic',
    imagePath: '/images/project-05.jpg',
  },
  {
    name: 'Custom Enclosure',
    description: 'A demo listing — swap in your project photo and details.',
    category: 'Electronics',
    imagePath: '/images/project-06.jpg',
  },
]

export default function Projects() {
  return (
    <div className="animate-fadeUp">
      {/* HERO */}
      <section className="bp-grid relative overflow-hidden bg-black text-cream">
        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow mb-4">Projects</p>
            <h1 className="text-4xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Your project.
              <br />
              <span className="text-orange">Built for real.</span>
            </h1>
            <span className="build-line mt-6 w-20 animate-drawLine" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel">
              From a CAD model on your laptop to a physical prototype in your hands.
            </p>
            <div className="mt-9">
              <Button href="#gallery" variant="primary">
                Start Your Project
              </Button>
            </div>
          </div>

          <div className="viewport-corners">
            <ImagePlaceholder
              label="ADD PROJECT IMAGE"
              path="/images/projects-hero.jpg"
              ratio="aspect-[4/3]"
              dark
            />
          </div>
        </div>
      </section>

      {/* WHAT WE CAN BUILD */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader eyebrow="What We Can Build" title="Built for students, makers and teams" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map((b) => (
            <FeatureCard key={b.title} title={b.title} description={b.description} />
          ))}
        </div>
      </section>

      {/* FROM IDEA TO PART */}
      <section className="border-y border-black/10 bg-black/[0.02] py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="From Idea to Part" title="Six steps, one clear path" />
          <div className="mt-14 flex flex-col gap-0 md:flex-row md:items-center md:gap-0">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-3 text-center md:flex-1">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-orange bg-white font-mono text-sm font-semibold text-orange">
                    {i + 1}
                  </span>
                  <span className="font-display text-sm font-bold text-black">{step}</span>
                </div>
                {i < flow.length - 1 && (
                  <span className="mx-2 hidden h-px flex-1 bg-orange/30 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEED CAD DESIGN */}
      <CTASection
        eyebrow="Need CAD Design?"
        title="Don't have a CAD model?"
        description="No problem. Tell us what you want to build. We can help turn your concept into a printable design."
      >
        <Button href="mailto:hello@builders3d.in" variant="primary">
          Discuss Your Idea
        </Button>
      </CTASection>

      {/* GALLERY */}
      <section id="gallery" className="container-px mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="Project Gallery"
          title="A sample of what's possible"
          description="Demo listings shown below — replace with your own project photos as they're finished."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <ProjectCard key={g.name} {...g} />
          ))}
        </div>
      </section>
    </div>
  )
}
