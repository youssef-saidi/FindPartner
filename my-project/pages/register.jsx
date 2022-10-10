import _ from 'lodash';
import Link from 'next/link';
import {useState,useEffect} from "react";
import { useSelector } from 'react-redux';



const Register = () => {


	// const { loggedin } = useSelector(state => state),
	const	[formData, updateFormData] = useState({}),
		[formErrors, updateFormErrors] = useState({});
		// navigate = useNavigate();

	 const handleChange = (e) => {
	// 	updateFormData({
	// 		...formData,
	// 		[e.target.name]: e.target.value.trim()
	// 	});
	}

	 const handleSubmit = (_event) => {
	// 	_event.preventDefault();

	// 	let errors = {};

	// 	if (_.isEmpty(formData.company_name)) errors = { ...errors, company_name: 'Company name is reqiured' };
	// 	if (_.isEmpty(formData.name)) errors = { ...errors, name: 'Please fill in your name' };
	// 	if (_.isEmpty(formData.password) || _.isEmpty(formData.confirm_password) || formData.password.length < 6 || formData.password !== formData.confirm_password) errors = { ...errors, password: 'Invalid password' };
	// 	if (_.isEmpty(formData.company_address)) errors = { ...errors, company_address: 'Company address is reqiured' };
	// 	if (_.isEmpty(formData.city)) errors = { ...errors, city: 'Company city is reqiured' };
	// 	if (_.isEmpty(formData.state)) errors = { ...errors, state: 'Company state is reqiured' };
	// 	if (_.isEmpty(formData.zip_code)) errors = { ...errors, zip_code: 'Company zip code is reqiured' };
	// 	if (_.isEmpty(formData.country)) errors = { ...errors, country: 'Company country is reqiured' };
	// 	if (_.isEmpty(formData.email) || !Globals.validateEmail(formData.email)) errors = { ...errors, email: 'Company email is reqiured' };
	// 	if (_.isEmpty(formData.phone)) errors = { ...errors, phone: 'Company phone is reqiured' };
	// 	if (_.isEmpty(formData.certificate)) errors = { ...errors, certificate: 'Certificate is reqiured' };

	// 	updateFormErrors(errors);

	// 	if (!_.isEmpty(errors)) return;

	// 	//Make sure all the data is being correct.
	// 	return Globals.Axios().post(`${Globals.wsurl}user/signup`, {
	// 		data: formData,
	// 		deviceId: Globals.deviceId,
	// 	}).then(response => {

	// 		if (response.data.status && response.data.token) {
	// 			Globals.Cache.set(Globals.TokenKey, response.data.token);
	// 			Globals.Cache.setCookie(Globals.TokenKey, response.data.token);
	// 			return window.location.reload();
	// 		}

	// 		errors = { ...errors, error: response.data.errors }
	// 		return updateFormErrors(errors);

	// 	}).catch(error => {
	// 		errors = { ...errors, error: 'Something went wrong please try again later.' }
	// 		updateFormErrors(errors);
	// 		console.log(errors);
	// 	});


	 }

	const displayError = (key) => {
		// if (!_.isEmpty(formErrors[key])) return <div className="pt-3 text-red-700">{formErrors[key]}</div>
	}


	// useEffect(() => {
	// 	if (loggedin) return navigate('/dashboard');
	// });


	return (
		<div className="flex md:flex-row flex-col-reverse w-screen bgLinearBlue h-full">

			<div className="md:w-2/3 flex flex-col items-center justify-center h-full bg-white md:pb-10 pb-16 md:pt-16 pt-10" style={{ background: "#EDF2F8" }}>
				<form className="flex flex-col md:mt-10 mt-5" onSubmit={handleSubmit}>
					<div>
						<div className="flex flex-col font-bold items-center md:items-start text-xl md:w-full w-80" >
							<h1>Company Registration Form</h1>
							<h3 className="font-normal  pt-2 text-sm tracking-wider">Already have an account ?  <Link href={"/login"} > Sign in Now !</Link></h3>
						</div>
					</div>
					<div className="mt-8">
						<div className="flex lg:flex-row flex-col">
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="email" className="text-base bg-transparent font-normal py-2">Email*</label>
								<div className="outlin relative w-full">
									<input type="email" name="email" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="email" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Email</label>
								</div>
								{displayError('email')}
							</div>

							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="name" className="text-base bg-transparent font-normal py-2">Name*</label>
								<div className="outlin relative w-full">
									<input type="text" name="name" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="name" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Name</label>
								</div>
								{displayError('name')}
							</div>
						</div>
					</div>

					<div className="mt-8">
						<div className="flex lg:flex-row flex-col">
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="password" className="text-base bg-transparent font-normal py-2">Password*</label>
								<div className="outlin relative w-full">
									<input type="password" name="password" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="password" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Password</label>
								</div>
								{displayError('password')}
							</div>
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="confirm_password" className="text-base bg-transparent font-normal py-2">Confirm Password*</label>
								<div className="outlin relative w-full">
									<input type="password" name="confirm_password" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="confirm_password" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Confirm Password</label>
								</div>
								{displayError('password')}
							</div>
						</div>
					</div>

					<div className="mt-8">
						<div className="flex flex-col relative mt-5">
							<label htmlFor="company address" className="text-base bg-transparent font-normal py-2">Company Address*</label>
							<div className="outlin relative w-full">
								<input type="text" name="company_address" placeholder=" " className=" block p-4 md:w-full w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm  font-medium" onChange={handleChange} />
								<label htmlFor="company address" className="pointer-events-none absolute top-1  text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Company Address</label>
							</div>
							{displayError('company_address')}
						</div>

						<div className="flex lg:flex-row flex-col mt-5">
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="company_name" className="hidden text-base bg-transparent font-normal py-2">Company Name*</label>
								<div className="outlin relative w-full">
									<input type="text" name="company_name" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="company_name" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Company name</label>
								</div>
								{displayError('company_name')}
							</div>
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="city" className="hidden text-base bg-transparent font-normal py-2">City*</label>
								<div className="outlin relative w-full">
									<input type="text" name="city" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="city" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">City*</label>
								</div>
								{displayError('city')}
							</div>
						</div>
						<div className="flex lg:flex-row flex-col mt-5">
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="state" className="hidden text-base bg-transparent font-normal py-2">State*</label>
								<div className="outlin relative w-full">
									<input type="text" name="state" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="state" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">State*</label>
								</div>
								{displayError('state')}
							</div>
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="zip_code" className="hidden text-base bg-transparent font-normal py-2">Zip Code*</label>
								<div className="outlin relative w-full">
									<input type="text" name="zip_code" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="zip_code" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Zip Code*</label>
								</div>
								{displayError('zip_code')}
							</div>
						</div>
						<div className="flex lg:flex-row flex-col mt-5">
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="country" className="hidden text-base bg-transparent font-normal py-2">Choose a country*</label>
								<div className="outlin relative w-full">
									<select id="country" name="country" className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" defaultValue="" onChange={handleChange} >
										<option value="" disabled>Choose a country*</option>
										{/* {Globals.countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)} */}
									</select>
								</div>
								{displayError('country')}
							</div>
							<div className="flex flex-col relative lg:mr-2">
								<label htmlFor="phone" className="hidden text-base bg-transparent font-normal py-2">Phone Number*</label>
								<div className="outlin relative w-full">
									<input type="tel" name="phone" placeholder=" " className="block p-4 md:w-96 w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium" onChange={handleChange} />
									<label htmlFor="phone" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Phone Number*</label>
								</div>
								{displayError('phone')}
							</div>
						</div>
					</div>


					<div className="mt-8">
						<div className="flex flex-col relative mt-5">
							<label htmlFor="website" className="text-base bg-transparent font-normal py-2">Website</label>
							<div className="outlin relative w-full">
								<input type="text" name="website" placeholder=" " className="block p-4 md:w-full w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm  font-medium" onChange={handleChange} />
								<label htmlFor="website" className="pointer-events-none absolute top-1 text-sm bg-transparent p-4 duration-300 origin-0 opacity-60">Website</label>
							</div>
						</div>
						<div className="flex flex-col relative mt-5">
							<label htmlFor="Resale Certificate*" className="text-base bg-transparent font-normal py-2">Resale Certificate*</label>
							<input type="text" name="certificate" placeholder="### ### ####" className="block p-4 md:w-full w-80 inputLogin text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium placeholder:font-normal placeholder:text-sm" onChange={handleChange} />
							{displayError('certificate')}
						</div>
					</div>
					<div className="text-center">{displayError('error')}</div>
					<div className="w-full max-w-sm ml-auto mr-auto">
						<button className="w-full rounded-2xl btnLogin text-white py-3 tracking-wide mt-10 cursor-pointer" type="submit">Register Company</button>
					</div>


				</form>

			</div>

			<div className="md:w-1/3 md:flex hidden flex-col  justify-start mt-44 text-white px-16">
				<h1 className="text-5xl font-bold">ELEFTA</h1>
				<p className="font-medium leading-7 text-sm pt-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
			</div>


			<div className="md:hidden flex items-center justify-center my-auto h-44">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="white" /></svg>
				<h1 className="text-3xl font-bold text-white ml-3">ELEFTA</h1>
			</div>

		</div>

	);

}

export default Register
