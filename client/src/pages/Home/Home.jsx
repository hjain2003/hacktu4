import React from 'react'
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import '../Home/Home.css'

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
