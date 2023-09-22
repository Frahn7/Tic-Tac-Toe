import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [Jugador, setJugador] = useState("x");
  const [x, setX] = useState("");
  const [x1, setX1] = useState("");
  const [x2, setX2] = useState("");
  const [x3, setX3] = useState("");
  const [x4, setX4] = useState("");
  const [x5, setX5] = useState("");
  const [x6, setX6] = useState("");
  const [x7, setX7] = useState("");
  const [x8, setX8] = useState("");
  const [MensajeWin, setMensajeWin] = useState("");

  const cambiarElemento = () => {
    if (x === "") {
      setX(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento1 = () => {
    if (x1 === "") {
      setX1(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento2 = () => {
    if (x2 === "") {
      setX2(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento3 = () => {
    if (x3 === "") {
      setX3(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento4 = () => {
    if (x4 === "") {
      setX4(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento5 = () => {
    if (x5 === "") {
      setX5(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento6 = () => {
    if (x6 === "") {
      setX6(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento7 = () => {
    if (x7 === "") {
      setX7(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };
  const cambiarElemento8 = () => {
    if (x8 === "") {
      setX8(Jugador);
      if (Jugador === "x") {
        setJugador("o");
      } else if (Jugador === "o") {
        setJugador("x");
      }
    }
  };

  useEffect(() => {
    if ((x === "x") & (x1 === "x") && x2 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x === "o") & (x1 === "o") && x2 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x, x1, x2]);

  useEffect(() => {
    if ((x === "x") & (x3 === "x") && x6 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x === "o") & (x3 === "o") && x6 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x, x3, x6]);

  useEffect(() => {
    if ((x === "x") & (x4 === "x") && x8 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x === "o") & (x4 === "o") && x8 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x, x4, x8]);

  useEffect(() => {
    if ((x3 === "x") & (x4 === "x") && x5 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x3 === "o") & (x4 === "o") && x5 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x3, x4, x5]);

  useEffect(() => {
    if ((x6 === "x") & (x7 === "x") && x8 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x6 === "o") & (x7 === "o") && x8 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x6, x7, x8]);

  useEffect(() => {
    if ((x1 === "x") & (x4 === "x") && x7 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x1 === "o") & (x4 === "o") && x7 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x1, x4, x7]);

  useEffect(() => {
    if ((x6 === "x") & (x4 === "x") && x2 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x6 === "o") & (x4 === "o") && x2 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x6, x4, x2]);

  useEffect(() => {
    if ((x5 === "x") & (x8 === "x") && x2 === "x") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else if ((x5 === "o") & (x8 === "o") && x2 === "o") {
      setMensajeWin("Felicidades, Ganaste!");
      
    } else console.log("nada aun");
  }, [x5, x8, x2]);

  return (
    <div className="bg-black text-white w-screen h-screen">
      <div className="mb-20 text-4xl justify-center flex ">
        <h1 className="underline mt-5" id="buttonText">
          Tateti:
        </h1>
      </div>
      <div className="flex justify-center text-5xl">
        <div className="flex flex-col gap-10 justify-center w-[20%]">
          <button
            className="border-4 border-blue-600"
            onClick={() => {
              cambiarElemento();
            }}
          >
            <span className="text-black">.</span>{" "}
            <span className="" id="XaO">
              {x}
            </span>
          </button>
          <button
            className="border-4 border-blue-600"
            onClick={() => {
              cambiarElemento1();
            }}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x1}</span>
          </button>
          <button
            className="border-4 border-blue-600"
            onClick={() => {
              cambiarElemento2();
            }}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x2}</span>
          </button>
        </div>
        <div className="flex flex-col gap-10 justify-center w-[20%]">
          <button
            className="border-4 border-blue-600"
            onClick={cambiarElemento3}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x3}</span>
          </button>
          <button
            className="border-4 border-blue-600"
            onClick={cambiarElemento4}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x4}</span>
          </button>
          <button
            className="border-4 border-blue-600"
            onClick={cambiarElemento5}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x5}</span>
          </button>
        </div>
        <div className="flex flex-col gap-10 justify-center w-[20%]">
          <button
            className="border-4 border-blue-600"
            onClick={cambiarElemento6}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x6}</span>
          </button>
          <button
            className="border-4 border-blue-600"
            onClick={cambiarElemento7}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x7}</span>
          </button>
          <button
            className="border-4 border-blue-600"
            onClick={cambiarElemento8}
          >
            <span className="text-black">.</span>
            <span id="XaO">{x8}</span>
          </button>
        </div>
      </div>

      {MensajeWin && MensajeWin.trim() !== "" ? (
        <div className="w-[100%] text-2xl justify-center flex mt-10">
          <p className="bg-black text-white" id="buttonText">
            {MensajeWin}
          </p>
        </div>
      ) : null}

      <div className="w-[100%] text-2xl justify-center flex mt-10">
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="border-2 rounded-full w-[20%] bg-white text-black"
          id="buttonText"
        >
          Volver a jugar
        </button>
      </div>
    </div>
  );
}

export default App;
