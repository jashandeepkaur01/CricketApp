const errorReducer = (state = { msg: "" }, action) => {
  const { type, msg } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [requestState] = matches;
  return {
    ...state,
    msg: requestState === "FAILURE" ? msg : "",
  };
};

export default errorReducer;
