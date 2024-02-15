import { useEffect, useState } from "react";

function useCalculator() {
  const [error, setError] = useState(null);
  const [newClients, setNewClients] = useState();
  const [allClients, setAllClients] = useState();
  const [progress, setProgress] = useState(0);
  const [click, setClick] = useState(false);

  useEffect(() => {
    let interval;
    let i = 0;
    setProgress(i);
    if (validateInputs(newClients, allClients)) {
      setError(null);
      // Calculate the percentage
      let maxProgress = ((newClients * 100) / allClients).toFixed(0);
      interval = setInterval(() => {
        if (i >= maxProgress) {
          clearInterval(interval);
        } else {
          i++;
          setProgress(i);
        }
      }, 50);
    } else {
      setProgress(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [newClients, allClients, click]);

  useEffect(() => {
    let interval;
    if (error) {
      interval = setInterval(() => {
        setError(null);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [error]);

  function newClientsHandler(value) {
    setNewClients(+value);
  }

  function allClientsHandler(value) {
    setAllClients(+value);
  }

  function submitHandler() {
    setClick((prev) => !prev);
  }

  function validateInputs(newClients, allClients) {
    let flag = true;
    // New clients should not be empty and be possitive number
    if (newClients < 0) {
      setError("Incorrect new clients value");
      flag = false;
    }
    // All clients should not be empty and be possitive number
    else if (!allClients || allClients < 1) {
      setError("Incorrect all clients value");
      flag = false;
    }
    // All clients should be bigger or equal to new clients
    else if (newClients > allClients) {
      setError("New clients should be less than all clients");
      flag = false;
    }
    return flag;
  }

  return {
    error,
    progress,
    newClientsHandler,
    allClientsHandler,
    submitHandler,
  };
}

export { useCalculator };
