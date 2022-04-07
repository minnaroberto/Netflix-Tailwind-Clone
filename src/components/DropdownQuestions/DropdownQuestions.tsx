import { useState } from 'react';
import tw from 'twin.macro';
import EmailForm from '../EmailForm/EmailForm';
import Divider from '../Divider/Divider';
import CloseIcon from '@mui/icons-material/Close';

const FAQ = [
    {
        id: 1,
        question: 'What is Netflix',
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. \n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
        id: 2,
        question: 'How much does Netflix cost?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $20.99 a month. No extra costs, no contracts.',
    },
    {
        id: 3,
        question: 'Where can I watch?',
        answer: "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
        id: 4,
        question: 'How do I cancel?',
        answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
        id: 5,
        question: 'What can I watch on Netflix',
        answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
        id: 6,
        question: 'Is Netflix good for kids?',
        answer: 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    },
];

interface DropdownProps {
    title?: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ title }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownSelected, setDropdownSelected] = useState(0);

    return (
        <>
            <div tw="flex flex-col mb-12">
                <div tw="text-4xl md:text-5xl font-semibold flex justify-center text-center mt-16 mb-12 ">
                    {title}
                </div>
                {FAQ.map((FAQ) => (
                    <div
                        key={FAQ.id}
                        tw=" flex justify-center mb-2 flex-col text-xl md:text-2xl font-normal"
                    >
                        <div tw=" flex justify-center ">
                            <button
                                onClick={() => {
                                    setDropdownSelected(FAQ.id);
                                    setShowDropdown(!showDropdown);
                                }}
                                tw="bg-netflix-dark h-12 md:h-16 text-left pl-2 md:pl-5 py-3 block w-815"
                            >
                                {FAQ.question}
                                <CloseIcon
                                    tw="text-center block float-right mr-1 md:mr-5 transform"
                                    css={[
                                        showDropdown === true &&
                                        dropdownSelected === FAQ.id
                                            ? tw`rotate-90`
                                            : tw`rotate-45`,
                                    ]}
                                />
                            </button>
                        </div>
                        <div tw=" flex justify-center ">
                            <p
                                tw="bg-netflix-dark text-left pl-5 py-3 inline mt-0.5 p-8 w-815"
                                css={[
                                    showDropdown === true &&
                                    dropdownSelected === FAQ.id
                                        ? tw`visible`
                                        : tw`hidden`,
                                ]}
                            >
                                {FAQ.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div tw="justify-center flex">
                <EmailForm />
            </div>
            <Divider />
        </>
    );
};

export default DropdownMenu;
