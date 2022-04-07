import tw from 'twin.macro';
import LanguageDropdown from 'components/LanguageDropdown/LanguageDropdown';

const FooterLinks = [
    'FAQ',
    'Help Center',
    'Account',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Redeem Gift Cards',
    'Buy Gift Cards',
    'Ways to Watch',
    'Terms of Use',
    'Privacy',
    'Cookie Preference',
    'Corporate Information',
    'Contact Us',
    'Speed Test',
    'Legal Notices',
    'Only on Netflix',
];

const Footer: React.FC = () => {
    return (
        <div tw="flex justify-center text-netflix-greyText flex-col px-0 sm:px-8 lg:px-52 mx-6 sm:mx-20 md:mx-40 pt-11 pb-5">
            <div tw="text-base mb-8">
                <div>Questions? Call 1-844-542-4813</div>
            </div>
            <div tw="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm ">
                {FooterLinks.map((link, idx) => (
                    <a tw="hover:underline cursor-pointer" key={idx}>
                        {link}
                    </a>
                ))}
            </div>
            <div tw="w-36 pt-4">
                <LanguageDropdown tw="h-24 " />
            </div>

            <div tw="py-6 pr-6"> Netflix Canada</div>
        </div>
    );
};

export default Footer;
