import { Fragment } from 'react';
import Link from 'next/link';

const Card = ({ currentuser, plan }) => {
  return (
    <Fragment>
      {plan.map((plan, i) => {
        return (
          <Fragment key={i}>
            <Link href="/user/[create_user_plan]" as={`/user/${plan.id}`}>
              <div
                class="col-lg-4"
                style={{
                  paddingLeft: '14px',
                  paddingRight: '14px',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                }}
              >
                <a
                  href="#"
                  style={{
                    fontWeight: '500',
                    color: '#0066f5',
                    fontSize: '1rem',
                    textDecoration: 'none',
                  }}
                >
                  <div class="card_style">
                    <div class="card-inner">
                      <p style={{ textAlign: 'left' }}>
                        <img
                          src="./assets/newsavings.svg"
                          alt="image2"
                          height="40"
                          width="40"
                        />
                      </p>
                      <p class="card-text" style={{ textAlign: 'left' }}>
                        {plan.title}
                      </p>
                      <p
                        class="card-text"
                        style={{
                          textSlign: 'left',
                          fontSize: '12px',
                          color: 'rgba(10,46,101,.6)!important',
                        }}
                      >
                        {plan.description} {plan.returnPercentage}%
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

Card.getInitialProps = async (context, client, currentuser) => {
  return {};
};

export default Card;
