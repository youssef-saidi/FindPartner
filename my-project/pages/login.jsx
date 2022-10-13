import _ from 'lodash';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Bouton from '../components/bouton';
import Input from '../components/input';

const Login = () => {
  // const { loggedin } = useSelector(state => state),
  //   navigate = useNavigate(),
  //   [formData, updateFormData] = useState({}),
  //   [formErrors, updateFormErrors] = useState({});
  const handleChange = (e) => {
    //   updateFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value.trim()
    //   });
  };
  const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   let errors = {};

    //   if (_.isEmpty(formData.email) || !Globals.validateEmail(formData.email)) errors = { ...errors, email: 'Your email is reqiured' };
    //   if (_.isEmpty(formData.password)) errors = { ...errors, password: 'Invalid password' };


    //   updateFormErrors(errors);

    //   if (!_.isEmpty(errors)) return; //Skip the rest.

    //   //Make sure all the data is being correct.
    //   return Globals.Axios().post(`${Globals.wsurl}user/signin`, {
    //     data: formData,
    //   }).then(response => {

    //     if (response.data.status && response.data.token) {
    //       Globals.Cache.set(Globals.TokenKey, response.data.token);
    //       Globals.Cache.setCookie(Globals.TokenKey, response.data.token);
    //       // return navigate('/dashboard');
    //       return window.location.reload();
    //     }

    //     errors = { ...errors, error: response.data.errors }
    //     return updateFormErrors(errors);

    //   }).catch(error => {
    //     errors = { ...errors, error: 'Something went wrong please try again later.' }
    //     return updateFormErrors(errors);
    //   });
  }
  const displayError = (key) => {
    // if (!_.isEmpty(formErrors[key])) return <div className="pt-3 text-red-700">{formErrors[key]}</div>
  }
  // useEffect(() => {
  //   if (loggedin) return navigate('/dashboard');
  // });
  const email = {
    label: "Email",
    type: "email",
    erreur: "email"
  }
  const password = {
    label: "Password",
    type: "password",
    erreur: "password"
  }
  return (
    <section className='h-screen flex flex-col-reverse md:flex-row bgPink relative'>
      <div className='h-3/5 md:w-2/3 md:h-screen rounded-br-5xl bg-white flex flex-col items-center justify-center'>
        <Input inputInfo={email} />
        <div className="mt-14" >
          <Input inputInfo={password} />
        </div>
        <a href="/welcomePage" className='mt-3'>
          <Bouton value="Login" />
        </a>
        <div className='flex flex-row font-semibold p-2 font-cookie'>
          <p className='mr-1'>You Dont’t have an account please</p>
          <Link href="/register">
            <button className='colorPink underline underline-offset-4'>Sign In</button>
          </Link>
        </div>
      </div>
      <div className='h-2/5 md:w-1/3 md:h-screen bgPink text-white p-10 flex flex-col justify-center items-center'>
        <h1 className='font-cookie font-semibold text-3xl pb-16'>App Name</h1>
        <p className='font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis rem repudiandae veniam, assumenda ab nulla asperiores.</p>
      </div>
      <h2 className='absolute top-2 right-4 text-white font-cookie'>Beta Version</h2>
    </section>
  )
}
export default Login