export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';



{
    type: ADD_COMMENT,
    text: 'Add my first comment !'
}


{
    type: REMOVE_COMMENT,
    text: 'Remove a comment !'
    id: 1
}


{
    type: EDIT_COMMENT,
    id: 2,
    text: 'Edit a comment !'
}


{
    type: THUMB_UP_COMMENT,
    id: 1,
}


{
    type: THUMB_DOWN_COMMENT,
    id: 2
}