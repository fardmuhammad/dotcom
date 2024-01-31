import styles from './styles';

import { section } from './components';

// TO-DO: Work section

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section.Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section.Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section.Stats />
        <section.Resume />
        {/* <section.Work /> */}
        <section.Testimonials />
        <section.Footer />
      </div>
    </div>

  </div>
)

export default App