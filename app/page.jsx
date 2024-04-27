import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { HomeCoverSection } from "@/components/HomeFeature/homeCoverBanner"
import { HomeCoverHero } from "@/components/HomeFeature/homeCoverHero"
import { HomeFeature1 } from "@/components/HomeFeature/homeFeature1"
import { HomeFeature2 } from "@/components/HomeFeature/homeFeature2"
import { HomeFeature3 } from "@/components/HomeFeature/homeFeature3"
import { Review } from "@/components/HomeFeature/review"
import { Queries } from "@/components/HomeFeature/Accordions/queries"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 drop-shadow-xl">
			<HomeCoverHero />
			<HomeCoverSection />

			<section className="drop-shadow-2xl">
				<HomeFeature1 />
				<HomeFeature2 />
				<HomeFeature3 />
			</section>

			<section>
				<Review />
				<Queries/>
			</section>

		</main>
	);
}
