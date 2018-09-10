import uuid  from uuid;
import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, TUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from ."./actionTypes"

//add comment
function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('New comment');
boundAddComment('Another comment')

//edit comment
function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}
const boundEditComment = (id, text) => dispatch(editComment(id, text));

boundEditComment(2, 'Edit comment');

//remove comment
function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

const boundRemoveComment = id => dispatch(removeComment(id));

boundRemoveComment(1);


//thumb up 
function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        thumb: thumb + 1,
        id
    }
}

const boundThumbUpComment = id => dispatch(thumbUpComment(id));

boundThumbUpComment(1);

//thumb down
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        thumb: thumb - 1,
        id
    }
}

const boundThumbDownComment = id => dispatch(thumbDownComment(id));

boundThumbDownComment(2);


