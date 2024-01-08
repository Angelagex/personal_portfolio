import DarkModeCard from '@/components/cards/darkModeCard';
import DiscordCard from '@/components/cards/discordCard';
import EmailCard from '@/components/cards/emailCard';
import ExperienceCard from '@/components/cards/experienceCard';
import GitCard from '@/components/cards/gitCard';
import HdvCard from '@/components/cards/hdvCard';
import IconsCard from '@/components/cards/iconsCard';
import LanguageCard from '@/components/cards/languageCard'
import LinkedInCard from '@/components/cards/linkedInCard';
import MlbbCard from '@/components/cards/mlbbCard';
import ProfileCard from '@/components/cards/profileCard'
import ProjectsCard from '@/components/cards/projectsCard';
import SpotifyCard from '@/components/cards/spotifyCard';
import WeatherCard from '@/components/cards/weatherCard';
import Pointer from '@/components/ui/pointer';
import VantaBackground from '@/components/ui/vanta.component';

export interface SearchParams {
  searchParams: {
    lang: string;
    theme: string;
  }
}

export default function Home({ searchParams }: SearchParams) {
  const language = searchParams.lang || "ES"
  const theme = searchParams.theme || "dark"

  return <main>
    <Pointer />
    <VantaBackground key={theme} theme={theme}/>
    <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
      <ProfileCard />
      <LanguageCard language={language} />
      <DarkModeCard />
      <LinkedInCard />
      <EmailCard />
      <ProjectsCard />
      <GitCard />
      <ExperienceCard />
      <IconsCard />
      <SpotifyCard />
      <DiscordCard />
      <MlbbCard />
      <HdvCard />
      <WeatherCard />
    </div>
  </main>
}
