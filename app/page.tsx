import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'

export default function Home() {
	return (
		<div className="flex flex-col gap-20 pb-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
			<Hero />
			{/* <Features /> */}
			<Testimonials />
			{/* <Pricing /> */}
		</div>
	)
}
