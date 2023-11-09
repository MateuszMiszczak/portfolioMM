import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import AnimatedChar from '../../utils/components/AnimatedChar';
import SocialMediaIcons from '../../utils/components/SocialMediaIcons';

export default function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async e => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-10 mx-auto md:w-1/2 md:gap-12 lg:gap-16">
      <h2>
        <AnimatedChar
          text={`Contact me`}
          textStyle={`p-6 md:text-3xl lg:text-4xl text-2xl w-fit`}
          onceOnly={false}
          stagg={0.035}
        />
      </h2>

      <motion.div
        whileInView={{ y: 0, scale: 1 }}
        initial={{ y: 200, scale: 0.4 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
        className="z-10 w-3/4 mb-2 text-black place-self-center md:mb-6 lg:mb-8"
      >
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/ba43bf26cc7c2faa5addf686f4b16f8c"
          method="POST"
          className="grid grid-cols-1 gap-9"
        >
          <div className="grid gap-9 ">
            <div className="relative">
              <input
                className={`placeholder w-full rounded-lg border-4 border-gray-200 bg-gray-200 p-5 shadow-lg shadow-gray-700 outline-none focus:border-fourthMainColor`}
                type="text"
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.name && (
                <p className="absolute left-0 text-red-500 duration-300 -top-7 animate-pulse">
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 100 characters'}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                className={`placeholder w-full rounded-lg border-4 border-gray-200 bg-gray-200 p-5 shadow-lg shadow-gray-700 outline-none focus:border-fourthMainColor`}
                type="text"
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="absolute left-0 text-red-500 -top-7 animate-pulse">
                  {errors.email.type === 'required' &&
                    'Your email address is required'}
                  {errors.email.type === 'pattern' && 'Invalid email address'}
                </p>
              )}
            </div>

            <div className="relative">
              <textarea
                className={`placeholder w-full rounded-lg border-4 border-gray-200 bg-gray-200 p-5 shadow-lg shadow-gray-700 outline-none focus:border-fourthMainColor`}
                type="text"
                placeholder="YOUR MESSAGE"
                rows="4"
                cols="50"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="absolute left-0 text-red-500 -top-7 animate-pulse">
                  {errors.message.type === 'required' &&
                    'This field is required'}
                  {errors.message.type === 'maxLength' &&
                    'Max length is 2000 characters'}
                </p>
              )}
            </div>
          </div>

          <motion.button
            initial={{ background: '#5601f5' }}
            whileHover={{ scale: 1.1, background: '#5601f5' }}
            whileTap={{ background: '#5601f5', scale: 0.95 }}
            className={`text-md rounded-lg border-4 border-fourthMainColor p-4 font-bold uppercase text-white shadow-lg shadow-gray-700 md:text-xl lg:text-2xl`}
            type="submit"
          >
            SEND ME A MESSAGE
          </motion.button>
        </form>
      </motion.div>

      <SocialMediaIcons />
    </section>
  );
}
