import DarkModeCard from '@/components/cards/darkModeCard';
import DiscordCard from '@/components/cards/discordCard';
import EmailCard from '@/components/cards/emailCard';
import ExperienceCard from '@/components/cards/experienceCard';
import GitCard from '@/components/cards/gitCard';
import IconsCard from '@/components/cards/iconsCard';
import LanguageCard from '@/components/cards/languageCard'
import LinkedInCard from '@/components/cards/linkedInCard';
import ProfileCard from '@/components/cards/profileCard'
import ProjectsCard from '@/components/cards/projectsCard';
import { ThemeToggle } from '@/components/ui/theme-toggle'
interface SearchParams {
  searchParams: {
    lang: string;
  }
}

export default function Home({ searchParams }: SearchParams) {
  const language = searchParams.lang || "ES"
  return <main>
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
      <DiscordCard />
      <div className="col-span-2 bento_cards"></div>
      <div className="bento_cards"></div>
      <div className="col-span-2 bento_cards"></div>
      <div className="bento_cards"></div>
      <div className="bento_cards"></div>
    </div>
  </main>
}
