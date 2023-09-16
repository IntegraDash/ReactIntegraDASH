import Calendar from "react-calendar";
import "./style.css"
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";

import { useState } from "react";


function Alertas() {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [value, onChange] = useState<Value>(new Date());
  
    return (
      <div className="testecalendario">
        <Calendar onChange={onChange} value={value} />
        
      </div>
      
    );
}

    export default Alertas