'use client';
import { useEffect, useState } from 'react';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';

const Home = () => {
    const [state, setState] = useState({
        loading: true,
        viewedAnimations: false,
    });

    useEffect(() => {
        document.body.className = '';
        const sessionItem = !!sessionStorage.getItem('viewed_animations');
        if (!sessionItem) {
            sessionStorage.setItem('viewed_animations', '1');
        }

        setState({ loading: false, viewedAnimations: sessionItem });

        // Run effect only once (on componentDidMount) - only first render matters
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // This is a fake loading to wait until the state updates
    // because first render depends on the value in sessionStorage
    if (state.loading) return;

    return (
        <>
            <Header showAnimation={!state.viewedAnimations} />
            <main className="content-max-width mx-auto px-4 select-none">
                <Projects showAnimation={!state.viewedAnimations} />
                <WorkExperience />
                <Certifications />
            </main>
            <Footer />
        </>
    );
};

export default Home;
