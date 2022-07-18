import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import ReactLoading from 'react-loading';
import { useCatImage } from 'hooks/datos-curiosos/useCatImage';

const DatoCurioso = ({ dato }) => {
  const {
    loading,
    currentImage,
    imageIndex,
    incrementarImagen,
    disminuirImagen,
  } = useCatImage();
  return (
    <div className='w-96 bg-gray-200 p-4 rounded-lg shadow-lg flex flex-col gap-4 items-center'>
      <div className='flex items-center gap-4 text-3xl'>
        <button
          type='button'
          className='arrow-icon'
          disabled={imageIndex === 0}
          onClick={disminuirImagen}
        >
          <MdNavigateBefore />
        </button>
        <div className='min-h-[232px] flex items-center'>
          {loading ? (
            <ReactLoading type='spin' color='#6366f1' height={80} width={80} />
          ) : (
            <img className='rounded-lg' src={currentImage} alt='gato' />
          )}
        </div>
        <button type='button' onClick={incrementarImagen}>
          <MdNavigateNext className='arrow-icon' />
        </button>
      </div>
      <span className='text-gray-800'>{dato}</span>
    </div>
  );
};

export { DatoCurioso };
