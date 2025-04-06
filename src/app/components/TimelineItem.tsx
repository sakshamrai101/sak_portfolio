interface Experience {
    name: string;
    description: string;
    src: string;
    time: string;
}

interface Props {
    item: Experience;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

const TimelineItem: React.FC<Props> = ({ item, onToggle }) => {
    return (
        <div className="relative flex flex-col items-center">
            {/* Blob */}
            <img
                src={item.src}
                alt={item.name}
                className="w-30 h-30 rounded-full border-4 border-white shadow-lg hover:scale-110 transition duration-300 cursor-pointer"
                onClick={onToggle}
            />

            <div className="mt-3 px-2 py-2 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all-duration-300">
                {item.name}
            </div>
        </div>  
    );
};

export default TimelineItem;
