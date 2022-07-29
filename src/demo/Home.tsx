import { animus } from '@animus-ui/core';
import DemoNavContainer from './DemoNav';

const HomeContainer = animus
    .styles({
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#f4f4f5',
        '& ~ .demo-nav-area': {
            display: 'none',
        },
        '.animus-prototypes-home-link': {
            display: 'none',
        },

    })
    .asElement('div');

const HomeDemoNav = animus
    .styles({

        width: '100%',
        flex: '0 0 auto',
        maxWidth: '600px',
        mx: 'auto'
    })
    .asElement('div');

const HomeDemoHeader = animus
    .styles({
        px: 8,
        my: 4,

    })
    .asElement('h1');

export default function Home() {
    return (
        <HomeContainer className="home-container page-container">
            <HomeDemoNav>
                <HomeDemoHeader>Animus prototypes</HomeDemoHeader>
                <DemoNavContainer />
            </HomeDemoNav>
        </HomeContainer>
    )
}