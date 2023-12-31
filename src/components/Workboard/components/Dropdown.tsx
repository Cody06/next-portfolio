import { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOutsideClick from '@/hooks/useOutsideClick';

type Button = {
    label: string;
    onClick: () => void;
};
interface Props {
    buttonsList: Button[];
}

const Dropdown: React.FC<Props> = ({ buttonsList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false));

    const DropdownList = (
        <ul className="absolute right-0 w-max bg-white rounded-b-md rounded-tl-md shadow-md">
            {buttonsList.map((btn) => (
                <li key={btn.label} className="p-2 hover:text-blue-100b hover:bg-grey-90">
                    <button className="text-left w-full" onClick={btn.onClick}>
                        {btn.label}
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <div ref={ref}>
            <button
                className="w-8 h-8 text-grey-100 hover:text-blue-100b"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FontAwesomeIcon icon={faEllipsis} />
            </button>
            <div className="relative">{isOpen && DropdownList}</div>
        </div>
    );
};

export default Dropdown;
