import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch } from 'react-redux';
import {
  setEditableExperience,
  deleteExperience,
} from '../../../store/actions';

export default function UserExperienceItem({ item }) {
  const dispatch = useDispatch();

  const makeEditable = () => {
    dispatch(setEditableExperience(item.id));
  };

  const deleteItem = () => {
    dispatch(deleteExperience(item.id));
  };

  return (
    <div className="userExpItemBox" key={item.id}>
      <p className="userExpItemText">{item.label}</p>
      <CancelIcon onClick={deleteItem} className="deleteIcon" />
    </div>
  );
}
