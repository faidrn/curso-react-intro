import { ReactComponent as MoveIconSVG} from './moveNextIcon.svg';
//import { ReactComponent as DeleteIconSVG} from './deleteIcon.svg';

function TodoIcon(type){
    return (
        <span
            className={`icon check-icon-grey`}
        >
            <MoveIconSVG />
        </span>
    );
}

export { TodoIcon }; 