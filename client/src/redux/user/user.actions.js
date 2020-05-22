import UserActionTypes from './user.types';

// FOR GOOGLE SIGN IN 

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

// FOR EMAIL AND PASSWORD 

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START, 
  payload: emailAndPassword
});

// FOR BOTH GOOGLE & EMAIL/PSWRD 

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
}); 

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

// FOR SESSION CHECK 

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

// FOR SIGN-OUT 

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

// FOR SIGN-UP 

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS, 
  payload: {user, additionalData}
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE, 
  payload: error
});
