import PropTypes from "prop-types";

const ProjectGeneralInfo = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    client,
    startingDate,
    endingDate,
  } = project;

  return (
    <div>
      <h1>{title}</h1>
      <p>Project description: {description}</p>
      <img src={imageUrl} alt={title} />
      <p>
        <span>Client: </span>
        {client}
      </p>
      <p>
        <span>Starting date: </span>
        {startingDate}
      </p>
      <p>
        <span>Ending date: </span>
        {endingDate}
      </p>
    </div>
  );
};

ProjectGeneralInfo.propTypes = {
  project: PropTypes.string,
};

export default ProjectGeneralInfo;
