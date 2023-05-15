import Header from '../components/header/header';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';
import Crisis from '../components/crisis/crisis';
import TecIOT from '../components/tecIOT/tecIOT';
import Unete from '../components/unete/unete';
import Fin from '../components/fin/fin';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Crisis />
      <TecIOT />
      <Fin />
      <Unete />
      <Footer />
    </>
  );
}

export default Home;
