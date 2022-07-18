/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import axios from 'axios';

const useCatImage = () => {
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const consultarImagen = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    );
    setImageList([...imageList, response.data[0].url]);
    setLoading(false);
  };

  useEffect(() => {
    consultarImagen();
  }, []);

  const incrementarImagen = () => {
    if (imageIndex === imageList.length - 1) {
      consultarImagen();
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const disminuirImagen = () => {
    setImageIndex(imageIndex - 1);
  };

  return {
    loading,
    currentImage: imageList[imageIndex],
    imageIndex,
    incrementarImagen,
    disminuirImagen,
  };
};

export { useCatImage };
