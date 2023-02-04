import React from 'react'
import Card from '../../components/Card/Card';
import InterviewPrep from '../../components/InterviewPrep/InterviewPrep';
import LearnSlider from '../../components/LearnSlider/LearnSlider';
import Navbar from '../../components/Navbar/Navbar';
import '../Home/Home.css';


const Home = () => {

    return (
        <>
            <Navbar />

            <div id="wrapper_row">
                <div id="cards_section_col">
                    <div id="games_article_row">
                        <div id="game_card">
                            Games
                        </div>
                        <div id="article_card">
                            Article
                        </div>
                    </div>
                    <div id="Learn_row">
                        <h2>LEARN</h2>
                        <br /><br />
                       <LearnSlider/>
                    </div>
                    <div id="IP_Wrapper">
                    <div id="InterviewPrep">
                        <h2>INTERVIEW PREP</h2>
                        <br /><br /><br />
                        <InterviewPrep/>
                    </div>
                    </div>
                    
                </div>
                <div id="profile_stats">
                    <div id="profile">
                        John Doe
                    </div>
                    <div id="stocks">
                        Stocks Data
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
