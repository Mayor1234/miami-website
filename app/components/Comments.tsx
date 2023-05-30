'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
  _updatedAt: string;
};

const Comments = ({ ...post }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { comment } = post;

  console.log(comment);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch('/api/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-8">
      <div className="border-1 border-gray-300  p-4 md:p-8">
        <h3 className="text-3xl font-semibold tracking-normal">
          Leave a comment
        </h3>
        <p className="text-lg text-gray-500 pt-2 -tracking-normal">
          Your email address will not be published
        </p>
        <form
          className="mt-7  flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
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
            Post Comment &#10095;
          </button>
        </form>
        <section>
          <div className="w-full flex flex-col p-2 md:p-10 my-10 mx-auto shadow-md space-y-2">
            <h2 className="text-2xl border-b-1 border-gray-400 pb-2 text-gray-700 mb-4 leading-tight font-semibold">
              Comments
            </h2>
            <div>
              {comment.map((item: Inputs) => (
                <div
                  key={item._id}
                  className="my-4 pb-3 border-b-1 border-gray-300"
                >
                  <div className="flex items-center  gap-3">
                    <h3 className="py-1 font-semibold capitalize">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm ">
                      {new Date(item._updatedAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <p className="text-gray-500">{item.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Comments;
