import _ from 'lodash';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import { GLobals } from '../globals/globalFunction';

const Login = () => {
  // const { loggedin } = useSelector(state => state),
  //   navigate = useNavigate(),
  const [formData, updateFormData] = useState({}),
    [formErrors, updateFormErrors] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    if (_.isEmpty(formData.email) || !GLobals.validateEmail(formData.email)) errors = { ...errors, email: 'Your email is required' };
    if (_.isEmpty(formData.password)) errors = { ...errors, password: 'Invalid password' };


    updateFormErrors(errors);

    if (!_.isEmpty(errors)) return; //Skip the rest.

    //   //Make sure all the data is being correct.
    console.log(process.env.APP_URL)
    return GLobals.Axios().post(`http://localhost:3000/api/login`, {
      data: formData,
    }).then(response => {
      console.log(response)
      // if (response.data.status && response.data.token) {
      //   Globals.Cache.set(Globals.TokenKey, response.data.token);
      //   Globals.Cache.setCookie(Globals.TokenKey, response.data.token);
      //   // return navigate('/dashboard');
      //   return window.location.reload();
      // }

      // errors = { ...errors, error: response.data.errors }
      // return updateFormErrors(errors);

    }).catch(error => {
      errors = { ...errors, error: 'Something went wrong please try again later.' }
      return updateFormErrors(errors);
    });
  }

  // useEffect(() => {
  //   if (loggedin) return navigate('/dashboard');
  // });
  const email = {
    label: "Email",
    type: "email",
    name: "email"
  }
  const password = {
    label: "Password",
    type: "password",
    name: "password"
  }
  return (
    <section className='h-screen flex flex-col-reverse md:flex-row bgPink relative'>
      <form onSubmit={handleSubmit} className='h-4/5 md:w-2/3 md:h-screen rounded-br-5xl bg-white flex flex-col items-center justify-center'>
        <Input handleChange={handleChange} formErrors={formErrors} inputInfo={email} />
        <div className="mt-14" >
          <Input handleChange={handleChange} formErrors={formErrors} inputInfo={password} />
        </div>
        <div className='mt-3'>
          <Button value="Login" type="submit" bgColor="#DB2777" />
        </div>
        <div className='flex flex-row font-semibold p-2 font-cookie'>
          <p className='mr-1'>You Dont’t have an account please</p>
          <Link href="/register">
            <button className='colorPink underline underline-offset-4'>Sign In</button>
          </Link>
        </div>
      </form>
      <div className='h-2/5 md:w-1/3 md:h-screen bgPink text-white p-10 flex flex-col justify-center items-center'>
        <h1 className='font-cookie font-semibold text-3xl pb-16'>App Name</h1>
        <p className='font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis rem repudiandae veniam, assumenda ab nulla asperiores.</p>
      </div>
      <h2 className='absolute top-2 right-4 text-white font-cookie'>Beta Version</h2>
    </section>
  )
}
export default Login