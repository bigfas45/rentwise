import Link from 'next/link';
import { Fragment } from 'react';
import LayoutProduct from '../components/HeaderProductCom';

const ProdctCom = ({ img, title, content, type, link }) => {
  return (
    <Fragment>
      <LayoutProduct> </LayoutProduct>
      <div className="card">
        <img src={img} />
        <div className="card-body">
          <h2
            className="font-weight-bold"
            style={{ color: '#022b69', fontSize: 30, fontWeight: 'bolder' }}
          >
            {title}
          </h2>
          <br />
          <p className="font-weight-semibold" style={{ color: '#436290' }}>
            {content}
          </p>

          {link ? (
            <a
              href={link}
              className="button button-border button-rounded button-blue"
            >
              {type}
            </a>
          ) : (
            <a
              href="#modal-register"
              data-lightbox="inline"
              className="button button-border button-rounded button-blue"
            >
              {type}
            </a>
          )}

          {/*  */}
        </div>
      </div>
    </Fragment>
  );
};

export default ProdctCom;
