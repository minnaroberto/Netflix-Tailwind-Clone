import { useState } from 'react';
import tw from 'twin.macro';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageDropdown: React.FC = () => {
    const [language, setLanguage] = useState('English');
    const [showDropdown, setShowDropdown] = useState(false);
    console.log('dropdown: ', showDropdown);

    return (
        <>
            <div tw="flex-col">
                <div>
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        tw="border-2 pl-1 sm:pl-2 rounded inline h-full text-sm sm:text-base"
                    >
                        <LanguageIcon tw="mr-1 sm:mr-2 text-sm sm:text-lg" />
                        {language}
                        <ArrowDropDownIcon />
                    </button>
                </div>
                <div
                    tw="w-full flex flex-col z-10"
                    css={[showDropdown === true ? tw`visible` : tw`hidden`]}
                >
                    <a tw="bg-netflix-dark text-left ">English</a>
                    <a tw="bg-netflix-dark text-left ">French</a>
                </div>
            </div>
        </>
    );
};

export default LanguageDropdown;
