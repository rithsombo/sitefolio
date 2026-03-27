import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Palette,
  Smartphone,
  Zap,
} from "lucide-react"

import { SiteMenu } from "@/components/site-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import { SparklesText } from "@/components/ui/sparkles-text"

import { Marquee } from "@/components/ui/marquee"
import { ReviewCard } from "@/components/review-card"
import { RetroGrid } from "@/components/ui/retro-grid"

const reviews = [
  {
    name: "Sokha",
    username: "@sokha.dev",
    body: "Got my portfolio in 3 days. Super clean and professional.",
    img: "https://avatar.vercel.sh/sokha",
  },
  {
    name: "Malis",
    username: "@malis.design",
    body: "The process was fast, simple, and the final site felt polished.",
    img: "https://avatar.vercel.sh/malis",
  },
  {
    name: "Dara",
    username: "@dara.builds",
    body: "Exactly what I needed to look more professional online.",
    img: "https://avatar.vercel.sh/dara",
  },
]

const howItWorksSteps = [
  {
    title: "Step 1 - Tell us about you",
    description: "Share your work, projects, or idea.",
  },
  {
    title: "Step 2 - We build your site",
    description: "We design and develop your portfolio.",
  },
  {
    title: "Step 3 - You go live",
    description: "Get your website ready in days.",
  },
]

const whyChooseUsItems = [
  {
    title: "Fast delivery",
    description: "In days, not weeks.",
    Icon: Zap,
  },
  {
    title: "Clean, modern design",
    description: "Intentional visuals that feel professional.",
    Icon: Palette,
  },
  {
    title: "Mobile-friendly",
    description: "Built to look sharp on phones and desktops.",
    Icon: Smartphone,
  },
  {
    title: "Built for professionals",
    description: "Designed to present your work with credibility.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "No coding needed",
    description: "You focus on your work. We handle the build.",
    Icon: BadgeCheck,
  },
]

const featuredProjects = [
  {
    title: "Developer Portfolio",
    type: "Personal Brand",
    summary:
      "A sharp one-page portfolio for a frontend developer to showcase projects, stack, and contact details.",
    result: "Launched in 3 days",
    accent: "from-sky-500/30 via-cyan-400/15 to-transparent",
  },
  {
    title: "Designer Showcase",
    type: "Creative Portfolio",
    summary:
      "A visual-first layout built to present branding, UI work, and client case studies in a clean format.",
    result: "Mobile-first redesign",
    accent: "from-amber-500/30 via-orange-400/15 to-transparent",
  },
  {
    title: "Freelancer Landing Page",
    type: "Service Portfolio",
    summary:
      "A conversion-focused site for a freelancer to explain services, build trust, and collect inbound leads.",
    result: "Clear CTA structure",
    accent: "from-emerald-500/30 via-lime-400/15 to-transparent",
  },
]

const testimonials = [
  {
    quote:
      "Got my portfolio in 3 days. Super clean and professional. I finally had something I was confident sending out.",
    name: "Sokha",
    role: "Student Developer",
  },
  {
    quote:
      "The process was simple from start to finish. I shared my work, and the site came back polished, fast, and mobile-friendly.",
    name: "Malis",
    role: "UI Designer",
  },
  {
    quote:
      "I needed a portfolio that looked serious without spending weeks on it. This gave me exactly that.",
    name: "Dara",
    role: "Freelancer",
  },
]

const pricingPlans = [
  {
    name: "Starter",
    description: "A clean one-page portfolio for getting online fast.",
    details: "Perfect for students or first-time portfolios.",
  },
  {
    name: "Pro",
    description:
      "A stronger multi-section portfolio with more polish and structure.",
    details: "Ideal for professionals who want a more refined presence.",
  },
  {
    name: "Custom",
    description:
      "A tailored site built around your goals, content, and workflow.",
    details: "Best for freelancers, creators, or unique project needs.",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const thirdRow = reviews.slice(0, reviews.length / 2)
const fourthRow = reviews.slice(reviews.length / 2)
export default function Page() {
  return (
    <div className="text-foreground">
      <section id="home" className="h-screen scroll-mt-24">
        <div className="flex h-screen items-center justify-center p-6">
          <SiteMenu />
          <ThemeToggle />
          <div className="mx-auto flex h-fit w-full min-w-0 flex-col text-center text-sm leading-loose">
            <SparklesText className="uppercase">Get your personal</SparklesText>
            <SparklesText className="uppercase">portfolio website</SparklesText>
            <div>No coding. No stress. Just results.</div>
          </div>
        </div>
      </section>
      <div className="">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-20">
            <ScrollVelocityRow baseVelocity={20} direction={1}>
              Show your work with a professional portfolio,
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={20} direction={-1}>
              Launch your portfolio in days.
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>

      <section id="work" className="flex h-[755px] items-center px-6 py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
          <div className="text-xs tracking-[0.3em] text-foreground uppercase">
            Our Work
          </div>
          <div>
            <div>
              <div>
                We help individuals turn their ideas and work into a clean,
                professional online presence. Our goal is simple — to create
                portfolio websites that are modern, easy to share, and built to
                make a strong first impression.
              </div>
              <div className="mt-2">
                Whether you’re a student, developer, designer, or freelancer, we
                make the process fast and effortless — so you can focus on your
                work while we handle the rest.
              </div>
            </div>
            <div className="relative mt-4 flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:400px]">
              <div
                className="flex flex-row items-center justify-center gap-4"
                style={{
                  transform:
                    "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                }}
              >
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  className="[--duration:20s]"
                  vertical
                >
                  {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  className="[--duration:20s]"
                  vertical
                >
                  {thirdRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:20s]" vertical>
                  {fourthRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-background"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] text-foreground uppercase">
              How It Works
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Simple, fast, removes friction.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-border bg-background/55 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] text-foreground uppercase">
              Why Choose Us
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Built to earn trust fast.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUsItems.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="flex items-start gap-4 rounded-3xl border border-border bg-background/55 p-6 backdrop-blur-sm"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/80">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-projects" className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] text-foreground uppercase">
              Featured Projects
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A few examples of what we can build for you.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-border bg-background/60 backdrop-blur-sm"
              >
                <div
                  className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div className="absolute inset-5 rounded-[1.5rem] border border-white/10 bg-background/80 p-4 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="size-2.5 rounded-full bg-foreground/20" />
                        <span className="size-2.5 rounded-full bg-foreground/20" />
                        <span className="size-2.5 rounded-full bg-foreground/20" />
                      </div>
                      <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                        Preview
                      </span>
                    </div>
                    <div className="mt-5 space-y-3">
                      <div className="h-4 w-24 rounded-full bg-foreground/12" />
                      <div className="h-10 w-3/4 rounded-2xl bg-foreground/10" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-2xl bg-foreground/8" />
                        <div className="h-16 rounded-2xl bg-foreground/8" />
                        <div className="h-16 rounded-2xl bg-foreground/8" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
                        {project.type}
                      </p>
                      <h3 className="mt-2 text-xl font-medium">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="mt-1 size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="inline-flex rounded-full border border-border px-3 py-1 text-xs tracking-[0.18em] text-foreground/80 uppercase">
                    {project.result}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] text-foreground uppercase">
              Testimonials
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Social proof that makes the offer feel real.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-border bg-background/60 p-6 backdrop-blur-sm"
              >
                <p className="text-base leading-8 text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] text-foreground uppercase">
              Pricing
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Simple options, clear starting points.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className="rounded-[2rem] border border-border bg-background/60 p-6 backdrop-blur-sm"
              >
                <div className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
                  {plan.name}
                </div>
                <p className="mt-4 text-xl font-medium">{plan.description}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {plan.details}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div
        id="final-cta"
        className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-transparent"
      >
        {/* <span className="pointer-events-none z-10 bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent">
        Retro Grid
      </span> */}
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-transparent px-8 py-12 text-center backdrop-blur-sm md:px-12 md:py-16">
          <div className="text-xs tracking-[0.3em] text-foreground uppercase">
            Start Today
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-muted-foreground md:text-6xl">
            Start your portfolio today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Get your website in days, not weeks. Share your work, tell us what
            you need, and let&apos;s build your portfolio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="px-5 text-sm uppercase">
              <a href="#how-it-works">Let&apos;s build your portfolio</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-5 text-sm uppercase"
            >
              <a href="#featured-projects">See recent work</a>
            </Button>
          </div>
        </div>
        <RetroGrid />
      </div>
    </div>
  )
}
