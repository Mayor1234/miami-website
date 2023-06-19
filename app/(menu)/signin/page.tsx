'use client';

import Link from 'next/link';

import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import MenuHeader from '@/app/components/MenuHeader';
import Header from '@/app/components/Header';

type Inputs = {
  email: string;
  password: string;
};

function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => console.log(data);

  return (
    <div className="text-gray-700 ">
      <Header />
      <div className="p-5 my-5">
        <form
          className="mx-auto max-w-screen-sm p-10 shadow-md shadow-blue-500/10 mb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <h1 className="text-3xl text-gray-800 font-semibold">Sign In</h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account{' '}
            </p>
          </div>

          <div className="relative w-full mt-8">
            <input
              type="email"
              {...register('email', {
                required: 'Please enter email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter a valid email',
                },
              })}
              id="email"
              placeholder="Email"
              className="peer w-full mt-1 border-b-2 border-gray-300 px-0 py-2 pl-2 placeholder:text-transparent focus:border-blue-300 focus:outline-none"
              autoFocus
            />
            {errors.email && (
              <span className="text-red-400">{errors.email.message}</span>
            )}
            <label
              htmlFor="email"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Email
            </label>
          </div>
          <div className="relative w-full mt-8 mb-8">
            <input
              type="password"
              {...register('password', {
                required: 'Please enter password',
                minLength: {
                  value: 6,
                  message: '6 charaters minimum',
                },
              })}
              id="password"
              placeholder="Passowrd"
              className="peer w-full mt-1 border-b-2 border-gray-300 px-0 py-2 pl-2 placeholder:text-transparent focus:border-blue-300 focus:outline-none"
              autoFocus
            />
            {errors.password && (
              <span className="text-red-400">{errors.password.message}</span>
            )}
            <label
              htmlFor="password"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Password
            </label>
          </div>
          <div className="pb-8">
            <button
              type="submit"
              className="rounded w-full text-[#f7f8f9] bg-[--pry-color] py-2 shadow outline-none hover:bg-[--sec-color] hover:text-[#fff] active:bg-gray-900;"
            >
              Sign In
            </button>
          </div>
          <div className="mb-4 text-gray-500 text-sm">
            Don&apos;t have an account? &nbsp;
            <Link
              href="/signup"
              className="text-gray-600 font-semibold hover:text-[--sec-color] focus:outline-none"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
