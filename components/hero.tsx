import { Button } from '@/components/ui/button'
import { Brain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
	return (
		<div className="relative">
			<div className="container flex flex-col items-center gap-4 text-center pt-20 md:pt-32">
				<div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center gap-2">
					<Brain className="h-4 w-4" />
					<span>Learn Gen Alpha Slang</span>
				</div>
				<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
					Connect with the Next Generation
				</h1>
				<p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
					Bridge the generation gap with W Aura. Learn and understand modern
					slang to better connect with Gen Alpha. Start with 10 free words and
					level up your communication game.
				</p>
				<div className="flex gap-4">
					<Link href="/quiz">
						<Button size="lg" className="gap-2">
							Start Learning
							<ArrowRight className="h-4 w-4" />
						</Button>
					</Link>
					{/* <Link href="#features">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link> */}
				</div>
			</div>
		</div>
	)
}
