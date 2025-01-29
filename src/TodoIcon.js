import { ReactComponent as MoveIconSVG} from './moveNextIcon.svg';
import { ReactComponent as DeleteIconSVG} from './deleteIcon.svg';

const iconTypes = {
    "doing": <MoveIconSVG className='icon' />,
    "delete": <DeleteIconSVG className='icon' />
};

const titleIcons = {
    "doing": "Move task to the Doing tab",
    "delete": "Delete task", 
};

function TodoIcon({ type, fill }){
    console.log(fill);
    return (
        <span
            className={`icon-fill-${fill} padding-right-${type} cursor-pointer`} 
            title={titleIcons[type]}
        >
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon }; 