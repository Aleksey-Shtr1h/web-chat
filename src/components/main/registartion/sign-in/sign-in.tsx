import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  WrapperFormMain,
  FormMainList,
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

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const dispatch = useDispatch();

  const validEmail = email !== `` ? true : false;
  const validPassword = password !== `` ? true : false;

  return (
    <MainRegistartion>
      <RegistartionWrapper>
        <FormRegstration
          action="#"
          method="post"
          onSubmit={(evt: React.SyntheticEvent) => {
            if (!validPassword || !validEmail) {
              return;
            }

            evt.preventDefault();
            dispatch(OperationUser.userAuth(email, password));
          }}
        >
          <WrapperFormMain>
            <FormMainList>
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
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(evt.target.value)
                  }
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
                  autoComplete="on"
                  value={password}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(evt.target.value)
                  }
                />
              </FormRegistrationItem>
            </FormMainList>

            <BtnFormReagistration type="submit">Sign In</BtnFormReagistration>
          </WrapperFormMain>
        </FormRegstration>
      </RegistartionWrapper>
    </MainRegistartion>
  );
};
