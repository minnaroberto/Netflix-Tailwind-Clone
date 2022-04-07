import tw from 'twin.macro';
import Image from 'next/image';
import Button from 'components/Button/Button';
import LanguageDropdown from 'components/LanguageDropdown/LanguageDropdown';

const Navbar: React.FC = () => {
    return (
        <div tw="absolute inset-0 z-10 mx-1 md:mx-14 h-20 pt-5 flex justify-between ">
            <div tw="pt-2 w-32 md:w-96">
                <Image
                    src="/netflixLogo.png"
                    alt="Neflix Banner"
                    width={176}
                    height={45}
                />
            </div>
            <div tw=" flex flex-row ">
                <div tw="mr-2 md:mr-8 ">
                    <LanguageDropdown />
                </div>
                <div>
                    <Button> Sign In</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
