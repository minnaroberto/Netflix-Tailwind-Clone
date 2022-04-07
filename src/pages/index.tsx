import type { NextPage } from 'next';
import tw from 'twin.macro';
import Navbar from 'components/Navigation/Navbar';
import Banner from 'page-components/Banner/Banner';
import InfoSections from 'page-components/InfoSections/InfoSections';
import Faq from 'components/DropdownQuestions/DropdownQuestions';
import Footer from 'components/Footer/Footer';

const InfoSection = [
    {
        title: 'Enjoy on your TV.',
        content:
            'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        imgSrc: '/tvImg.png',
        alignContent: 'left',
    },
    {
        title: 'Download you shows to watch offline',
        content:
            'Save your favorites easily and always have something to watch.',
        imgSrc: '/phoneImg.jpg',
        alignContent: 'right',
    },
    {
        title: 'Watch everywhere.',
        content:
            'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
        imgSrc: '/devicesImg.png',
        alignContent: 'left',
    },
    {
        title: 'Create profiles for kids.',
        content:
            'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',

        imgSrc: '/kidsImage.png',
        alignContent: 'right',
    },
];

const Home: NextPage = () => {
    return (
        <>
            <div tw="h-full">
                <Navbar />
                <Banner />
                {InfoSection.map((info, idx) => (
                    <InfoSections
                        key={idx}
                        title={info.title}
                        content={info.content}
                        imgSrc={info.imgSrc}
                        alignContent={info.alignContent}
                    />
                ))}
                <Faq title={'Frequently Asked Questions'} />
                <Footer />
            </div>
        </>
    );
};

export default Home;
