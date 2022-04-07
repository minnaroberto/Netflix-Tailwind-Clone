import tw from 'twin.macro';

interface ButtonProps {
    children?: React.ReactNode;
    hasHover?: boolean;
}

const GetStartedButton: React.FC<ButtonProps> = ({ children, hasHover }) => {
    return (
        <div>
            <button
                tw="h-12 sm:h-12 md:h-18 w-full md:w-52 p-2 text-xl md:text-3xl "
                css={[
                    tw`bg-netflix-main`,

                    tw`font-normal`,
                    tw`text-center`,
                    hasHover && tw`hover:bg-red-600`,
                ]}
            >
                {children}
            </button>
        </div>
    );
};

export default GetStartedButton;
