import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "10 essential Gen Alpha words",
      "Basic quiz functionality",
      "Progress tracking",
      "Community support",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
  {
    name: "Premium",
    id: "tier-premium",
    price: "$9.99",
    description: "For parents who want to stay connected",
    features: [
      "Everything in Free",
      "Full word library access",
      "Regular content updates",
      "Advanced quiz modes",
      "Detailed progress analytics",
      "Priority support",
    ],
    cta: "Get Premium",
    mostPopular: true,
  },
]

export function Pricing() {
  return (
    <section className="container py-8" id="pricing">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Choose the plan that best fits your needs. Start for free and upgrade anytime.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
        {tiers.map((tier) => (
          <Card
            key={tier.id}
            className={tier.mostPopular ? "border-primary" : undefined}
          >
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{tier.price}</div>
              <div className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={tier.mostPopular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}