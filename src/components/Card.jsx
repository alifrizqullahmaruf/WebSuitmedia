
const Card = ({ title, description, imageUrl, publishedAt }) => {
  // Format the published date
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="w-full pb-4 rounded-lg shadow-xl card card-compact bg-base-100">
      <figure className="overflow-hidden rounded-t-lg">
        <img src={imageUrl} alt={title} className="object-cover w-full rounded-t-lg h-60" />
      </figure>
      <div className="rounded-b-lg card-body">
        <h2 className="px-4 py-2 font-semibold text-gray-800 card-title">{title}</h2>
        <p className="px-4 text-gray-600">{description}</p>
        <p className="px-4 text-sm text-gray-500">{formatDate(publishedAt)}</p>
      </div>
    </div>
  );
}

export default Card;
