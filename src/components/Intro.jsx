import { ReactTyped } from "react-typed";

const Intro = () => {
    return ( 
        <div id="home" className="intro h-screen flex items-center content">
            <div className="intro-container">
                <h1 className="text-8xl font-bold mb-5"> 
                    <ReactTyped
                        strings={[
                            "Hello!",
                            "Bonjour!",
                            "你好!",
                            "Ciao!",
                            "こんにちは!",
                            "안녕하세요!",
                            "Guten tag!",
                            "Hola!",
                            "नमस्ते!",
                            "مرحبًا!",
                            "Olá!",  
                            "Привет!",
                            "Hej!"
                        ]}

                        typeSpeed={130}
                        backSpeed={100}
                        backDelay={2000}
                        loop
                        shuffle
                        startDelay={500}
                    />
                    <br/>
                    <span>I'm</span>
                    <br/> 
                    <span className="intro-namegradient">
                    Lucian Cheng
                    </span>
                
                </h1>
                <p className="text-2xl into-background-text">Mechatronics and Biomedical Engineering Student at McMaster University</p>
                <p className="text-2xl into-background-text">Previously a Software Engineer Intern @&nbsp;
                    <span className="intro-companygradient">
                        Bluewrist Inc.
                    </span>
                 </p>
            </div>
        </div>
     );
}
 
export default Intro;