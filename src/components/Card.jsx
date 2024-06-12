const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="card card-compact w-full bg-base-100 shadow-xl rounded-lg">
        <figure className="rounded-t-lg overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full" />
        </figure>
        <div className="card-body rounded-b-lg">
          <h2 className="card-title px-4 text-gray-500">{title}</h2>
          <p className="px-4">{description}</p>
          <div className="card-actions justify-end">
            {/* Add any additional actions or buttons here if needed */}
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  