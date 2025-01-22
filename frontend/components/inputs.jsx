import Dropdown from "react-bootstrap/Dropdown";
import styles from "./input.module.css";
import React, { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export function Input({ id, label, type, onChange, value }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={styles.input}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export function DropdownMenu({ value, onChange }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {value || "Selecione uma categoria"} {/* Mostra a categoria selecionada */}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                onChange("Sociedade Anônima");
                popupState.close();
              }}
            >
              Sociedade Anônima
            </MenuItem>
            <MenuItem
              onClick={() => {
                onChange("Sociedade Limitada");
                popupState.close();
              }}
            >
              Sociedade Limitada
            </MenuItem>
            <MenuItem
              onClick={() => {
                onChange("Outros");
                popupState.close();
              }}
            >
              Outros
            </MenuItem>
          </Menu>
        </>
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
