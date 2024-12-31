const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12  mx-auto text-center">
      <p className='text-yellow-500 mb-4'>----{heading}----</p>
      <h3 className="text-3xl  border-y-4 py-4">{subHeading}</h3>
    </div>
  );
};

export default SectionTitle;
