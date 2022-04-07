import tw from 'twin.macro';

const BannerText: React.FC = () => {
    return (
        <>
            <div tw="flex justify-center flex-col text-center mt-0 md:mt-14">
                <div tw="text-3xl sm:text-4xl md:text-6xl text-white font-bold mx-2 sm:mx-8 md:mx-20 max-w-2xl">
                    Unlimited movies, TV shows, and more.
                </div>
                <div tw="text-lg md:text-2xl text-white font-medium mx-2 sm:mx-8 md:mx-20 max-w-2xl px-0 py-4 md:px-20 ">
                    Watch anywhere. Cancel anytime.
                </div>
            </div>
        </>
    );
};

export default BannerText;
