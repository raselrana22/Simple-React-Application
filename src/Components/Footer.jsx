const Footer = () => {
  return (
    <div className='mx-auto bg-emerald-200 md:grid grid-cols-2 gap-6 py-6'>
      <div className=' px-4'>
        <p className='font-bold text-xl'>Md. Rasel Rana</p>
        <p className='font-normal text-m text-left'>
          {`Passionate about Full Stack Web Development, I'm on a journey to
          master React, Tailwind CSS, Next.js, and Prisma, with a drive to build
          dynamic and responsive web applications. Ready to create innovative
          solutions and make an impact in the digital world.`}
        </p>
      </div>
      <div className='text-center py-6 px-6 md:border-4 border-l-black'>
        <p className='text-violet-600 font-bold text-2xl'>
          “Don’t stop when you’re tired; stop when you’re done.”
        </p>
        <a href='#' className='text-black text-xl'>
          —Marilyn Monroe
        </a>
      </div>
    </div>
  );
};

export default Footer;
