import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { abt } = useParams();
  const aboutData = [
    {
      slug: 'app',
      title: 'About the App',
     }
     ];
      const aboutContent = aboutData.find((item) => item.slug === abt);
    const { title, description } = aboutContent;
    return (
      <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
    );
    };
export default SinglePage;
