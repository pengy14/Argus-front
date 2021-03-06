import agent from './agent'
import swal from 'sweetalert'

function isPromise(v) {
    return v && typeof v.then === 'function';
}

const promiseMiddleware = store => next => action => {
    console.log("---action.payload---")
    console.log(action)
    if (isPromise(action.payload)) {
        store.dispatch({ type: 'ASYNC_START' })
        console.log("---payload----")
        console.log(action.payload)
        action.payload.then(
            res => {
                console.log(`res + ${res}`);
                action.payload = res;
                store.dispatch(action);
                if (action.type==='ADD_MAIL'){
                    swal({
                        title: "Done!",
                        text: "Already sended!",
                        icon: "success",
                        button: "Close",
                    });
                }
            }

        );

        return;
    }

    next(action);
};

const localStorageMiddleware = store => next => action => {
    if (action.type === 'REGISTER' || action.type === 'LOGIN') {
      if (!action.error) {
        window.localStorage.setItem('id', action.payload.user.id);
        agent.setToken(action.payload.user.id);
      }
    } else if (action.type === 'LOGOUT') {
      window.localStorage.setItem('id', '');
      agent.setToken(null);
    }
  
    next(action);
  };

export {
    promiseMiddleware
};

