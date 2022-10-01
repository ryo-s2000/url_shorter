import '@styles/globals.scss';
import Header from 'src/components/utility/Header';

const MainComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Header></Header>
      <Component {...pageProps}></Component>
    </div>
  );
};

export default MainComponent;
