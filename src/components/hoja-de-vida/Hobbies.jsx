import { useLoadHobbies } from 'hooks/hobbies/useLoadHobbies';

const Hobbies = () => {
  const { currentImage, loading } = useLoadHobbies();
  if (loading) return <div>Cargando...</div>;
  // eslint-disable-next-line no-console
  console.log(currentImage);
  return (
    <div>
      {currentImage.map((dato) => (
        <img src={dato} alt='hobbie' />
      ))}
    </div>
  );
};

export { Hobbies };
