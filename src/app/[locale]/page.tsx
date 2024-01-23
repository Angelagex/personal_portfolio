import DarkModeCard from '@/components/cards/darkModeCard';
import DiscordCard from '@/components/cards/discordCard';
import EmailCard from '@/components/cards/emailCard';
import ExperienceCard from '@/components/cards/experienceCard';
import GithubCard from '@/components/cards/githubCard';
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
    <VantaBackground key={theme} theme={theme} />
    <Pointer />
    <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 h-min max-h-fit relative z-20 sm:px-0 p-2">
      <ProfileCard theme={theme} />
      <LanguageCard theme={theme} />
      <DarkModeCard theme={theme} />
      <LinkedInCard theme={theme} />
      <EmailCard theme={theme} />
      <ProjectsCard theme={theme} title={tProjects("title")} content={tProjects("content")} />
      <GithubCard theme={theme} />
      <ExperienceCard theme={theme} />
      <MlbbCard theme={theme} />
      <SpotifyCard theme={theme} title={tSpotify("title")} />
      <IconsCard theme={theme} />
      <HdvCard theme={theme} />
      <WeatherCard theme={theme} />
      <DiscordCard theme={theme} />
    </div>
  </main>
}
