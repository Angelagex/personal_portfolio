import { useTranslations } from 'next-intl';
import { FaHandSparkles } from 'react-icons/fa';

export default function ProfileCard({ theme }: { theme: string }) {
    const t = useTranslations('Profile');
    return (
        <article className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain"} relative z-70 col-span-3 h-80 md:h-auto md:aspect-auto md:row-span-2 rounded-3xl overflow-hidden flex justify-center items-center p-6`}>
            <div className="h-full md:w-[65%] absolute top-0 left-0 p-8 pt-16 flex flex-col justify-start md:justify-end md:pb-12">
                    <h1 className="interactable title text-4xl lg:text-5xl font-bold mb-4 md:mb-5 font-raleway">
                        {t('title', { name: "Angel Agelvis" })}
                        <FaHandSparkles className="text-red-100 inline" />
                    </h1>

                <p className="text-sm md:text-base lg:text-xl md:pb-2">{t('body')}</p>
                <p className="text-sm md:text-base lg:text-xl">{t('footer')}</p>
            </div>
            <div className="w-1/3"></div>
        </article>
    );
}