import './ModalGallery.scss';

type ModalProps = {
  clickClose: () => void;
};

export const ModalGallery: React.FC<ModalProps> = ({ clickClose }) => {
  return (
    <div className='modal-gallery'>
      <div className='modal-gallery-content'>
        <button onClick={() => clickClose()}>Close</button>
      </div>
    </div>
  );
};
