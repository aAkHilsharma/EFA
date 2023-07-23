import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";


const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle,
  body, 
  footer, 
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
    
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose]);

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none foucs:ouline-none bg-neutral-800/70">
                <div
                    className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 h-full lg:h-auto md:h-auto"
                >
                    <div className={`
                    translate duration-300 h-full 
                    ${showModal ? 'translate-y-0' : 'translate-y-full' }
                    ${showModal ? 'opacity-100' : 'opacity-0' }
                    `}>
                        <div className="translate h-auto border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-center p-6 justify-center relative">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-lg font-semibold">{title}</p>
                                    {subtitle && <p className="text-sm pt-3 text-gray-400">{subtitle}</p>}
                                </div>
                                <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute right-9">
                                    <IoMdClose size={28} />
                                </button>
                            </div>
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>
                            <div className="flex flex-col gap-2 p-6">
                                {footer}
                            </div>
                        </div>
                    </div>  
                </div>
            </div> 
            
        </>
    ) 
}

export default Modal;