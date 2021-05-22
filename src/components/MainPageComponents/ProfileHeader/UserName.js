import React, { useEffect, useState } from 'react';
import checkIcon from '../../../images/checkIcon.png';
import { useSelector, useDispatch } from 'react-redux';
import { setEditable, setName } from '../../../store/actions';
import CancelIcon from '@material-ui/icons/Cancel';
import './profileHeader.scss';

export default function UserName() {
  const [nameInputValue, setNameInputValue] = useState();
  const [error, setError] = useState(false);
  const userName = useSelector((state) => state.UserNameReducer.name);
  const editable = useSelector((state) => state.UserNameReducer.editable);

  useEffect(() => {
    setNameInputValue(userName);
  }, []);

  const dispatch = useDispatch();

  const makeEditable = () => {
    dispatch(
      setEditable({
        editable: true,
      })
    );
  };

  const addName = () => {
    dispatch(
      setName({
        name: nameInputValue,
        editable: false,
      })
    );
  };

  const getName = (e) => {
    var reg_name = /^[a-zA-Z. \b]+$/;
    if (!reg_name.test(nameInputValue)) {
      setError(true);
    } else {
      setError(false);
    }
    setNameInputValue(e);
  };

  return (
    <div>
      {editable ? (
        <div>
          <div className="profileNameInputBox">
            <input
              value={nameInputValue}
              className="profileNameInput"
              onChange={(e) => getName(e.target.value)}
            />
            {error ? (
              <CancelIcon className="errorIcon" />
            ) : (
              <img
                src={checkIcon}
                className="checkIcon"
                alt={'simple icon...'}
                onClick={addName}
              />
            )}
          </div>
          {error ? (
            <div className="errorTextBox">
              <p className="errorText">Error Description</p>
            </div>
          ) : null}
        </div>
      ) : (
        <p onClick={makeEditable} className="profileName">
          {nameInputValue}
        </p>
      )}
    </div>
  );
}
