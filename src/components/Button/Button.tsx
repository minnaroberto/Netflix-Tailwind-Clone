import tw from 'twin.macro';
import styled from '@emotion/styled';

interface ButtonProps {
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button
            tw="block text-sm sm:text-base py-1.5 px-2 sm:px-4"
            css={[tw`bg-netflix-main`, tw`rounded`, tw`font-normal`]}
        >
            {children}
        </button>
    );
};

export default Button;
