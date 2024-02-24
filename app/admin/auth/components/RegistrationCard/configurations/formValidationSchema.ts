import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),

  lastName: Yup.string()
    .required('Required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),

  phoneNumber: Yup.string()
    .required('Required')
    .matches(/^[0-9]{10}$/, 'Invalid Mobile Number'),

  email: Yup.string()
    .required('Required')
    .email('Invalid email'),

  password: Yup.string()
    .required('Required')
    .min(8, 'Password must be at least 8 characters'),

});

export default validationSchema;
