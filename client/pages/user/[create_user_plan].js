import React, { Fragment, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SideBar from '../../components/user/side-bar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Router, { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';
import Skeleton from 'react-loading-skeleton';
import {
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  CircularProgress,
  FormGroup,
  FormControlLabel,
  spacing ,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Field, Form, Formik, useField } from 'formik';
import { object, mixed, number, string, array, date } from 'yup';






const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
const SelectPlan = ({ currentuser, plan }) => {
  const router = useRouter();
  const [name, SetName] = useState('');
  const [description, SetDescription] = useState('');
  const [amount, SetAmount] = useState('');
  // const [planId, SetPlanId] = useState('');
  const [debitType, SetDebitType] = useState('');
  const [startDate, SetStartDate] = useState('');
  const [expiresAt, SetExpiresAt] = useState('');
  // const [interval, SetInterval] = useState('');
  const [interval, SetDebitType2] = useState('');


  const { doRequest, errors, loading } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      name,
      description: name,
      amount,
      planId: plan.id,
      debitType,
      startDate,
      expiresAt,
      interval,
    },

    onSuccess: (data) =>
      Router.push(
        '/user/subscription/[subscription_user_plan]',
        `/user/subscription/${data.id}`
      ),
  });

  useEffect(() => {
    currentuser && currentuser.userType === 0
      ? ''
      : Router.push('/auth/signin');
  }, []);

  return currentuser ? (
    <Fragment>
      <Layout title="Landing Page" />
      <body className="nk-body npc-crypto bg-white has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main">
            <SideBar />

            <div className="nk-wrap ">
              <Header currentuser={currentuser} /> {/* Content Main */}
              <div className="nk-content nk-content-fluid">
                <div className="container-xl wide-lg">
                  <div className="nk-content-body">
                    <a className="back-to" href="account/user_plans.php">
                      <em className="icon ni ni-arrow-left"></em>
                      <span>Back</span>
                    </a>
                  </div>

                  <FormikStepper
                    initialValues={{
                      name: '',
                      description: '',
                      amount: 0,
                      debitType: '',
                      interval: '',
                      startDate: '',
                      expiresAt: '',
                    }}
                    onSubmit={async (values) => {
                      

                      await sleep(3000);

                      console.log('values', values);

                      doRequest();
                    }}
                  >
                    <FormikStep
                      validationSchema={object({
                        name: string()
                          .min(5, 'Too Short!')
                          .max(50, 'Too Long!')
                          .required('Required'),
                      })}
                    >
                      <Box mt={8}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h2 className="text-blue mr-5">
                            What are you saving for?
                          </h2>
                        </Grid>
                       
                        <Grid item xs={5}>
                          <Field
                            fullWidth
                            name="name"
                            component={TextField}
                            label="Plan name"
                            variant="outlined"
                            onBlur={(e) => {
                              SetName(e.currentTarget.value);
                            }}
                          />
                        </Grid>
                      
                      </Grid>
                      </Box>
                    </FormikStep>

                    <FormikStep
                      validationSchema={object({
                        amount: number()
                          .required()
                          .min(100, 'A minimum of ₦100 is required'),
                      })}
                    >
                       <Box mt={8}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h2 className="text-blue mr-5">
                            How much would you like to save monthly?
                          </h2>
                        </Grid>
                        <Grid item xs={5}>
                          <Field
                            fullWidth
                            name="amount"
                            type="number"
                            component={TextField}
                            label="Amont"
                            variant="outlined"
                            onBlur={(e) => {
                              SetAmount(e.currentTarget.value);
                            }}
                          />
                        </Grid>
                      </Grid>
                      </Box>
                    </FormikStep>

                    <FormikStep>
                    <Box mt={8}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h2 className="text-blue mr-5">
                            Do you want to automate your savings?:
                          </h2>
                        </Grid>
                        <Grid item xs={5}>
                          <FormGroup>
                            
                            <RadioGroup
                              value={debitType || ''}
                              onChange={(e) => {
                                SetDebitType(e.target.value);
                              }}
                            >
                              <FormControlLabel
                                value="automatic"
                                control={<Radio />}
                                label="yes, I want to be debited automatically"
                              />
                              <FormControlLabel
                                value="manual"
                                control={<Radio />}
                                label="No, I want to save when I want to"
                              />
                            </RadioGroup>
                          </FormGroup>
                        </Grid>
                      </Grid>
                      </Box>
                    </FormikStep>

                    <FormikStep>
                    <Box mt={8}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h2 className="text-blue mr-5">
                            How frequently would you like to save?
                          </h2>
                        </Grid>
                        <Grid item xs={5}>
                          <FormGroup>
                          <RadioGroup
                              value={interval || ''}
                              onChange={(e) => {
                                SetDebitType2(e.target.value);
                              }}
                            >
                               <FormControlLabel
                                value="daily"
                                control={<Radio />}
                                label="Once a day"
                              />
                              <FormControlLabel
                                value="weekly"
                                control={<Radio />}
                                label="Once a week"
                              />
                              <FormControlLabel
                                value="monthly"
                                control={<Radio />}
                                label="Once a month"
                              />
                            </RadioGroup>
                          </FormGroup>
                        </Grid>
                      </Grid>
                      </Box>
                    </FormikStep>

                    <FormikStep
                      validationSchema={object({
                        startDate: date().required('data is required'),
                      })}
                    >
                       <Box mt={8}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h2 className="text-blue mr-5">
                            When would you like to start saving?
                          </h2>
                        </Grid>
                        <Grid item xs={5}>
                          <FormGroup>
                            <Field
                              fullWidth
                              name="startDate"
                              type="date"
                              component={TextField}
                              variant="outlined"
                              min="2020-08-28"
                              onBlur={(e) => {
                                SetStartDate(e.currentTarget.value);
                              }}
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                      </Box>
                    </FormikStep>

                    <FormikStep
                      validationSchema={object({
                        expiresAt: date().required('data is required'),
                      })}
                    >
                       <Box mt={8}>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h2 className="text-blue mr-5">
                            <label>How long would you like to save?</label>
                          </h2>
                        </Grid>
                        <Grid item xs={5}>
                          <FormGroup>
                            <Field
                              fullWidth
                              name="expiresAt"
                              type="date"
                              component={TextField}
                              variant="outlined"
                              onBlur={(e) => {
                                SetExpiresAt(e.currentTarget.value);
                              }}
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                      </Box>
                    </FormikStep>
                  </FormikStepper>
                </div>
              </div>
              {/* Content Main */}
              {/* Footer */}
              <Footer /> {/* Footer */}{' '}
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  ) : (
    <Skeleton height={40} count={5} />
  );
};

export function FormikStep({ children }) {
  return <>{children}</>;
}

// export function MyCheckbox(props) {
//   const [field] = useField({
//     name: props.name,
//     type: 'checkbox',
//     value: props.value,
//   });
//   return (
//     <FormControlLabel
//       control={<Checkbox {...props} {...field} />}
//       label={props.label}
//     />
//   );
// }

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}
          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: '67%', marginTop: '20px' }}
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginLeft: '67%', marginTop: '20px' }}
              >
                {isSubmitting ? 'Submiting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

SelectPlan.getInitialProps = async (context, client, currentuser) => {
  const { create_user_plan } = context.query;

  const { data } = await client.get(`/api/plan/${create_user_plan}`);

  return { plan: data };
};

export default SelectPlan;
