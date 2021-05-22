import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExperienceDuration } from '../../../store/actions';
import CancelIcon from '@material-ui/icons/Cancel';
import checkIcon from '../../../images/checkIcon.png';

export default function UserExperienceListItem({ item }) {
  const [expInputValue, setExpInputValue] = useState(
    item.duration !== undefined ? item.duration : ''
  );
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const getInputVal = (e) => {
    const reg_expItem = /[0-9\s]*$/;
    if (!reg_expItem.test(expInputValue)) {
      setError(true);
      alert('You need to write just numbers');
    } else {
      setError(false);
    }
    setExpInputValue(e);
  };

  const setDuration = () => {
    dispatch(
      addExperienceDuration({
        id: item.id,
        duration: expInputValue,
        editable: false,
      })
    );
  };

  return (
    <div className="userExpItemBox">
      <p className="userExpItemLabel">- {item.label}</p>
      {item.duration === undefined ? (
        <div className="userExpItemDurationInputBox">
          <input
            value={expInputValue}
            onChange={(e) => getInputVal(e.target.value)}
            className="userExpItemDurationInput"
          />
          {error ? (
            <CancelIcon className="errorIcon" />
          ) : (
            <img
              src={checkIcon}
              className="checkIcon"
              alt={'simple icon...'}
              onClick={setDuration}
            />
          )}
        </div>
      ) : (
        <p className="userExpItemDuration">
          {item.duration === 1
            ? `${item.duration} year`
            : `${item.duration} years`}
        </p>
      )}
    </div>
  );
}
