import _ from 'lodash';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Button from '../components/button';
import Input from '../components/input';
import Select from '../components/Select';
import { GLobals } from '../globals/globalFunction';

const Register = () => {
	// const { loggedin } = useSelector(state => state),
	const [formData, updateFormData] = useState({}),
		[formErrors, updateFormErrors] = useState({});
	// navigate = useNavigate();
	const handleChange = (e) => {
			updateFormData({
				...formData,
				[e.target.name]: e.target.value.trim()
			});
	}
	const handleSubmit = (_event) => {
			_event.preventDefault();

			let errors = {};

			if (_.isEmpty(formData.company_name)) errors = { ...errors, company_name: 'Company name is reqiured' };
			if (_.isEmpty(formData.name)) errors = { ...errors, name: 'Please fill in your name' };
			if (_.isEmpty(formData.password) || _.isEmpty(formData.confirm_password) || formData.password.length < 6 || formData.password !== formData.confirm_password) errors = { ...errors, password: 'Invalid password' };
			if (_.isEmpty(formData.company_address)) errors = { ...errors, company_address: 'Company address is reqiured' };
			if (_.isEmpty(formData.city)) errors = { ...errors, city: 'Company city is reqiured' };
			if (_.isEmpty(formData.state)) errors = { ...errors, state: 'Company state is reqiured' };
			if (_.isEmpty(formData.zip_code)) errors = { ...errors, zip_code: 'Company zip code is reqiured' };
			if (_.isEmpty(formData.country)) errors = { ...errors, country: 'Company country is reqiured' };
			if (_.isEmpty(formData.email) || !Globals.validateEmail(formData.email)) errors = { ...errors, email: 'Company email is reqiured' };
			if (_.isEmpty(formData.phone)) errors = { ...errors, phone: 'Company phone is reqiured' };
			if (_.isEmpty(formData.certificate)) errors = { ...errors, certificate: 'Certificate is reqiured' };

			updateFormErrors(errors);

			if (!_.isEmpty(errors)) return;

			//Make sure all the data is being correct.
			return Globals.Axios().post(`${Globals.wsurl}user/signup`, {
				data: formData,
				deviceId: Globals.deviceId,
			}).then(response => {

				if (response.data.status && response.data.token) {
					Globals.Cache.set(Globals.TokenKey, response.data.token);
					Globals.Cache.setCookie(Globals.TokenKey, response.data.token);
					return window.location.reload();
				}

				errors = { ...errors, error: response.data.errors }
				return updateFormErrors(errors);

			}).catch(error => {
				errors = { ...errors, error: 'Something went wrong please try again later.' }
				updateFormErrors(errors);
				console.log(errors);
			});


	}

	const displayError = (key) => {
		if (!_.isEmpty(formErrors[key])) return <div className="pt-3 text-red-700">{formErrors[key]}</div>
	}


	// useEffect(() => {
	// 	if (loggedin) return navigate('/dashboard');
	// });
	const fullName = {
		label: "Full Name",
		type: "text",
		erreur: 'name'
	}

	const fakeName = {
		label: "Fake Name",
		erreur: 'fakename',
		type: "text"
	}
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
	const DateOfBirth = {
		label: "Date Of Birth",
		type: "date",
		erreur: "date"
	}
	const university = {
		label: "University",
		values: GLobals.university,
		selectedValue: "ISSATSO"
	}
	const branch = {
		label: "Branch",
		values: GLobals.branch,
		selectedValue: "Prepa"
	}
	const sexe = {
		label: "Sexe",
		values: GLobals.sexe,
		selectedValue: "Female"
	}
	return (
		<section className='h-full xl:h-screen flex flex-col-reverse xl:flex-row bgPink relative'>
			<form onSubmit={handleSubmit} className='xl:w-2/3 h-full xl:h-screen rounded-br-4xl bg-white flex flex-col items-center justify-center'>
				<div className='flex flex-col xl:flex-row mt-8'>
					<div className='px-6'>
						<Input handleChange={handleChange} formErrors={formErrors} inputInfo={fullName} />
					</div>
					<div className='px-6 mt-4 xl:mt-0'>
						<Input handleChange={handleChange} formErrors={formErrors} inputInfo={fakeName} />
					</div>
				</div>
				<div className='flex flex-col xl:flex-row mt-4'>
					<div className='px-6'>
						<Input handleChange={handleChange} formErrors={formErrors} inputInfo={email} />
					</div>
					<div className='px-6 mt-4 xl:mt-0'>
						<Input handleChange={handleChange} formErrors={formErrors} inputInfo={DateOfBirth} />
					</div>
				</div>
				<div className='flex flex-col xl:flex-row mt-4'>
					<div className='px-6'>
						<Select info={university} />
					</div>
					<div className='px-6 mt-4 xl:mt-0'>
						<Select info={branch} />
					</div>
				</div>
				<div className='flex flex-col xl:flex-row mt-4'>
					<div className='px-6'>
						<Select info={sexe} />
					</div>
					<div className='px-6 mt-4 xl:mt-0'>
						<Select info={sexe} />
					</div>
				</div>
				<div className='mt-3'>
				<Button value="Login" type="submit" bgColor="#DB2777" />
				</div>
				<div className='flex flex-row font-semibold p-2 font-cookie'>
					<p className='mr-1'>You have an account please</p>
					
					<button className='colorPink underline underline-offset-4'>Log In</button>
					
				</div>
			</form>
			<div className='xl:w-1/3 h-full xl:h-screen bgPink text-white p-10 flex flex-col justify-center items-center'>
				<h1 className='font-cookie font-semibold text-3xl pb-16'>App Name</h1>
				<p className='font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis rem repudiandae veniam, assumenda ab nulla asperiores.</p>
			</div>
			<h2 className='absolute top-2 right-4 text-white font-cookie'>Beta Version</h2>
		</section>
	);

}

export default Register