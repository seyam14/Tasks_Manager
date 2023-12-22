

const TargetAudienceSection = () => {
  const targetAudiences = [
    'Developers',
    'Corporate Professionals',
    'Bankers',
  ];

  return (
    <section className="mt-8 p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-4 text-indigo-600 text-center">Who Can Benefit from This Website?</h2>
      <p className="text-gray-700 mb-4">
        This website is designed to cater to a diverse audience. Here are some of the people who can benefit from it:
      </p>

      <ul className="list-disc ml-4 sm:ml-6">
        {targetAudiences.map((audience, index) => (
          <li key={index} className="mb-2 text-green-600">{audience}</li>
        ))}
      </ul>
    </section>
  );
};

export default TargetAudienceSection;
