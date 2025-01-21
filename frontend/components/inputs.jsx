import Dropdown from "react-bootstrap/Dropdown";
import styles from "./input.module.css";
import React from "react";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export function Input({ id, label, type, name, onChange}) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input type={type} className={styles.input} name={name} onChange={onchange}/>
    </div>
  );
}

export function Adress() {
  return (
    <div>
      <Input id={"rua"} label={"Rua"} type={"text"} />
      <Input id={"numero"} label={"Número"} type={"text"} />
      <Input id={"complemento"} label={"Complemento"} type={"text"} />
      <Input id={"cep"} label={"CEP"} type={"text"} />
      <Input id={"cidade"} label={"Cidade"} type={"text"} />
      <Input id={"estado"} label={"Estado"} type={"text"} />
    </div>
  );
}

export function DropdownMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
          Categoria do Emissor
          </Button>
          <Menu {...bindMenu(popupState)}> 
            <MenuItem onClick={popupState.close} >Sociedade Anônima</MenuItem>
            <MenuItem onClick={popupState.close}>Sociedade Limitada</MenuItem>
            <MenuItem onClick={popupState.close}>Outros</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export function Textarea() {
  return (
    <div className={styles.container}>
      <label htmlFor="textarea">Atividade Principal</label>
      <textarea id="textarea"></textarea>
    </div>
  );
}
