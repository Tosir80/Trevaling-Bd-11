import React from 'react';

import Banner from './Banner/Banner';
import ExtraSection from './ExtraSection/ExtraSection';
import Services from './Services/Services';

const Home = () => {
    return (
      <>
        <title>Home Page..</title>
        <Banner></Banner>
        <Services></Services>
        <ExtraSection></ExtraSection>
      </>
    );
};

export default Home;