import { useEffect, useRef } from 'react';

/** 
 * @desc runs callback function every interval
 * @param callback callback function to be run
 * @param delay time interval in invoking callback
 */
export function useInterval(callback, delay) {
  // Remember the latest callback.
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval. Based on built-in useEffect
  // hook which is automatically invoked if parameters
  // passed as dependencies - delay - has changed
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
