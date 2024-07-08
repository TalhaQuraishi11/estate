import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        {pageTitle &&
          `${pageTitle} || FissionFox `}
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
