import styles from "./input.module.css";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { v4 as uuidv4 } from 'uuid';


import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { styled } from "@mui/material";

const dropdownEmisser = [
  { "Dados do emissor": ["Sociedade Anônima", "Sociedade Limitada", "Outros"] },
];

const dropdownTypeDebenture = [
  {
    "Tipo de Debênture": ["Simples", "Conversível", "Permutável"],
  },
];
const dropdownRemuneration = [
  {
    "Remuneração": ["Juros Fixos", "IPCA", "CDI", "Outros"],
  },
];
const dropdownPaymentFrequency = [
  {
    " Periodicidade de Pagamento": ["Mensal", "Semestral", "Anual"],
  },
];

// criar lista de dropsdowns e classe para diferenciar
export function Input({ id, label, type, onChange, value }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={styles.input}
        onChange={onChange}
        value={value}
        id={id}
      />
    </div>
  );
}

export function DropdownMenu({ items, value, onChange }) {
  if (!items || items.length === 0) {
    console.error("DropdownMenu: A propriedade 'items' está vazia ou indefinida.");
    return null; 
  }

  const [menuTitle, menuOptions] = Object.entries(items[0])[0];

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {value || `${menuTitle}`} 
          </Button>
          <Menu {...bindMenu(popupState)}>
            {menuOptions.map((option, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  onChange(option); 
                  popupState.close(); 
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}


export function Textarea({onChange}) {
  return (
    <div className={styles.container} onChange={onChange}>
      <label htmlFor="textarea">Atividade Principal</label>
      <textarea id="textarea"></textarea>
    </div>
  );
}

export function Checkbox({ value, onChange}) {
  return (
    <fieldset className={styles.checkboxContainer}>
      <legend>Amortização Antecipada</legend>

      <div>
        <input type="radio" id="yes" name="amortizacao" value='Sim' checked={value ==='Sim'} onChange={()=> onChange('Sim')}/>
        <label htmlFor="yes">Sim</label>
      </div>

      <div>
        <input type="radio" id="no" name="amortizacao" value='Não' checked={value === 'Não'} onChange={()=> onChange('Não')}/>
        <label htmlFor="no">Não</label>
      </div>
    </fieldset>
  );
}

export function Issuedate(){
  const [date, setDate] = useState('')

  useEffect(() => {
    const today = format(new Date(), "dd/MM/yyyy"); 
    setDate(today); 
  }, []);
  
  return(
    <div className={styles.date}>
      <label htmlFor="date">Data de Emissão</label>
      <p>{date}</p>
    </div>

  )
}

export function CodigoEmissao(){
  const [codigoEmissao, setCodigoEmissao] = useState('')

  setCodigoEmissao(uuidv4)

  return(
    <div>
      <p>{codigoEmissao}</p>
    </div>
  )
}