import React from 'react';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import State from '../State/State';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <State></State>
        </div>
    );
};

export default Home;