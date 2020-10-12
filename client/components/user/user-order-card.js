import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Sum from '../user/sum';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserCard = ({ currentuser, order }) => {


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Fragment>
      {order &&
        order.map((order, i) => {
          return (
            <div
              className="col-lg-4"
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
                          {/* {order.plan.title} */}

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
                          <Sum orderId={order.id}></Sum>
                          .00
                        </h6>
                      </div>
                      <div className="vl"></div>

                      <div className="card__list__item__valid">
                        <div className="card__list__item__valid__title">
                          <h3>5%</h3>
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
    </Fragment>
  );
};

export default UserCard;
