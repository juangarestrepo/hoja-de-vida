import { useEffect, useState } from 'react';
// import axios from 'axios';

const useLoadHobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    consultarHobbies();
  }, []);

  const consultarHobbies = async () => {
    setLoading(true);
    const arrayOfHobbies = [
      'https://images.unsplash.com/photo-1554080353-321e452ccf19?ixlib=rb-1.2.1',
      'https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-1.2.1',
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1',
    ];
    setHobbies(arrayOfHobbies);
    setLoading(false);
  };

  // const incrementarImagen = () => {
  //   if (imageIndex === hobbies.length - 1) {
  //     consultarHobbies();
  //     setImageIndex(imageIndex + 1);
  //   } else {
  //     setImageIndex(imageIndex + 1);
  //   }
  // };

  return {
    currentImage: hobbies,
    loading,
    // incrementarImagen,
  };
};

export { useLoadHobbies };
