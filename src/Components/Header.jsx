import PropTypes from "prop-types";

const Header = (props) => {
  const { title } = props;
  return (
    <div className='bg-emerald-200 w-full mx-auto'>
      <p className='text-2xl md:text-4xl font-bold text-center py-12'>
        {title}
      </p>
    </div>
  );
};

// The props validation function
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
