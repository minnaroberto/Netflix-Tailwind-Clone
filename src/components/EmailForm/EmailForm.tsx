import tw from 'twin.macro';
import GetStartedButton from 'components/Button/GetStartedButton';

const EmailTextbox: React.FC = () => {
    return (
        <div tw="pb-8 w-full flex-col ">
            <div tw="text-base md:text-lg text-white font-medium pb-6 px-8 flex justify-center text-center">
                Ready to watch? Enter your email to create or restart your
                membership
            </div>
            <div tw="flex items-center justify-center flex-col md:flex-row">
                <input
                    type="text"
                    placeholder="Email address"
                    tw="text-black p-2.5 h-12 sm:h-14 md:h-18 w-3/4 sm:w-500"
                />
                <div tw="text-center mt-8 md:mt-0">
                    <GetStartedButton hasHover>Get Started</GetStartedButton>
                </div>
            </div>
        </div>
    );
};

export default EmailTextbox;
