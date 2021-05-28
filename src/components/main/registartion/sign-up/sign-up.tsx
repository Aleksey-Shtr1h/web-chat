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

export const SignUp: React.FC = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const dispatch = useDispatch();

  const validPassword: boolean =
    password !== `` ? (password === confirmPassword ? true : false) : false;
  const validEmail: boolean = email !== `` ? true : false;
  const validName: boolean = name !== `` ? true : false;

  return (
    <MainRegistartion>
      <RegistartionWrapper>
        <FormRegstration
          action="#"
          method="post"
          onSubmit={(evt: React.SyntheticEvent) => {
            evt.preventDefault();

            if (!validPassword || !validName || !validEmail) {
              return;
            }

            dispatch(OperationUser.userRegistration(name, email, password));
          }}
        >
          <WrapperFormMain>
            <FormMainList>
              <FormRegistrationItem isValid={validName}>
                <FormRegistrationLabel htmlFor="login-name">
                  Name
                </FormRegistrationLabel>
                <FormRegistrationInput
                  isValid={validName}
                  type="text"
                  id="login-name"
                  placeholder="Jhon Anderson"
                  value={name}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setName(evt.target.value)
                  }
                />
              </FormRegistrationItem>

              <FormRegistrationItem isValid={validEmail}>
                <FormRegistrationLabel htmlFor="email">
                  Email
                </FormRegistrationLabel>
                <FormRegistrationInput
                  isValid={validEmail}
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(evt.target.value)
                  }
                />
              </FormRegistrationItem>

              <FormRegistrationItem isValid={validPassword}>
                <FormRegistrationLabel htmlFor="password">
                  Password
                </FormRegistrationLabel>
                <FormRegistrationInput
                  isValid={validPassword}
                  type="password"
                  id="password"
                  placeholder="*********"
                  value={password}
                  autoComplete="off"
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(evt.target.value)
                  }
                />
              </FormRegistrationItem>

              <FormRegistrationItem isValid={validPassword}>
                <FormRegistrationLabel htmlFor="confirm_password">
                  Confirm Password
                </FormRegistrationLabel>
                <FormRegistrationInput
                  isValid={validPassword}
                  type="password"
                  id="confirm_password"
                  placeholder="*********"
                  value={confirmPassword}
                  autoComplete="off"
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassword(evt.target.value)
                  }
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
