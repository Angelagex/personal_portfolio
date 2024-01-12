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
      <ProfileCard key={theme} theme={theme}/>
      <LanguageCard language={language}/>
      <DarkModeCard key={theme} theme={theme}/>
      <LinkedInCard key={theme} theme={theme}/>
      <EmailCard key={theme} theme={theme}/>
      <ProjectsCard key={theme} theme={theme}/>
      <GitCard key={theme} theme={theme}/>
      <ExperienceCard key={theme} theme={theme}/>
      <IconsCard key={theme} theme={theme}/>
      <SpotifyCard key={theme} theme={theme}/>
      <DiscordCard key={theme} theme={theme}/>
      <MlbbCard key={theme} theme={theme}/>
      <HdvCard key={theme} theme={theme}/>
      <WeatherCard key={theme} theme={theme}/>
    </div>
  </main>
}
