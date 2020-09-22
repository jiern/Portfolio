import React, {useRef} from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MainView from "./components/MainView";
import Contact from "./components/Contact";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)
// General scroll to element function

const App: React.FC = () => {
    //For Mainview
    const Ref1 = useRef(null)

    //For aboutme
    const Ref2 = useRef(null)

    //For Contact
    const Ref3 = useRef(null)

    const executeScroll = (ref:any) => scrollToRef(ref)

    return (
        <div>
            <Header/>

            <div ref={Ref1}>
                <MainView/>
            </div>

            <div ref={Ref2}>
                <AboutMe/>
            </div>

            <div ref={Ref3}>
                <Contact/>
            </div>

        </div>
    );
}

export default App;
