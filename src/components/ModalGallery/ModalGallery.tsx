import './ModalGallery.scss';

type ModalProps = {
  clickClose: () => void;
  item: String;
};

export const ModalGallery: React.FC<ModalProps> = ({ clickClose, item }) => {
  return (
    <div className='modal' onClick={() => clickClose()}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <button className='modal__button-close' onClick={() => clickClose()}>
          {item}
        </button>
      </div>
    </div>
  );
};
