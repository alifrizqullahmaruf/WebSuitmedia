const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="w-full pb-4 rounded-lg shadow-xl card card-compact bg-base-100">
        <figure className="overflow-hidden rounded-t-lg">
          <img src={imageUrl} alt={title} className="w-full" />
        </figure>
        <div className="rounded-b-lg card-body">
          <h2 className="px-4 text-gray-500 card-title">{title}</h2>
          <p className="px-4">{description}</p>
          <div className="justify-end card-actions">
            {/* Add any additional actions or buttons here if needed */}
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  