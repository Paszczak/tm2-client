import classes from './footer.module.scss';

export function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.infoCard}>
        <div className={classes.infoCardContent}>
          Jestem nauczycielem w Zespole Państwowych Szkół Muzycznych w Bochni.
          Uczę tam przedmiotów teoretycznych. Na tej stronie można znaleźć
          przygotowane przeze mnie materiały dla uczniów naszej szkoły.
          Zapraszam.
        </div>
        <div className={classes.infoCardContent}>
          <span>
            <b>Zespół Państwowych Szkół Muzycznych w Bochni</b>
          </span>
          <span>Plac gen. Leopolda Okulickiego 1, 32-700 Bochnia</span>
          <span>Tel. +14 612 3270</span>
          <span>www.muzycznaszkola.com</span>
        </div>
      </div>
      <div className={classes.copyright}>
            <small>{new Date().getFullYear()} &copy; Pracownia P2</small>
      </div>
    </footer>
  );
}
