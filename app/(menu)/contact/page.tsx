'use client';

import MenuHeader from '@/app/components/MenuHeader';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
  _updatedAt: string;
};

const Page = () => {
  const title = 'contact';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="min-h-screen">
      <MenuHeader title={title} />
      <div className="max-w-5xl mx-auto flex flex-col-reverse gap-8 my-8  md:flex-row md:gap-0 bg-slate-50">
        <div className="w-full mx-auto p-5 md:w-[50%] md:p-0 flex items-center h-full">
          <div className="w-full p-4 md:p-8">
            <h3 className="text-3xl font-semibold tracking-normal">
              Leave a message
            </h3>

            <form
              className="mt-7 flex flex-col gap-6"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register('_id')}
                type="hidden"
                name="_id"
                // value={post._id}
              />

              <label className="flex flex-col">
                <span className="font-semibold text-base py-2">Name</span>
                <input
                  type="name"
                  className="text-base placeholder:text-sm border-b-1 border-gray-400 py-2 px-4 outline-none focus-within:shadow-md focus:border-b-1 focus:border-[#1890ff]"
                  placeholder="Enter name"
                  {...register('name', {
                    required: 'Please enter your name',
                    minLength: {
                      value: 3,
                      message: 'minimum of 3 characters ',
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm pt-2">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <label className="flex flex-col">
                <span className="font-semibold text-base py-2">Email</span>
                <input
                  type="email"
                  className="text-base placeholder:text-sm border-b-1 border-gray-400 py-2 px-4 outline-none focus-within:shadow-md focus:border-b-1 focus:border-[#1890ff]"
                  placeholder="Enter email"
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-400 text-sm pt-2">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label className="flex flex-col">
                <span className="font-semibold text-base py-2">Comment</span>
                <textarea
                  className="text-base placeholder:text-sm border-b-1  border-gray-400 py-2 px-4 outline-none focus-within:shadow-md focus:border-b-1 focus:border-[#1890ff]"
                  placeholder="Enter Comments"
                  rows={4}
                  {...register('comment', {
                    required: 'Comment can not be empty',
                  })}
                />
                {errors.comment && (
                  <span className="text-red-400 text-sm pt-2">
                    {errors.comment.message}
                  </span>
                )}
              </label>
              <button
                type="submit"
                className="w-full bg-[#1890ff] py-2 text-[#fff] hover:bg-[#255b8ffe] hover:text-[#f7f8f9] duration-300 rounded-sm"
              >
                Send Message &#10095;
              </button>
            </form>
          </div>
        </div>
        <div className="w-full  md:w-[50%]  bg-[#dedfe0] flex justify-center items-center">
          <div className="p-8">
            <h3 className="text-3xl font-semibold tracking-normal pb-2">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-600">
              Thank you for considering our auto mechanic services. We are
              dedicated to providing high-quality automotive repairs and
              maintenance. If you have any questions or would like to schedule
              an appointment, please feel free to contact us using the
              information below. Our friendly staff will be happy to assist you.
            </p>
            <div className="my-6 text-gray-600 text-base">
              <h3 className="font-bold pb-2 text-xl text-gray-900">
                Contact Detail:
              </h3>
              <ul>
                <li>
                  <p>
                    <span className="font-medium text-base text-gray-900 pr-2">
                      Phone:{' '}
                    </span>{' '}
                    <span className="text-sm">08096430887, 08038074534</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-medium text-base text-gray-900 pr-2">
                      Email:{' '}
                    </span>{' '}
                    <span className="text-sm">
                      ioyeniyi0@gmail.com, ioyeniyi@yahoo.com
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-medium text-base text-gray-900 pr-2">
                      Address:{' '}
                    </span>{' '}
                    <span className="text-sm">
                      Udoudoma Avenue, Adjacent 100 Units Uyo, Aks.
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="my-4 text-gray-600 text-base">
              <h3 className="font-bold  pb-2 text-xl text-gray-900">
                Busines Hours:
              </h3>
              <ul>
                <li>
                  <p>
                    <span className="font-medium text-base text-gray-900 pr-2">
                      Mon - Sat:
                    </span>
                    <span className="text-sm"> 8:00am - 6:00pm</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-medium text-base text-gray-900 pr-2">
                      Sunday:
                    </span>
                    <span className="text-sm"> Closed</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
