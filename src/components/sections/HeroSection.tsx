import CtaButton from "../buttons/CtaButton";
import Fade from "../pearls/Fade";
import TextGradient from "../text/TextGradient";
import {useTranslation} from "react-i18next";

export default function HeroSection() {
	const {t} = useTranslation("home");

	return (
		<section className="font-sans relative gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
			<div className="flex  flex-row gap-4 text-5xl justify-center flex-wrap">
				<Fade triggerOnce cascade damping={0.05}>
					{t("hero.title")}
				</Fade>
				<TextGradient>
					{" "}
					<Fade
						triggerOnce
						delay={500}
						className="font-bold"
						cascade
						damping={0.05}>
						{t("hero.titleHighlight")}
					</Fade>
				</TextGradient>
			</div>
			<ul className="gap-2 text-md max-w-lg flex-col flex list-disc pl-10 text-muted-foreground">
				<li>{t("hero.points.0")}</li>
				<li>{t("hero.points.1")}</li>
				<li>{t("hero.points.2")}</li>
				<li className="text-foreground">
					{t("hero.points.3").split(t("hero.highlight")).length > 1 ? (
						<>
							{t("hero.points.3").split(t("hero.highlight"))[0]}
							<span className="font-bold">{t("hero.highlight")}</span>
							{t("hero.points.3")
								.split(t("hero.highlight"))[1]
								.split(t("hero.highlight2")).length > 1 ? (
								<>
									{
										t("hero.points.3")
											.split(t("hero.highlight"))[1]
											.split(t("hero.highlight2"))[0]
									}
									<span className="font-bold">{t("hero.highlight2")}</span>
									{
										t("hero.points.3")
											.split(t("hero.highlight"))[1]
											.split(t("hero.highlight2"))[1]
									}
								</>
							) : (
								t("hero.points.3").split(t("hero.highlight"))[1]
							)}
						</>
					) : (
						t("hero.points.3")
					)}
				</li>
			</ul>
			<Fade delay={5500}>
				<CtaButton />
			</Fade>
		</section>
	);
}
