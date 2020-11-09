import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import useRequest from '../../hooks/use-request';
import Sum from '../user/sum';
const MyPlan = ({ currentuser }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [order, setOrders] = useState([]);

  const { doRequest } = useRequest({
    url: '/api/orders',
    method: 'get',
    body: {},

    onSuccess: (orders) => {
      console.log(orders)
      setOrders(orders);
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <Fragment>
      <h2 className="nk-block-title title" style={{ color: '#c4c4c8' }}>
        My Plans
      </h2>

      <div className="nk-block nk-block-lg">
        <div className="card card-preview">
          <div className="card-inner">
            <div className="row">
              <Carousel breakPoints={breakPoints}>
               
                {order &&
                
                  order.map((order, i) => {
                      
                    return (
                      <div
                        className="col-lg-12"
                        style={{
                          paddingLeft: '1.5rem',
                          paddingRight: '1.5rem',
                          paddingTop: '2rem',
                          paddingBottom: '2rem',
                        }}
                        key={i}
                      >
                        <Link
                          href="/user/plans/savings/[savings]"
                          as={`/user/plans/savings/${order.id}`}
                          style={{
                            fontWeight: '500',
                            color: '#0066f5',
                            fontSize: '1rem',
                            textDecoration: 'none',
                          }}
                        >
                          <div className="card">
                            <div
                              className="card__list__item active"
                              style={{
                                backgroundColor: '#a3d4fb',
                                height: '200px!important',
                                width: '100%',
                              }}
                            >
                              <div className="card__list__item__row">
                                <div
                                  className="card__list__item__name"
                                  style={{ textAlign: 'right !important' }}
                                ></div>
                                <div
                                  className="card__list__item__icon"
                                  style={{ marginRight: '5%  !important' }}
                                >
                                  <button
                                    className="btn"
                                    style={{
                                      backgroundColor: ' #2f87ff',
                                      color: 'white',
                                      fontFamily: 'Times New Roman',
                                      fontSize: '12px',
                                    }}
                                  >
                                    {order.plan ? order.plan.title : ''}
                                  </button>
                                </div>
                              </div>

                              <div className="card__list__item__numbers">
                                <div className="card__list__item__numbers__item">
                                  <h6>{order.name}</h6>
                                </div>

                                <div
                                  className="card__list__item__numbers__item"
                                  style={{ marginRight: '2%' }}
                                ></div>
                              </div>

                              <div className="card__list__item__row">
                                <div className="card__list__item__balance">
                                  {' '}
                                  <h6>
                                    <sup>₦</sup>
                                    <Sum planId={order.plan_code}></Sum>
                                    .00
                                  </h6>
                                </div>
                                <div className="vl"></div>

                                <div className="card__list__item__valid">
                                  <div className="card__list__item__valid__title">
                                    <h3> {order.plan.returnPercentage}% </h3>
                                  </div>
                                  <div
                                    className="card__list__item__valid__value"
                                    style={{ color: '#364a63' }}
                                  >
                                    Interest p.a.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                    })}
               
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
MyPlan.getInitialProps = async (context, client, currentuser) => {
  const { data } = await client.get(`/api/orders`);

  console.log(data);

  return { orders: data };
};

export default MyPlan;
