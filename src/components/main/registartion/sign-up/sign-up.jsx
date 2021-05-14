import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormMainList,
  WrapperFormMain,
} from '../../../../globalStyled/form.styled';

import { OperationUser } from '../../../../redux/user/userReducer';
import {
  BtnFormReagistration,
  FormRegistrationInput,
  FormRegistrationItem,
  FormRegistrationLabel,
  FormRegstration,
  MainRegistartion,
  RegistartionWrapper,
} from '../registration-main/registartion-main.styled';

export const SignUp = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const dispatch = useDispatch();

  const validPassword =
    password !== `` ? (password === confirmPassword ? true : false) : false;
  const validEmail = email !== `` ? true : false;
  const validName = name !== `` ? true : false;

  return (
    <MainRegistartion>
      <RegistartionWrapper>
        <FormRegstration
          action="#"
          method="post"
          onSubmit={(evt) => {
            evt.preventDefault();

            if (!validPassword || !validName || !validEmail) {
              return;
            }

            dispatch(OperationUser.userRegistration(name, email, password));
          }}
        >
          <WrapperFormMain>
            <FormMainList>
              <FormRegistrationItem valid={validName}>
                <FormRegistrationLabel htmlFor="login-name">
                  Name
                </FormRegistrationLabel>
                <FormRegistrationInput
                  valid={validName}
                  type="text"
                  id="login-name"
                  placeholder="Jhon Anderson"
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                />
              </FormRegistrationItem>

              <FormRegistrationItem valid={validEmail}>
                <FormRegistrationLabel htmlFor="email">
                  Email
                </FormRegistrationLabel>
                <FormRegistrationInput
                  valid={validEmail}
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </FormRegistrationItem>

              <FormRegistrationItem valid={validPassword}>
                <FormRegistrationLabel htmlFor="password">
                  Password
                </FormRegistrationLabel>
                <FormRegistrationInput
                  valid={validPassword}
                  type="password"
                  id="password"
                  placeholder="*********"
                  value={password}
                  autoComplete="off"
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </FormRegistrationItem>

              <FormRegistrationItem valid={validPassword}>
                <FormRegistrationLabel htmlFor="confirm_password">
                  Confirm Password
                </FormRegistrationLabel>
                <FormRegistrationInput
                  valid={validPassword}
                  type="password"
                  id="confirm_password"
                  placeholder="*********"
                  value={confirmPassword}
                  autoComplete="off"
                  onChange={(evt) => setConfirmPassword(evt.target.value)}
                />
              </FormRegistrationItem>
            </FormMainList>

            <BtnFormReagistration type="submit">Sign Up</BtnFormReagistration>
          </WrapperFormMain>
        </FormRegstration>
      </RegistartionWrapper>
    </MainRegistartion>
  );
};
