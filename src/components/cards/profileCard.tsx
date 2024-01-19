import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaHandSparkles } from 'react-icons/fa';
import me from "me.png"

export default function ProfileCard({ theme }: { theme: string }) {
    const t = useTranslations('Profile');
    return (
        <article className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain"} relative z-70 col-span-3 h-80 md:h-auto md:aspect-auto md:row-span-2 rounded-3xl overflow-hidden grid grid-cols-3 xl:grid-cols-5`}>
            <div className="col-span-3 md:col-span-2 xl:col-span-3 h-full  p-8 xl:p-12 pt-14 sm:pt-16 flex flex-col justify-start md:justify-end md:pb-12">
                <h1 className="interactable title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-5 font-raleway z-20">
                    {t('title', { name: "Angel Agelvis" })}
                    <FaHandSparkles className="text-red-100 inline" />
                </h1>

                <p className="text-xs sm:text-sm md:text-base lg:text-xl pb-4 sm:pb-2 xl:text-2xl">{t('body')}</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-xl md:pb-2 xl:text-2xl">{t('footer')}</p>
            </div>
            <div className="col-span-1 xl:col-span-2">
                <Image src={me.src} alt="profileCartoonImage" className="absolute bottom-0 right-0 hidden md:block md:w-72 lg:w-[22rem] xl:w-[28rem] interactable scale-x-[-1] drop-shadow-xl" />
            </div>
        </article>
    );
}