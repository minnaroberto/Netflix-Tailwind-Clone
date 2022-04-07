import Image from 'next/image';
import tw from 'twin.macro';
import Divider from 'components/Divider/Divider';
import BannerText from 'page-components/BannerText/BannerText';
import EmailForm from 'components/EmailForm/EmailForm';

const Banner: React.FC = () => {
    return (
        <>
            <div>
                <div tw="relative h-1/2 md:h-100 overflow-hidden">
                    <div tw="absolute z-10 flex w-full h-full"></div>
                    <div tw="flex relative justify-center items-center z-10 mt-32 font-netflixFont">
                        <div tw="w-full flex justify-center flex-col">
                            <div tw="justify-center flex">
                                <BannerText />
                            </div>
                            <div tw="justify-center flex">
                                <EmailForm />
                            </div>
                        </div>
                    </div>

                    <div tw="absolute top-0 right-0 block w-full h-full  z-0 opacity-50 ">
                        <Image
                            tw="object-cover h-full min-w-full"
                            src="/netflixHomeBanner.jpg"
                            alt="Neflix Banner"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
};

export default Banner;
