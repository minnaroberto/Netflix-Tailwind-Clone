import tw from 'twin.macro';
import Image from 'next/image';
import styled from '@emotion/react';
import Divider from '../../components/Divider/Divider';

interface InfoProps {
    title: string;
    imgSrc: string;
    content: string;
    alignContent: string;
}

const InfoSections: React.FC<InfoProps> = ({
    title,
    imgSrc,
    content,
    alignContent,
}) => {
    return (
        <>
            <div
                tw="flex items-center text-center lg:text-left py-10 lg:py-6 mx-10 lg:mx-52 xl:mx-80 flex-col lg:flex-row"
                css={[
                    alignContent === 'right' && tw`lg:flex-row-reverse`,
                    tw`flex-col`,
                ]}
            >
                <div
                    tw="text-white w-full flex-col lg:w-1/2"
                    css={[alignContent === 'left' && tw`lg:pl-32`, tw`pl-0`]}
                >
                    <div tw="text-3xl lg:text-5xl font-bold pb-6">{title}</div>
                    <div tw="text-xl mx-0 sm:mx-16 md:mx-56 lg:mx-0 lg:text-2xl ">
                        {content}
                    </div>
                </div>
                <div tw="w-full lg:w-1/2">
                    <Image
                        src={imgSrc}
                        alt="{imgSrc}"
                        width={640}
                        height={480}
                    />
                </div>
            </div>
            <Divider />
        </>
    );
};

export default InfoSections;
