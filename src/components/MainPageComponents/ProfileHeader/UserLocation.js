import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, setEditableLocation } from '../../../store/actions';
import checkIcon from '../../../images/checkIcon.png';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';

export default function UserLocation() {
  const [addressInputValue, setAddressInputValue] = useState();
  const [error, setError] = useState(false);
  const userLocation = useSelector(
    (state) => state.UserLocationReducer.location
  );
  const editable = useSelector((state) => state.UserLocationReducer.editable);

  useEffect(() => {
    setAddressInputValue(userLocation);
  }, [userLocation]);

  const dispatch = useDispatch();

  const makeEditable = () => {
    dispatch(
      setEditableLocation({
        editable: true,
      })
    );
  };

  const getAddress = (e) => {
    var reg_address = /^[,a-zA-Z. \b]+$/;
    if (!reg_address.test(addressInputValue)) {
      setError(true);
    } else {
      setError(false);
    }
    setAddressInputValue(e);
  };

  const fetchData = async (val) => {
    let data = await axios.get(
      `http://api.positionstack.com/v1/forward?access_key=09a4ad98529f7643413cd8a8817fd37c&query=${val}`
    );
    let info = data?.data?.data[0];
    info && dispatch(getLocation(info));
  };

  const addLocation = () => {
    fetchData(addressInputValue && addressInputValue);
  };

  return (
    <div>
      {editable ? (
        <div>
          <div className="profileAddressInputBox">
            <input
              value={addressInputValue}
              className="profileAddressInput"
              onChange={(e) => getAddress(e.target.value)}
            />
            {error ? (
              <CancelIcon className="errorIcon" />
            ) : (
              <img
                src={checkIcon}
                className="checkIcon"
                alt={'simple icon...'}
                onClick={addLocation}
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
        <p onClick={makeEditable} className="profileAddress">
          {addressInputValue}
        </p>
      )}
    </div>
  );
}
