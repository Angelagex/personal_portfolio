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
import { useTranslations } from 'next-intl';

export interface SearchParams {
  searchParams: {
    lang: string;
    theme: string;
  }
}

export default function Home({ searchParams }: SearchParams) {
  const theme = searchParams.theme || "dark"
  const tProjects = useTranslations('Projects');
  const tSpotify = useTranslations('Spotify');
  return <main>
    <Pointer />
    <VantaBackground key={theme} theme={theme} />
    <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
      <ProfileCard theme={theme} />
      <LanguageCard theme={theme} />
      <DarkModeCard theme={theme} />
      <LinkedInCard theme={theme} />
      <EmailCard theme={theme} />
      <ProjectsCard theme={theme} title={tProjects("title")} content={tProjects("content")} />
      <GitCard theme={theme} />
      <ExperienceCard theme={theme} />
      <IconsCard theme={theme} />
      <SpotifyCard theme={theme} title={tSpotify("title")}/>
      <DiscordCard theme={theme} />
      <MlbbCard theme={theme} />
      <HdvCard theme={theme} />
      <WeatherCard theme={theme} />
    </div>
  </main>
}
