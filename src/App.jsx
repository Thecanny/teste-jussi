import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Header from './components/common/Header';
import Fullbanner from './components/Fullbanner';
import Brands from './components/Brands';
import NossasSolucoes from './components/NossasSolucoes';
import QuemSomos from './components/QuemSomos';
import Contato from './components/Contato';
import Newsletter from './components/Newsletter';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
    <Header />
    <Fullbanner />
    <Brands />
    <NossasSolucoes />
    <QuemSomos />
    <Contato />
    <Newsletter />
    <Footer />
    <GlobalStyles />
    </>
  );
}

export default App;
